/**
 * ImageCarousel Component
 * 
 * Semantic image carousel component that properly coordinates with PhotoSwipe processing.
 * Follows a service-oriented architecture with clear separation of concerns.
 */

import Component from 'flarum/common/Component';
import type Mithril from 'mithril';
import type {
  CarouselState,
  ErrorState,
  ImageCarouselAttrs,
  GlideInstance,
  ImageData
} from '../types';

import { ImageExtractor } from '../services/ImageExtractor';
import { CarouselManager } from '../services/CarouselManager';
import { 
  CarouselConfigurationProvider,
  CarouselEngineFactory,
  CarouselInstanceIdGenerator 
} from '../utils/CarouselConfigurationProvider';

/**
 * Main image carousel component with proper lifecycle management
 */
export default class ImageCarousel extends Component<ImageCarouselAttrs> {
  private carouselState: CarouselState;
  private errorState: ErrorState = { hasError: false };
  private carouselEngine: GlideInstance | null = null;
  private containerElement: HTMLElement | null = null;
  private extractionPromise: Promise<ImageData[]> | null = null;

  oninit(vnode: Mithril.Vnode<ImageCarouselAttrs>) {
    super.oninit(vnode);
    
    console.log('[ImageCarousel] Initializing component for post:', vnode.attrs.postId);

    // Initialize component state
    this.carouselState = {
      isInitialized: false,
      isDestroying: false,
      isExtracting: false,
      instanceId: CarouselInstanceIdGenerator.generateUniqueId(vnode.attrs.postId),
      postId: vnode.attrs.postId,
      images: [],
      currentIndex: 0,
      lastUpdate: Date.now()
    };

    console.log('[ImageCarousel] Component initialized with instance ID:', this.carouselState.instanceId);
    
    // Start image extraction process immediately
    this.initiateImageExtraction(vnode.attrs);
  }

  /**
   * Initiate the image extraction process with proper timing coordination
   */
  private async initiateImageExtraction(attrs: ImageCarouselAttrs): Promise<void> {
    if (this.carouselState.isExtracting || this.extractionPromise) {
      console.log('[ImageCarousel] Extraction already in progress, skipping');
      return;
    }

    this.carouselState.isExtracting = true;
    console.log('[ImageCarousel] Starting image extraction for post:', attrs.postId);

    try {
      // Find post element using multiple strategies
      const postElement = this.findPostElement(attrs);
      
      if (!postElement) {
        throw new Error(`Post element not found for post ID: ${attrs.postId}`);
      }

      // Extract images with PhotoSwipe processing awareness
      this.extractionPromise = ImageExtractor.extractImagesFromPost(postElement, {
        requirePhotoSwipeProcessing: true,
        minImageCount: attrs.minImageCount || 2,
        maxRetries: 15, // Allow more retries for proper coordination
        retryDelay: 150
      });

      const extractedImages = await this.extractionPromise;
      
      console.log('[ImageCarousel] Image extraction completed:', extractedImages.length, 'images found');
      
      // Update component state with extracted images
      this.updateComponentState(extractedImages);
      
    } catch (error) {
      console.error('[ImageCarousel] Image extraction failed:', error);
      this.handleExtractionError(error);
    } finally {
      this.carouselState.isExtracting = false;
      this.extractionPromise = null;
    }
  }

  /**
   * Find post element using various fallback strategies
   */
  private findPostElement(attrs: ImageCarouselAttrs): HTMLElement | null {
    // Use provided element first
    if (attrs.postElement) {
      console.log('[ImageCarousel] Using provided post element');
      return attrs.postElement;
    }

    // Fall back to finding by post ID
    return ImageExtractor.findPostElement(attrs.postId);
  }

  /**
   * Update component state with extracted images
   */
  private updateComponentState(images: ImageData[]): void {
    this.carouselState.images = images;
    this.carouselState.lastUpdate = Date.now();
    
    console.log('[ImageCarousel] Component state updated with', images.length, 'images');
    
    // Trigger re-render to show carousel if we have enough images
    if (images.length >= 2) {
      m.redraw();
    }
  }

  /**
   * Handle image extraction errors
   */
  private handleExtractionError(error: any): void {
    this.errorState = {
      hasError: true,
      message: error instanceof Error ? error.message : 'Image extraction failed',
      component: 'ImageCarousel',
      timestamp: Date.now()
    };
    
    console.error('[ImageCarousel] Extraction error handled:', this.errorState);
  }

  view(_vnode: Mithril.Vnode<ImageCarouselAttrs>): Mithril.Children {
    console.log('[ImageCarousel] Rendering view - images:', this.carouselState.images.length, 'error:', this.errorState.hasError);
    
    // Show error state if there's an error
    if (this.errorState.hasError) {
      return this.renderErrorState();
    }

    // Don't render if we don't have enough images
    if (this.carouselState.images.length < 2) {
      console.log('[ImageCarousel] Not enough images for carousel, not rendering');
      return null;
    }

    // Show loading state while extracting
    if (this.carouselState.isExtracting) {
      return this.renderLoadingState();
    }
    
    console.log('[ImageCarousel] Rendering carousel with', this.carouselState.images.length, 'images');
    return this.renderCarouselContainer();
  }

