/**
 * Type Definitions for PhotoSwipe Image Carousel Integration
 * Semantic types for carousel functionality with proper image handling
 */

// =============================================================================
// CAROUSEL ENGINE TYPES (Glide.js integration)
// =============================================================================

/**
 * Carousel engine instance interface (wraps Glide.js)
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
 * Carousel configuration options
 */
export interface CarouselConfig {
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
  breakpoints?: Record<string, Partial<CarouselConfig>>;
}

// =============================================================================
// IMAGE DATA TYPES
// =============================================================================

/**
 * Extracted image information with PhotoSwipe metadata
 */
export interface ImageData {
  id: string;
  src: string;
  href: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

/**
 * Result of image extraction operation
 */
export interface ImageExtractionResult {
  success: boolean;
  images: ImageData[];
  source: 'immediate' | 'delayed' | 'fallback';
  attempts: number;
  extractionTime: number;
}

/**
 * Post context for image organization
 */
export interface PostImageContext {
  postId: string;
  discussionId?: string;
  postElement?: HTMLElement;
  images: ImageData[];
  lastExtracted: number;
}

// =============================================================================
// COMPONENT STATE TYPES
// =============================================================================

/**
 * Image carousel component state
 */
export interface CarouselState {
  isInitialized: boolean;
  isDestroying: boolean;
  isExtracting: boolean;
  instanceId: string;
  postId: string;
  images: ImageData[];
  currentIndex: number;
  lastUpdate: number;
}

/**
 * Component error state
 */
export interface ErrorState {
  hasError: boolean;
  message?: string;
  component?: string;
  timestamp?: number;
}

// =============================================================================
// CAROUSEL MANAGEMENT TYPES
// =============================================================================

/**
 * Registered carousel instance data
 */
export interface CarouselRegistration {
  instanceId: string;
  glideInstance: GlideInstance;
  config: CarouselConfig;
  postId: string;
  createdAt: number;
  lastActivity: number;
}

/**
 * Carousel manager statistics
 */
export interface CarouselManagerStats {
  totalCount: number;
  postCounts: Record<string, number>;
  oldestAge: number;
  newestAge: number;
  averageAge: number;
}

// =============================================================================
// COMPONENT PROPS TYPES
// =============================================================================

/**
 * Props for the main image carousel component
 */
export interface ImageCarouselAttrs {
  postElement?: HTMLElement;
  postId: string;
  discussionId?: string;
  enableAutoplay?: boolean;
  minImageCount?: number;
  extractionTimeout?: number;
}