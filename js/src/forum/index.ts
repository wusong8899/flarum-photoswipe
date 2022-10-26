import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import pswpModule from 'photoswipe';

app.initializers.add('sycho/flarum-photoswipe', () => {
  let components: any[] = [CommentPost.prototype];

  if ('ianm-synopsis' in flarum.extensions) {
    components.push(DiscussionListItem.prototype);
  }

  components.forEach((prototype) => {
    extend(prototype, 'oninit', function (this: any) {
      const dataId = this.attrs.post?.id() || this.attrs.discussion?.id();

      this.lightbox = new PhotoSwipeLightbox({
        gallery: `[data-id="${dataId}"] .Post-body, [data-id="${dataId}"] .item-excerpt`,
        children: 'a[data-pswp]',
        pswpModule,
      });
    });

    extend(prototype, ['onupdate', 'oncreate'], function () {
      // Timeout to make sure galleries were initialized
      // @ts-ignore
      this.$('a[data-pswp] > img').each((i, el: HTMLImageElement) => {
        const $el = $(el);
        const $a = $el.parent('a');
        const setDimensions = () => {
          $a.attr('data-pswp-width', el.naturalWidth);
          $a.attr('data-pswp-height', el.naturalHeight);
        };

        if (el.complete && el.naturalWidth) {
          setDimensions();
          this.lightbox.init();
        } else {
          el.onload = () => {
            setDimensions();
            this.lightbox.init();
          };
        }
      });

      setTimeout(() => {
        if (this.galleries) {
          this.lightbox.on('change', () => {
            // Match the swiper current slide with the photoswipe current slide.
            this.galleries.forEach((swiper: any) => {
              swiper.slideTo(this.lightbox.pswp.currIndex, 0, false);
            });
          });
        }
      }, 100);
    });

    extend(prototype, 'onremove', function () {
      this.lightbox.destroy();
      this.lightbox = null;
    });
  });
});
