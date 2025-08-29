import type { 
  GlideInstance, 
  GlideOptions, 
  ImageData, 
  CarouselInstanceData, 
  ICarouselManager 
} from '../types';

/**
 * Configuration for PhotoSwipe image carousels
 */
export function getImageGlideConfig(imageCount: number): GlideOptions {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;
  
  // Determine if we have enough images for carousel mode
  const requiredImages = isMobile ? 2 : 3;
  const enableLoop = imageCount >= requiredImages;

  // Base configuration optimized for image viewing
  const config: GlideOptions = {
    type: enableLoop ? 'carousel' : 'slider',
    perView: isMobile ? 1 : isTablet ? 2 : 3,
    focusAt: 0,
    startAt: 0,
    gap: isMobile ? 15 : 20,
    autoplay: false, // Disabled by default for image viewing
    hoverpause: true,
    keyboard: true,
    bound: !enableLoop,
    rewind: !enableLoop,
    rewindDuration: 800,
    animationDuration: 600,

    breakpoints: {
      1440: { perView: 3, gap: 25 },
      1024: { perView: 2, gap: 20 },
      768: { perView: 2, gap: 15 },
      640: { perView: 1, gap: 15 },
      480: { perView: 1, gap: 10 },
      320: { perView: 1, gap: 10 }
    }
  };

  return config;
}

/**
 * Configuration for single post image galleries
 */
export function getPostGalleryConfig(imageCount: number): GlideOptions {
  const config = getImageGlideConfig(imageCount);
  
  // Enable autoplay for post galleries if there are enough images
  if (imageCount >= 3) {
    config.autoplay = 8000; // 8 seconds per slide
    config.hoverpause = true;
  }

  return config;
}

/**
 * Extract image data from PhotoSwipe anchors
 */
export function extractImagesFromPost(postElement: HTMLElement): ImageData[] {
  const images: ImageData[] = [];
  const anchors = postElement.querySelectorAll('a[data-pswp]');

  anchors.forEach((anchor, index) => {
    const img = anchor.querySelector('img');
    if (img && anchor instanceof HTMLAnchorElement) {
      const imageData: ImageData = {
        id: `img-${Date.now()}-${index}`,
        src: img.src,
        href: anchor.href,
        width: parseInt(anchor.getAttribute('data-pswp-width') || '0', 10) || undefined,
        height: parseInt(anchor.getAttribute('data-pswp-height') || '0', 10) || undefined,
        alt: img.alt || `Image ${index + 1}`,
        title: img.title || anchor.title || undefined
      };
      images.push(imageData);
    }
  });

  return images;
}

/**
 * Find container element using multiple selector strategies
 */
export function findContainer(selectors: string[]): HTMLElement | null {
  for (const selector of selectors) {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      return element;
    }
  }
  return null;
}

/**
 * Safe Glide destruction with error handling
 */
export function destroyGlide(glide: GlideInstance | null, containerSelector?: string): void {
  if (glide && typeof glide.destroy === 'function') {
    try {
      glide.destroy();

      if (containerSelector) {
        const container = document.querySelector(containerSelector) as any;
        if (container) {
          container.glideInstance = null;
        }
      }
    } catch (error) {
      console.error('Error destroying Glide:', error);
    }
  }
}

/**
 * Initialize Glide with error handling and dynamic import
 */
export async function initializeGlide(
  container: HTMLElement,
  config: GlideOptions,
  componentName: string = 'PhotoSwipeGlide'
): Promise<GlideInstance | null> {
  try {
    const { default: Glide } = await import('@glidejs/glide');

    if (!Glide) {
      throw new Error(`${componentName}: Glide class not found`);
    }

    const glide = new Glide(container, config);

    glide.on('mount.after', () => {
      console.log(`${componentName} Glide initialized with ${config.perView} slides per view`);
    });

    glide.on('destroy', () => {
      console.log(`${componentName} Glide destroyed`);
    });

    const instance = glide.mount() as GlideInstance;
    (container as any).glideInstance = instance;

    return instance;
  } catch (error) {
    console.error(`Failed to initialize ${componentName}:`, error);
    return null;
  }
}

/**
 * Generate unique instance ID for carousel management
 */
export function generateInstanceId(postId?: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9);
  const prefix = postId ? `post-${postId}` : 'gallery';
  return `${prefix}-${timestamp}-${random}`;
}

/**
 * Carousel Manager for handling multiple Glide instances
 */
class CarouselManager implements ICarouselManager {
  private instances: Map<string, CarouselInstanceData> = new Map();

  register(
    instanceId: string, 
    glideInstance: GlideInstance, 
    config: GlideOptions,
    postId?: string
  ): void {
    this.instances.set(instanceId, {
      glide: glideInstance,
      config,
      type: config.type || 'carousel',
      postId
    });
  }

  unregister(instanceId: string): void {
    const instance = this.instances.get(instanceId);
    if (instance) {
      try {
        if (instance.glide && typeof instance.glide.destroy === 'function') {
          instance.glide.destroy();
        }
      } catch (error) {
        console.error('Error destroying Glide instance during unregister:', error);
      } finally {
        this.instances.delete(instanceId);
      }
    }
  }

  pauseOthers(activeId: string): void {
    this.instances.forEach((instance, id) => {
      if (id !== activeId && instance.config.autoplay) {
        try {
          instance.glide.pause();
        } catch (error) {
          console.error(`Error pausing Glide instance ${id}:`, error);
        }
      }
    });
  }

  cleanupAll(): void {
    this.instances.forEach((instance, id) => {
      try {
        instance.glide.destroy();
      } catch (error) {
        console.error(`Error cleaning up Glide instance ${id}:`, error);
      }
    });
    this.instances.clear();
  }

  getInstanceCount(): number {
    return this.instances.size;
  }

  getInstancesByPost(postId: string): CarouselInstanceData[] {
    const postInstances: CarouselInstanceData[] = [];
    this.instances.forEach((instance) => {
      if (instance.postId === postId) {
        postInstances.push(instance);
      }
    });
    return postInstances;
  }
}

export const carouselManager = new CarouselManager();