/**
 * Type Definitions for PhotoSwipe Glide Integration
 * Defines interfaces for Glide carousel functionality within PhotoSwipe
 */

// =============================================================================
// GLIDE TYPES
// =============================================================================

/**
 * Glide instance interface
 */
export interface GlideInstance {
  destroy: () => void;
  update: () => void;
  go: (pattern: string | number) => void;
  mount: () => GlideInstance;
  on: (events: string | string[], handler: Function) => void;
  play: () => void;
  pause: () => void;
}

/**
 * Glide configuration options
 */
export interface GlideOptions {
  type?: string;
  perView?: number;
  focusAt?: number | string;
  startAt?: number;
  gap?: number;
  autoplay?: number | boolean;
  hoverpause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  rewind?: boolean;
  rewindDuration?: number;
  animationDuration?: number;
  breakpoints?: Record<string, Partial<GlideOptions>>;
}

// =============================================================================
// IMAGE DATA TYPES
// =============================================================================

/**
 * Image data extracted from PhotoSwipe anchors
 */
export interface ImageData {
  id: string;
  src: string;
  href: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
}

/**
 * Post context information for image organization
 */
export interface PostContext {
  postId: string;
  discussionId?: string;
  images: ImageData[];
}

// =============================================================================
// COMPONENT STATE TYPES
// =============================================================================

/**
 * Glide component state
 */
export interface GlideState {
  isInitialized: boolean;
  isDestroying: boolean;
  instanceId: string;
  images: ImageData[];
  currentIndex: number;
}

/**
 * Error state for error handling
 */
export interface ErrorState {
  hasError: boolean;
  message?: string;
  component?: string;
}

// =============================================================================
// CAROUSEL MANAGER TYPES
// =============================================================================

/**
 * Carousel instance data for management
 */
export interface CarouselInstanceData {
  glide: GlideInstance;
  config: GlideOptions;
  type: string;
  postId?: string;
}

/**
 * Carousel manager interface
 */
export interface ICarouselManager {
  register(instanceId: string, glideInstance: GlideInstance, config: GlideOptions, postId?: string): void;
  unregister(instanceId: string): void;
  pauseOthers(activeId: string): void;
  cleanupAll(): void;
  getInstanceCount(): number;
}