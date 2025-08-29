import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import pswpModule from 'photoswipe';
import PhotoSwipeGlideComponent from './components/PhotoSwipeGlideComponent';
import { carouselManager } from './utils/GlideConfig';
import m from 'mithril';

app.initializers.add('sycho-photoswipe', () => {
  console.log('[PhotoSwipe] Extension initializing...');
  
  let components: any[] = [CommentPost.prototype];

  if ('ianm-synopsis' in flarum.extensions) {
    components.push(DiscussionListItem.prototype);
    console.log('[PhotoSwipe] Found ianm-synopsis extension');
  }

  const hasGalleryExtension = 'datitisev-post-galleries' in flarum.extensions;
  console.log('[PhotoSwipe] Gallery extension detected:', hasGalleryExtension);

  components.forEach((prototype) => {
    extend(prototype, 'oninit', function (this: any) {
      const dataId = this.attrs.post?.id() || this.attrs.discussion?.id();
      console.log('[PhotoSwipe] Component oninit, dataId:', dataId);
      const selectors = [];

      // The browser might not support :has yet.
      try {
        // A Photoswiper instance for images per post, per excerpt, and per article.
        const selector = `[data-id="${dataId}"] .Post-body:not(:has(.swiper)), [data-id="${dataId}"] .item-excerpt:not(:has(.swiper)), .FlarumBlog-Article .Post-body:not(:has(.swiper))`;
        document.querySelectorAll(selector);
        selectors.push(selector);

        if (hasGalleryExtension) {
          const singleImagesOutsideGalleries = ':not(:has(.swiper)):not([class^="swiper"]):has(>a[data-pswp])';

          selectors.push(
            `[data-id="${dataId}"] .Post-body ${singleImagesOutsideGalleries}, [data-id="${dataId}"] .item-excerpt ${singleImagesOutsideGalleries}, .FlarumBlog-Article .Post-body ${singleImagesOutsideGalleries}`
          );
        }
      } catch {
        if (!hasGalleryExtension) {
          selectors.push(
            // A Photoswiper instance for images per post, per excerpt, and per article.
            `[data-id="${dataId}"] .Post-body, [data-id="${dataId}"] .item-excerpt, .FlarumBlog-Article .Post-body`
          );
        }
      }

      // A Photoswiper instance for images per gallery (per post, per excerpt, and per article).
      if (hasGalleryExtension) {
        selectors.push(
          `[data-id="${dataId}"] .Post-body .swiper, [data-id="${dataId}"] .item-excerpt .swiper, .FlarumBlog-Article .Post-body .swiper`
        );
      }

      const gallerySelector = selectors.join(', ');
      console.log('[PhotoSwipe] Creating lightbox with gallery selector:', gallerySelector);
      
      this.lightbox = new PhotoSwipeLightbox({
        gallery: gallerySelector,
        children: 'a[data-pswp]',
        pswpModule,
      });

      // Initialize Glide component for posts with multiple images
      this.glideComponent = null;
      
      // Initialize Glide component properties immediately
      this.initializeGlideComponent();
    });

    extend(prototype, ['onupdate', 'oncreate'], function () {
      console.log('[PhotoSwipe] oncreate/onupdate triggered');

      // @ts-ignore
      const $images = this.$('a[data-pswp] > img');
      console.log('[PhotoSwipe] Found images:', $images.length);
      
      $images.each((index, el: HTMLImageElement) => {
        const $el = $(el);
        const $a = $el.parent('a');
        const setDimensions = () => {
          $a.attr('data-pswp-width', el.naturalWidth);
          $a.attr('data-pswp-height', el.naturalHeight);
        };

        if (el.complete && el.naturalWidth) {
          setDimensions();
          console.log('[PhotoSwipe] Image loaded, initializing lightbox for image:', index);
          this.lightbox.init();
        } else {
          el.onload = () => {
            setDimensions();
            console.log('[PhotoSwipe] Image onload, initializing lightbox for image:', index);
            this.lightbox.init();

            if (this.lightbox.pswp) this.lightbox.pswp.refreshSlideContent(index);
          };
        }
      });

      // Timeout to make sure galleries were initialized
      setTimeout(() => {
        if (this.galleries) {
          this.lightbox.on('change', () => {
            // Match the swiper current slide with the photoswipe current slide.
            const gallery = this.galleries.find((swiper: any) => this.lightbox.options.dataSource.gallery === swiper.$el[0]);
            gallery?.slideTo(this.lightbox.pswp.currIndex, 0, false);

            this.galleries
              .filter((swiper: any) => this.lightbox.options.dataSource.gallery !== swiper.$el[0])
              .map((swiper: any) => {
                swiper.tmpCurrIndex = swiper.currIndex;
                swiper.slideTo(this.lightbox.pswp.currIndex, 0, false);
                return swiper;
              })
              .forEach((swiper: any) => swiper.slideTo(swiper.tmpCurrIndex, 0, false));
          });
        }
      }, 100);
    });

    extend(prototype, 'onremove', function () {
      // Clean up Glide component
      if (this.glideComponent) {
        this.glideComponent = null;
      }

      this.lightbox.destroy();
      this.lightbox = null;
    });

    // Add helper methods to prototype
    prototype.initializeGlideComponent = function() {
      if (!this.attrs?.post) {
        console.log('[Glide] No post attrs found');
        return;
      }
      
      const postId = this.attrs.post.id();
      if (!postId) {
        console.log('[Glide] No post ID found');
        return;
      }

      // Store reference for use in contentItems
      this.glidePostId = postId.toString();
      this.glideDiscussionId = this.attrs.post?.discussion?.()?.id?.()?.toString();
      console.log('[Glide] Component initialized for post:', this.glidePostId);
    };

    // Extend contentItems to add Glide carousel using Flarum's ItemList pattern
    extend(prototype, 'contentItems', function (items) {
      console.log('[Glide] contentItems called, attrs:', this.attrs?.post?.id(), 'glidePostId:', this.glidePostId);
      
      // Only add Glide component for CommentPost (posts with actual content)
      if (this.attrs?.post && this.glidePostId) {
        const postId = this.glidePostId;
        
        console.log('[Glide] Adding Glide component for post:', postId);
        
        // Always add the component - it will handle its own visibility logic
        items.add(
          'photoswipe-glide',
          m(PhotoSwipeGlideComponent, {
            postId: postId,
            discussionId: this.glideDiscussionId,
            enableAutoplay: false // Default: no autoplay for better UX
          }),
          -10 // Lower priority to render after main content
        );
      } else {
        console.log('[Glide] Not adding component - post attrs or glidePostId missing');
      }
    });
  });

  // Global cleanup handler for navigation
  extend(app, 'mount', function () {
    // Clean up all carousel instances on navigation
    carouselManager.cleanupAll();
  });
});
