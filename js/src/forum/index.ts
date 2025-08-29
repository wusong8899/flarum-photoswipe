import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import ImageCarousel from './components/ImageCarousel';
import { CarouselManager } from './services/CarouselManager';
import m from 'mithril';

app.initializers.add('wusong8899-image-carousel', () => {
  console.log('[ImageCarousel] Extension initializing...');
  
  let components: any[] = [CommentPost.prototype];

  // Add support for synopsis extension
  if ('ianm-synopsis' in flarum.extensions) {
    components.push(DiscussionListItem.prototype);
    console.log('[ImageCarousel] Found ianm-synopsis extension');
  }

  components.forEach((prototype) => {
    // Add helper methods to prototype
    prototype.initializeCarouselComponent = function() {
      if (!this.attrs?.post) {
        console.log('[ImageCarousel] No post attrs found');
        return;
      }
      
      const postId = this.attrs.post.id();
      if (!postId) {
        console.log('[ImageCarousel] No post ID found');
        return;
      }

      // Store reference for use in contentItems
      this.carouselPostId = postId.toString();
      this.carouselDiscussionId = this.attrs.post?.discussion?.()?.id?.()?.toString();
      console.log('[ImageCarousel] Component initialized for post:', this.carouselPostId);
    };

    extend(prototype, 'oninit', function (this: any) {
      // Initialize carousel component properties
      this.initializeCarouselComponent();
    });

    // Extend contentItems to add image carousel using Flarum's ItemList pattern
    extend(prototype, 'contentItems', function (items) {
      console.log('[ImageCarousel] contentItems called, attrs:', this.attrs?.post?.id(), 'postId:', this.carouselPostId);
      
      // Only add carousel component for CommentPost (posts with actual content)
      if (this.attrs?.post && this.carouselPostId) {
        const postId = this.carouselPostId;
        
        console.log('[ImageCarousel] Adding carousel component for post:', postId);
        
        // Add the component - it will handle its own visibility logic
        items.add(
          'image-carousel',
          m(ImageCarousel, {
            postId: postId,
            discussionId: this.carouselDiscussionId,
            enableAutoplay: false, // Default: no autoplay for better UX
            minImageCount: 2
          }),
          100 // High priority to render before main content (at the top)
        );
      } else {
        console.log('[ImageCarousel] Not adding component - post attrs or postId missing');
      }
    });
  });

  // Global cleanup handler for navigation
  extend(app, 'mount', function () {
    // Clean up all carousel instances on navigation
    CarouselManager.cleanup();
  });
});
