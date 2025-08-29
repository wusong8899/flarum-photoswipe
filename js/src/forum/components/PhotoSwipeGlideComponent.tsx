import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import type {
  GlideInstance,
  ImageData,
  GlideState,
  ErrorState
} from '../types';
import {
  getPostGalleryConfig,
  extractImagesFromPost,
  initializeGlide,
  destroyGlide,
  generateInstanceId,
  carouselManager
} from '../utils/GlideConfig';

export interface PhotoSwipeGlideAttrs {
  postElement?: HTMLElement;
  postId: string;
  discussionId?: string;
  enableAutoplay?: boolean;
}

/**
 * PhotoSwipeGlideComponent - Mithril component for image carousel
 * Integrates Glide.js carousel with existing PhotoSwipe functionality
 */
export default class PhotoSwipeGlideComponent extends Component<PhotoSwipeGlideAttrs> {
  private glideInstance: GlideInstance | null = null;
  private state: GlideState;
  private error: ErrorState = { hasError: false };
  private containerElement: HTMLElement | null = null;

  oninit(vnode: Mithril.Vnode<PhotoSwipeGlideAttrs>) {
    super.oninit(vnode);

    this.state = {
      isInitialized: false,
      isDestroying: false,
      instanceId: generateInstanceId(vnode.attrs.postId),
      images: [],
      currentIndex: 0
    };

    // Images will be extracted in oncreate when DOM is available
  }