  /**
   * Render the carousel container structure
   */
  private renderCarouselContainer(): Mithril.Children {
    const containerId = CarouselInstanceIdGenerator.generateContainerId(this.carouselState.instanceId);
    
    console.log('[ImageCarousel] Rendering container with ID:', containerId);

    return (
      <div className="image-carousel-wrapper">
        <div className="image-carousel-header">
          <h4>Image Gallery ({this.carouselState.images.length} images)</h4>
          <div className="carousel-counter">
            <span className="current">{this.carouselState.currentIndex + 1}</span> /
            <span className="total">{this.carouselState.images.length}</span>
          </div>
        </div>
        <div
          className="glide image-carousel"
          id={containerId}
        >
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {this.carouselState.images.map((image, index) => this.renderCarouselSlide(image, index))}
            </ul>
          </div>
          
          {this.renderNavigationArrows()}
          {this.renderNavigationBullets()}
        </div>
      </div>
    );
  }

  /**
   * Render individual carousel slide
   */
  private renderCarouselSlide(image: ImageData, index: number): Mithril.Children {
    return (
      <li
        key={`slide-${image.id}`}
        className="glide__slide carousel-slide"
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

  /**
   * Render navigation arrows
   */
  private renderNavigationArrows(): Mithril.Children {
    return (
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
    );
  }

  /**
   * Render navigation bullets
   */
  private renderNavigationBullets(): Mithril.Children {
    return (
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {this.carouselState.images.map((_, index) => (
          <button
            className={`glide__bullet ${index === this.carouselState.currentIndex ? 'glide__bullet--active' : ''}`}
            data-glide-dir={`=${index}`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    );
  }

  /**
   * Render loading state
   */
  private renderLoadingState(): Mithril.Children {
    return (
      <div className="image-carousel-loading">
        <div className="loading-spinner"></div>
        <p>Loading image gallery...</p>
      </div>
    );
  }

  /**
   * Render error state
   */
  private renderErrorState(): Mithril.Children {
    return (
      <div className="image-carousel-error">
        <p>Error loading image gallery: {this.errorState.message}</p>
        <button onclick={() => this.retryCarouselInitialization()}>
          Retry
        </button>
      </div>
    );
  }

  async oncreate(vnode: Mithril.VnodeDOM<ImageCarouselAttrs>) {
    super.oncreate(vnode);
    
    console.log('[ImageCarousel] Component created, checking for carousel initialization');
    console.log('[ImageCarousel] Current state - images:', this.carouselState.images.length, 'initialized:', this.carouselState.isInitialized);

    // If we have images and haven't initialized yet, do it now
    if (this.carouselState.images.length >= 2 && !this.carouselState.isInitialized) {
      await this.initializeCarouselEngine(vnode.attrs);
    }
  }

  async onupdate(vnode: Mithril.VnodeDOM<ImageCarouselAttrs>) {
    super.onupdate(vnode);
    
    console.log('[ImageCarousel] Component updated, checking state');
    
    // Initialize carousel if we now have enough images but haven't initialized
    if (this.carouselState.images.length >= 2 && !this.carouselState.isInitialized && !this.carouselState.isDestroying) {
      const containerId = CarouselInstanceIdGenerator.generateContainerId(this.carouselState.instanceId);
      const containerElement = document.querySelector(`#${containerId}`);
      
      if (containerElement) {
        console.log('[ImageCarousel] Container found in onupdate, initializing carousel');
        await this.initializeCarouselEngine(vnode.attrs);
      }
    }
  }

  /**
   * Initialize the carousel engine with proper configuration
   */
  private async initializeCarouselEngine(attrs: ImageCarouselAttrs): Promise<void> {
    if (this.carouselState.isInitialized || this.carouselState.images.length < 2) {
      console.log('[ImageCarousel] Skipping initialization - already initialized or not enough images');
      return;
    }

    try {
      // Find container element
      const containerId = CarouselInstanceIdGenerator.generateContainerId(this.carouselState.instanceId);
      this.containerElement = document.querySelector(`#${containerId}`);

      if (!this.containerElement) {
        throw new Error(`Carousel container not found: ${containerId}`);
      }

      // Get configuration
      const config = CarouselConfigurationProvider.getPostGalleryConfiguration(this.carouselState.images.length);

      // Override autoplay if specified
      if (attrs.enableAutoplay !== undefined) {
        config.autoplay = attrs.enableAutoplay ? 8000 : false;
      }

      console.log('[ImageCarousel] Initializing carousel engine with config:', config);

      // Initialize the carousel engine
      this.carouselEngine = await CarouselEngineFactory.initializeCarouselEngine(
        this.containerElement,
        config,
        'ImageCarousel'
      );

      if (this.carouselEngine) {
        // Register with carousel manager
        CarouselManager.register(
          this.carouselState.instanceId,
          this.carouselEngine,
          config,
          this.carouselState.postId
        );

        // Set up event handlers
        this.setupCarouselEventHandlers();

        // Mark as initialized
        this.carouselState.isInitialized = true;
        this.errorState = { hasError: false };
        
        console.log('[ImageCarousel] Carousel engine successfully initialized');
      }
    } catch (error) {
      console.error('[ImageCarousel] Failed to initialize carousel engine:', error);
      this.handleInitializationError(error);
    }
  }

  /**
   * Set up carousel event handlers for state management
   */
  private setupCarouselEventHandlers(): void {
    if (!this.carouselEngine) return;

    this.carouselEngine.on('mount.after', () => {
      console.log('[ImageCarousel] Carousel mounted with', this.carouselState.images.length, 'images');
    });

    this.carouselEngine.on('move.start', () => {
      CarouselManager.pauseOthers(this.carouselState.instanceId);
    });

    this.carouselEngine.on('move.after', () => {
      this.updateCurrentSlideIndex();
    });

    this.carouselEngine.on('destroy', () => {
      CarouselManager.unregister(this.carouselState.instanceId);
      this.carouselState.isInitialized = false;
    });
  }

  /**
   * Update current slide index for UI counter
   */
  private updateCurrentSlideIndex(): void {
    if (!this.containerElement) return;

    try {
      const activeSlide = this.containerElement.querySelector('.glide__slide--active');
      if (activeSlide) {
        const index = parseInt(activeSlide.getAttribute('data-slide-index') || '0', 10);
        if (index !== this.carouselState.currentIndex) {
          this.carouselState.currentIndex = index;
          m.redraw();
        }
      }
    } catch (error) {
      console.error('[ImageCarousel] Error updating slide index:', error);
    }
  }

  /**
   * Handle carousel initialization errors
   */
  private handleInitializationError(error: any): void {
    this.errorState = {
      hasError: true,
      message: error instanceof Error ? error.message : 'Carousel initialization failed',
      component: 'ImageCarousel',
      timestamp: Date.now()
    };
  }

  /**
   * Retry carousel initialization
   */
  private async retryCarouselInitialization(): Promise<void> {
    console.log('[ImageCarousel] Retrying carousel initialization');
    
    this.errorState = { hasError: false };
    this.carouselState.isInitialized = false;
    
    // Re-extract images and reinitialize
    await this.initiateImageExtraction(this.attrs);
    
    if (this.carouselState.images.length >= 2) {
      await this.initializeCarouselEngine(this.attrs);
    }
    
    m.redraw();
  }

  onbeforeremove(vnode: Mithril.VnodeDOM<ImageCarouselAttrs>) {
    super.onbeforeremove(vnode);
    console.log('[ImageCarousel] Component being removed, cleaning up');
    
    this.carouselState.isDestroying = true;
    this.destroyCarouselEngine();
  }

  onremove(vnode: Mithril.VnodeDOM<ImageCarouselAttrs>) {
    super.onremove(vnode);
    
    if (!this.carouselState.isDestroying) {
      this.destroyCarouselEngine();
    }
    
    console.log('[ImageCarousel] Component removed');
  }

  /**
   * Clean up carousel engine and resources
   */
  private destroyCarouselEngine(): void {
    if (!this.carouselEngine || this.carouselState.isDestroying) {
      return;
    }

    console.log('[ImageCarousel] Destroying carousel engine');
    this.carouselState.isDestroying = true;

    try {
      const containerId = CarouselInstanceIdGenerator.generateContainerId(this.carouselState.instanceId);
      
      CarouselEngineFactory.destroyCarouselEngine(
        this.carouselEngine,
        `#${containerId}`,
        'ImageCarousel'
      );
      
      CarouselManager.unregister(this.carouselState.instanceId);
    } catch (error) {
      console.error('[ImageCarousel] Error during cleanup:', error);
    } finally {
      this.carouselEngine = null;
      this.carouselState.isInitialized = false;
      this.containerElement = null;
    }
  }

  /**
   * Static method to check if component should be displayed
   */
  static async shouldDisplayCarousel(postElement: HTMLElement): Promise<boolean> {
    const images = await ImageExtractor.extractImagesFromPost(postElement, {
      requirePhotoSwipeProcessing: false, // Quick check without waiting
      minImageCount: 2
    });
    return images.length >= 2;
  }

  /**
   * Static method to check if component should be displayed by post ID
   */
  static async shouldDisplayCarouselByPostId(postId: string): Promise<boolean> {
    return ImageExtractor.hasEnoughImagesForCarousel(postId, 2);
  }
}