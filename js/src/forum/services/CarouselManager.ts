/**
 * CarouselManager Service
 * 
 * Centralized management of carousel instances to prevent conflicts
 * and ensure proper lifecycle management.
 */

import type { GlideInstance, CarouselConfig } from '../types';

interface CarouselRegistration {
  instanceId: string;
  glideInstance: GlideInstance;
  config: CarouselConfig;
  postId: string;
  createdAt: number;
}

export class CarouselManager {
  private static registrations = new Map<string, CarouselRegistration>();

  /**
   * Register a new carousel instance
   */
  public static register(
    instanceId: string,
    glideInstance: GlideInstance,
    config: CarouselConfig,
    postId: string
  ): void {
    console.log(`[CarouselManager] Registering carousel: ${instanceId} for post: ${postId}`);

    // Clean up any existing registration with the same instanceId
    this.unregister(instanceId);

    const registration: CarouselRegistration = {
      instanceId,
      glideInstance,
      config,
      postId,
      createdAt: Date.now()
    };

    this.registrations.set(instanceId, registration);
    console.log(`[CarouselManager] Total registered carousels: ${this.registrations.size}`);
  }

  /**
   * Unregister a carousel instance
   */
  public static unregister(instanceId: string): void {
    const registration = this.registrations.get(instanceId);
    if (!registration) {
      console.log(`[CarouselManager] No registration found for: ${instanceId}`);
      return;
    }

    console.log(`[CarouselManager] Unregistering carousel: ${instanceId}`);

    try {
      // Safely destroy the Glide instance
      if (registration.glideInstance && typeof registration.glideInstance.destroy === 'function') {
        registration.glideInstance.destroy();
      }
    } catch (error) {
      console.error(`[CarouselManager] Error destroying carousel ${instanceId}:`, error);
    }

    this.registrations.delete(instanceId);
    console.log(`[CarouselManager] Total registered carousels: ${this.registrations.size}`);
  }

  /**
   * Pause all other carousels except the specified one
   */
  public static pauseOthers(excludeInstanceId: string): void {
    console.log(`[CarouselManager] Pausing all carousels except: ${excludeInstanceId}`);

    for (const [instanceId, registration] of this.registrations) {
      if (instanceId === excludeInstanceId) continue;

      try {
        if (registration.glideInstance && typeof registration.glideInstance.pause === 'function') {
          registration.glideInstance.pause();
        }
      } catch (error) {
        console.error(`[CarouselManager] Error pausing carousel ${instanceId}:`, error);
      }
    }
  }

  /**
   * Get carousel instance by ID
   */
  public static getInstance(instanceId: string): GlideInstance | null {
    const registration = this.registrations.get(instanceId);
    return registration?.glideInstance || null;
  }

  /**
   * Get all registered carousel IDs for a specific post
   */
  public static getInstancesForPost(postId: string): string[] {
    const instances: string[] = [];

    for (const [instanceId, registration] of this.registrations) {
      if (registration.postId === postId) {
        instances.push(instanceId);
      }
    }

    return instances;
  }

  /**
   * Check if a carousel is registered and active
   */
  public static isRegistered(instanceId: string): boolean {
    return this.registrations.has(instanceId);
  }

  /**
   * Clean up old or orphaned carousel instances
   */
  public static cleanup(maxAge: number = 300000): void { // 5 minutes default
    const now = Date.now();
    const toRemove: string[] = [];

    console.log(`[CarouselManager] Starting cleanup of carousels older than ${maxAge}ms`);

    for (const [instanceId, registration] of this.registrations) {
      const age = now - registration.createdAt;
      
      // Check if the carousel is too old
      if (age > maxAge) {
        console.log(`[CarouselManager] Marking for removal: ${instanceId} (age: ${age}ms)`);
        toRemove.push(instanceId);
        continue;
      }

      // Check if the DOM element still exists
      const containerSelector = `#photoswipe-glide-${instanceId}`;
      const containerElement = document.querySelector(containerSelector);
      
      if (!containerElement) {
        console.log(`[CarouselManager] Marking for removal: ${instanceId} (DOM element not found)`);
        toRemove.push(instanceId);
      }
    }

    // Remove the marked instances
    for (const instanceId of toRemove) {
      this.unregister(instanceId);
    }

    console.log(`[CarouselManager] Cleanup completed. Removed ${toRemove.length} instances`);
  }

  /**
   * Get statistics about registered carousels
   */
  public static getStats(): {
    totalCount: number;
    postCounts: Record<string, number>;
    oldestAge: number;
    newestAge: number;
  } {
    const now = Date.now();
    const postCounts: Record<string, number> = {};
    let oldestAge = 0;
    let newestAge = 0;

    for (const registration of this.registrations.values()) {
      const age = now - registration.createdAt;
      
      // Track post counts
      postCounts[registration.postId] = (postCounts[registration.postId] || 0) + 1;
      
      // Track age statistics
      if (oldestAge === 0 || age > oldestAge) oldestAge = age;
      if (newestAge === 0 || age < newestAge) newestAge = age;
    }

    return {
      totalCount: this.registrations.size,
      postCounts,
      oldestAge,
      newestAge
    };
  }

  /**
   * Initialize cleanup interval
   */
  public static startCleanupInterval(interval: number = 60000): void { // 1 minute default
    console.log(`[CarouselManager] Starting cleanup interval every ${interval}ms`);

    setInterval(() => {
      this.cleanup();
    }, interval);
  }
}

// Initialize cleanup interval when the service is loaded
CarouselManager.startCleanupInterval();