  view(_vnode: Mithril.Vnode<PhotoSwipeGlideAttrs>): Mithril.Children {
    if (this.error.hasError) {
      return this.renderError();
    }

    if (!this.state.images || this.state.images.length === 0) {
      return null;
    }

    // Don't show carousel for single image
    if (this.state.images.length === 1) {
      return null;
    }

    return (
      <div className="photoswipe-glide-wrapper">
        <div className="photoswipe-glide-header">
          <h4>Gallery ({this.state.images.length} images)</h4>
          <div className="glide-counter">
            <span className="current">{this.state.currentIndex + 1}</span> /
            <span className="total">{this.state.images.length}</span>
          </div>
        </div>
        <div
          className="glide photoswipe-glide"
          id={`photoswipe-glide-${this.state.instanceId}`}
        >
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {this.state.images.map((image, index) => this.renderSlide(image, index))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
              aria-label="Previous image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
              aria-label="Next image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {this.state.images.map((_, index) => (
              <button
                className={`glide__bullet ${index === this.state.currentIndex ? 'glide__bullet--active' : ''}`}
                data-glide-dir={`=${index}`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  oncreate(vnode: Mithril.VnodeDOM<PhotoSwipeGlideAttrs>) {
    super.oncreate(vnode);

    // Find the post element and extract images
    const postElement = vnode.attrs.postElement ||
                      document.querySelector(`[data-id="${vnode.attrs.postId}"] .Post-body`);

    if (postElement) {
      this.state.images = extractImagesFromPost(postElement as HTMLElement);

      // Only initialize if we have 2+ images
      if (this.state.images.length >= 2) {
        // Re-render with images data
        m.redraw();

        // Initialize Glide after DOM is ready
        requestAnimationFrame(() => {
          this.initGlide(vnode.attrs);
        });
      }
    }
  }

  onupdate(vnode: Mithril.VnodeDOM<PhotoSwipeGlideAttrs>) {
    super.onupdate(vnode);

    // Check if images have changed
    const newImages = extractImagesFromPost(vnode.attrs.postElement);
    if (this.shouldUpdateGlide(this.state.images, newImages)) {
      this.state.images = newImages;
      if (this.glideInstance && this.state.isInitialized) {
        try {
          this.glideInstance.update();
        } catch (error) {
          console.error('Error updating Glide:', error);
          this.reinitializeGlide(vnode.attrs);
        }
      }
    }
  }

  onbeforeremove(vnode: Mithril.VnodeDOM<PhotoSwipeGlideAttrs>) {
    super.onbeforeremove(vnode);
    this.state.isDestroying = true;
    this.destroyGlide();
  }

  onremove(vnode: Mithril.VnodeDOM<PhotoSwipeGlideAttrs>) {
    super.onremove(vnode);
    if (!this.state.isDestroying) {
      this.destroyGlide();
    }
  }

  private renderSlide(image: ImageData, index: number): Mithril.Children {
    return (
      <li
        key={`slide-${image.id}`}
        className="glide__slide photoswipe-glide-slide"
        data-slide-index={index}
      >
        <div className="slide-container">
          <a
            href={image.href}
            data-pswp=""
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            title={image.title}
            className="slide-link"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="slide-image"
              loading="lazy"
            />
          </a>
          {image.title && (
            <div className="slide-caption">{image.title}</div>
          )}
        </div>
      </li>
    );
  }

  private renderError(): Mithril.Children {
    return (
      <div className="photoswipe-glide-error">
        <p>Error loading image gallery: {this.error.message}</p>
        <button onclick={() => this.retryInitialization()}>
          Retry
        </button>
      </div>
    );
  }

  private async initGlide(attrs: PhotoSwipeGlideAttrs): Promise<void> {
    if (this.state.isInitialized || this.state.images.length < 2) {
      return;
    }

    try {
      this.containerElement = document.querySelector(`#photoswipe-glide-${this.state.instanceId}`);

      if (!this.containerElement) {
        throw new Error('Glide container not found');
      }

      const config = getPostGalleryConfig(this.state.images.length);

      // Override autoplay if specified
      if (attrs.enableAutoplay !== undefined) {
        config.autoplay = attrs.enableAutoplay ? 8000 : false;
      }

      console.log(`🎢 PhotoSwipe Glide Configuration:`, JSON.stringify(config, null, 2));

      this.glideInstance = await initializeGlide(
        this.containerElement,
        config,
        'PhotoSwipeGlide'
      );

      if (this.glideInstance) {
        // Register with carousel manager
        carouselManager.register(
          this.state.instanceId,
          this.glideInstance,
          config,
          attrs.postId
        );

        // Set up event handlers
        this.setupEventHandlers();

        this.state.isInitialized = true;
        this.error = { hasError: false };
      }
    } catch (error) {
      console.error('Failed to initialize PhotoSwipe Glide:', error);
      this.error = {
        hasError: true,
        message: error instanceof Error ? error.message : 'Unknown error',
        component: 'PhotoSwipeGlideComponent'
      };
    }
  }

  private setupEventHandlers(): void {
    if (!this.glideInstance) return;

    this.glideInstance.on('mount.after', () => {
      console.log(`PhotoSwipe Glide mounted: ${this.state.images.length} images`);
    });

    this.glideInstance.on('move.start', () => {
      carouselManager.pauseOthers(this.state.instanceId);
    });

    this.glideInstance.on('move.after', () => {
      // Update current index - Glide doesn't provide direct access to index
      // We'll need to calculate it from the transform or use a different approach
      this.updateCurrentIndex();
    });

    this.glideInstance.on('destroy', () => {
      carouselManager.unregister(this.state.instanceId);
      this.state.isInitialized = false;
    });
  }

  private updateCurrentIndex(): void {
    if (!this.containerElement) return;

    try {
      const activeSlide = this.containerElement.querySelector('.glide__slide--active');
      if (activeSlide) {
        const index = parseInt(activeSlide.getAttribute('data-slide-index') || '0', 10);
        if (index !== this.state.currentIndex) {
          this.state.currentIndex = index;
          // Trigger re-render to update the counter
          m.redraw();
        }
      }
    } catch (error) {
      console.error('Error updating current index:', error);
    }
  }

  private destroyGlide(): void {
    if (!this.glideInstance || this.state.isDestroying) {
      return;
    }

    this.state.isDestroying = true;

    try {
      destroyGlide(this.glideInstance, `#photoswipe-glide-${this.state.instanceId}`);
      carouselManager.unregister(this.state.instanceId);
    } catch (error) {
      console.error('Error destroying PhotoSwipe Glide:', error);
    } finally {
      this.glideInstance = null;
      this.state.isInitialized = false;
      this.containerElement = null;
    }
  }

  private shouldUpdateGlide(oldImages: ImageData[], newImages: ImageData[]): boolean {
    if (!oldImages || !newImages) return true;
    if (oldImages.length !== newImages.length) return true;

    return oldImages.some((oldImage, index) => {
      const newImage = newImages[index];
      return oldImage?.src !== newImage?.src ||
            oldImage?.href !== newImage?.href;
    });
  }

  private async reinitializeGlide(attrs: PhotoSwipeGlideAttrs): Promise<void> {
    this.destroyGlide();
    this.state.isDestroying = false;
    this.state.isInitialized = false;

    // Wait a bit before reinitializing
    setTimeout(() => {
      this.initGlide(attrs);
    }, 100);
  }

  private retryInitialization(): void {
    this.error = { hasError: false };
    this.reinitializeGlide(this.attrs);
  }

  /**
   * Static method to check if component should be displayed
   */
  static shouldDisplay(postElement: HTMLElement): boolean {
    const images = extractImagesFromPost(postElement);
    return images.length >= 2; // Only show for 2+ images
  }

  /**
   * Static method to check if component should be displayed by post ID
   */
  static shouldDisplayByPostId(postId: string): boolean {
    const postElement = document.querySelector(`[data-id="${postId}"] .Post-body`);
    if (!postElement) return false;
    return PhotoSwipeGlideComponent.shouldDisplay(postElement as HTMLElement);
  }
}
