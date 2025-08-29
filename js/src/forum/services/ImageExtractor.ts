/**
 * ImageExtractor Service
 * 
 * Handles extraction of images from forum posts with proper timing coordination
 * between PhotoSwipe processing and carousel initialization.
 */

import type { ImageData } from '../types';

export interface ImageExtractionOptions {
  requirePhotoSwipeProcessing?: boolean;
  minImageCount?: number;
  maxRetries?: number;
  retryDelay?: number;
}

export class ImageExtractor {
  private static readonly DEFAULT_OPTIONS: Required<ImageExtractionOptions> = {
    requirePhotoSwipeProcessing: true,
    minImageCount: 2,
    maxRetries: 10,
    retryDelay: 100
  };

  /**
   * Extract images from a post element with timing awareness
   * Waits for PhotoSwipe to process images if required
   */
  public static async extractImagesFromPost(
    postElement: HTMLElement | null,
    options: ImageExtractionOptions = {}
  ): Promise<ImageData[]> {
    const config = { ...this.DEFAULT_OPTIONS, ...options };
    
    if (!postElement) {
      console.log('[ImageExtractor] No post element provided');
      return [];
    }

    console.log('[ImageExtractor] Starting extraction from post element');

    // If PhotoSwipe processing is required, wait for it
    if (config.requirePhotoSwipeProcessing) {
      return this.waitForPhotoSwipeProcessing(postElement, config);
    }

    // Otherwise extract immediately
    return this.extractImagesImmediately(postElement);
  }

  /**
   * Wait for PhotoSwipe to process images, then extract
   */
  private static async waitForPhotoSwipeProcessing(
    postElement: HTMLElement,
    config: Required<ImageExtractionOptions>
  ): Promise<ImageData[]> {
    let attempts = 0;

    return new Promise((resolve) => {
      const attemptExtraction = () => {
        attempts++;
        console.log(`[ImageExtractor] Attempt ${attempts}/${config.maxRetries} - checking for PhotoSwipe processed images`);

        const images = this.extractImagesImmediately(postElement);
        
        if (images.length >= config.minImageCount) {
          console.log(`[ImageExtractor] Successfully extracted ${images.length} images after ${attempts} attempts`);
          resolve(images);
          return;
        }

        if (attempts >= config.maxRetries) {
          console.warn(`[ImageExtractor] Max retries reached (${config.maxRetries}), returning ${images.length} images`);
          resolve(images);
          return;
        }

        // Retry after delay
        setTimeout(attemptExtraction, config.retryDelay);
      };

      attemptExtraction();
    });
  }

  /**
   * Extract images immediately from the current DOM state
   */
  private static extractImagesImmediately(postElement: HTMLElement): ImageData[] {
    const images: ImageData[] = [];
    
    // Look for PhotoSwipe processed images (wrapped in anchors)
    const photoSwipeAnchors = postElement.querySelectorAll('a[data-pswp]');
    console.log('[ImageExtractor] Found', photoSwipeAnchors.length, 'PhotoSwipe processed anchors');

    photoSwipeAnchors.forEach((anchor, index) => {
      const anchorElement = anchor as HTMLAnchorElement;
      const img = anchorElement.querySelector('img');
      
      if (!img || !anchorElement.href) {
        console.warn('[ImageExtractor] Skipping anchor without valid image or href');
        return;
      }

      const imageData: ImageData = {
        id: `img-${index}-${Date.now()}`,
        src: img.src,
        href: anchorElement.href,
        alt: img.alt || '',
        title: img.title || img.alt || '',
        width: parseInt(anchorElement.dataset.pswpWidth || '0', 10) || img.naturalWidth || 800,
        height: parseInt(anchorElement.dataset.pswpHeight || '0', 10) || img.naturalHeight || 600
      };

      images.push(imageData);
      console.log(`[ImageExtractor] Extracted image ${index + 1}: ${imageData.href}`);
    });

    console.log(`[ImageExtractor] Total images extracted: ${images.length}`);
    return images;
  }

  /**
   * Find post elements using various fallback strategies
   */
  public static findPostElement(postId: string): HTMLElement | null {
    console.log(`[ImageExtractor] Searching for post element with ID: ${postId}`);

    const selectors = [
      `[data-id="${postId}"] .Post-body`,
      `[data-id="${postId}"]`,
      `.PostStream-item[data-id="${postId}"] .Post-body`,
      `.PostStream-item[data-id="${postId}"]`,
      `#post-${postId} .Post-body`,
      `#post-${postId}`
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        console.log(`[ImageExtractor] Found post element with selector: ${selector}`);
        return element;
      }
    }

    console.warn(`[ImageExtractor] Post element not found for postId: ${postId}`);
    return null;
  }

  /**
   * Check if a post has enough images for carousel display
   */
  public static async hasEnoughImagesForCarousel(
    postId: string,
    minImageCount: number = 2
  ): Promise<boolean> {
    const postElement = this.findPostElement(postId);
    if (!postElement) return false;

    const images = await this.extractImagesFromPost(postElement, {
      requirePhotoSwipeProcessing: true,
      minImageCount
    });

    return images.length >= minImageCount;
  }
}