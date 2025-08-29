/**
 * Carousel Configuration Provider
 * Semantic configuration management for image carousels with responsive design
 */

import type { 
  GlideInstance, 
  CarouselConfig
} from '../types';

/**
 * Provides responsive carousel configurations based on content and device
 */
export class CarouselConfigurationProvider {
  /**
   * Get configuration for image galleries with responsive breakpoints
   */
  public static getImageGalleryConfiguration(imageCount: number): CarouselConfig {
    const deviceInfo = this.getDeviceInformation();
    const enableLooping = imageCount >= this.getMinimumImagesForLooping(deviceInfo);

    const baseConfig: CarouselConfig = {
      type: enableLooping ? 'carousel' : 'slider',
      perView: this.getOptimalPerView(deviceInfo),
      focusAt: 0,
      startAt: 0,
      gap: this.getOptimalGap(deviceInfo),
      autoplay: false, // Disabled by default for image viewing
      hoverpause: true,
      keyboard: true,
      bound: !enableLooping,
      rewind: !enableLooping,
      rewindDuration: 800,
      animationDuration: 600,
      breakpoints: this.getResponsiveBreakpoints()
    };

    console.log(`[CarouselConfig] Generated configuration for ${imageCount} images:`, baseConfig);
    return baseConfig;
  }

  /**
   * Get configuration specifically for post galleries with autoplay
   */
  public static getPostGalleryConfiguration(imageCount: number): CarouselConfig {
    const config = this.getImageGalleryConfiguration(imageCount);
    
    // Enable autoplay for post galleries with sufficient content
    if (imageCount >= 3) {
      config.autoplay = 8000; // 8 seconds per slide
      config.hoverpause = true;
      console.log(`[CarouselConfig] Enabled autoplay for ${imageCount} images`);
    }

    return config;
  }

  /**
   * Get device information for responsive configuration
   */
  private static getDeviceInformation(): {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    screenWidth: number;
  } {
    const screenWidth = window.innerWidth;
    return {
      isMobile: screenWidth < 768,
      isTablet: screenWidth >= 768 && screenWidth < 1024,
      isDesktop: screenWidth >= 1024,
      screenWidth
    };
  }

  /**
   * Determine minimum images needed for looping based on device
   */
  private static getMinimumImagesForLooping(deviceInfo: ReturnType<typeof CarouselConfigurationProvider.getDeviceInformation>): number {
    if (deviceInfo.isMobile) return 2;
    if (deviceInfo.isTablet) return 3;
    return 4; // Desktop
  }

  /**
   * Get optimal images per view based on device
   */
  private static getOptimalPerView(deviceInfo: ReturnType<typeof CarouselConfigurationProvider.getDeviceInformation>): number {
    if (deviceInfo.isMobile) return 1;
    if (deviceInfo.isTablet) return 2;
    return 3; // Desktop
  }

  /**
   * Get optimal gap between slides based on device
   */
  private static getOptimalGap(deviceInfo: ReturnType<typeof CarouselConfigurationProvider.getDeviceInformation>): number {
    if (deviceInfo.isMobile) return 15;
    if (deviceInfo.isTablet) return 20;
    return 25; // Desktop
  }

  /**
   * Get responsive breakpoint configuration
   */
  private static getResponsiveBreakpoints(): Record<string, Partial<CarouselConfig>> {
    return {
      1440: { perView: 3, gap: 25 },
      1024: { perView: 2, gap: 20 },
      768: { perView: 2, gap: 15 },
      640: { perView: 1, gap: 15 },
      480: { perView: 1, gap: 10 },
      320: { perView: 1, gap: 10 }
    };
  }
}

/**
 * Carousel Engine Factory
 * Creates and manages Glide carousel instances with proper error handling
 */
export class CarouselEngineFactory {
  /**
   * Initialize a new carousel engine instance
   */
  public static async initializeCarouselEngine(
    containerElement: HTMLElement,
    configuration: CarouselConfig,
    componentName: string = 'ImageCarousel'
  ): Promise<GlideInstance | null> {
    try {
      console.log(`[CarouselEngine] Initializing ${componentName} with configuration:`, configuration);

      const { default: Glide } = await import('@glidejs/glide');

      if (!Glide) {
        throw new Error(`${componentName}: Glide class not available`);
      }

      const glideInstance = new Glide(containerElement, configuration);

      // Set up event handlers for debugging and monitoring
      this.setupEngineEventHandlers(glideInstance, componentName);

      // Mount and return the instance
      const mountedInstance = glideInstance.mount() as GlideInstance;
      
      // Store reference on container for debugging
      (containerElement as any).glideInstance = mountedInstance;

      console.log(`[CarouselEngine] ${componentName} successfully initialized`);
      return mountedInstance;

    } catch (error) {
      console.error(`[CarouselEngine] Failed to initialize ${componentName}:`, error);
      return null;
    }
  }

  /**
   * Set up event handlers for carousel engine monitoring
   */
  private static setupEngineEventHandlers(glideInstance: GlideInstance, componentName: string): void {
    glideInstance.on('mount.after', () => {
      console.log(`[CarouselEngine] ${componentName} mounted successfully`);
    });

    glideInstance.on('move.start', () => {
      console.log(`[CarouselEngine] ${componentName} slide transition started`);
    });

    glideInstance.on('move.after', () => {
      console.log(`[CarouselEngine] ${componentName} slide transition completed`);
    });

    glideInstance.on('destroy', () => {
      console.log(`[CarouselEngine] ${componentName} destroyed`);
    });
  }

  /**
   * Safely destroy a carousel engine instance
   */
  public static destroyCarouselEngine(
    engineInstance: GlideInstance | null, 
    containerSelector?: string,
    componentName: string = 'ImageCarousel'
  ): void {
    if (!engineInstance || typeof engineInstance.destroy !== 'function') {
      console.log(`[CarouselEngine] No valid ${componentName} instance to destroy`);
      return;
    }

    try {
      console.log(`[CarouselEngine] Destroying ${componentName} instance`);
      engineInstance.destroy();

      // Clean up container reference
      if (containerSelector) {
        const container = document.querySelector(containerSelector) as any;
        if (container) {
          container.glideInstance = null;
        }
      }

      console.log(`[CarouselEngine] ${componentName} destroyed successfully`);
    } catch (error) {
      console.error(`[CarouselEngine] Error destroying ${componentName}:`, error);
    }
  }
}

/**
 * Instance ID Generator
 * Creates unique identifiers for carousel instances
 */
export class CarouselInstanceIdGenerator {
  /**
   * Generate unique instance ID with semantic naming
   */
  public static generateUniqueId(postId?: string, prefix: string = 'carousel'): string {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 9);
    
    if (postId) {
      return `${prefix}-post-${postId}-${timestamp}-${randomSuffix}`;
    }
    
    return `${prefix}-${timestamp}-${randomSuffix}`;
  }

  /**
   * Generate container ID for DOM element
   */
  public static generateContainerId(instanceId: string): string {
    return `image-carousel-${instanceId}`;
  }

  /**
   * Extract post ID from instance ID (if available)
   */
  public static extractPostId(instanceId: string): string | null {
    const match = instanceId.match(/post-(\d+)/);
    return match ? match[1] : null;
  }
}