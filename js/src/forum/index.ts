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
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '.Post-body > p, .item-excerpt',
        children: 'a[data-pswp]',
        pswpModule,
      });
    });

    extend(prototype, ['onupdate', 'oncreate'], function () {
      console.log('init');
      // @ts-ignore
      this.$('a[data-pswp] > img').each((i, el: HTMLImageElement) => {
        const $el = $(el);
        const $a = $el.parent('a');

        el.onload = () => {
          $a.attr('data-pswp-width', el.naturalWidth);
          $a.attr('data-pswp-height', el.naturalHeight);

          this.lightbox?.init();
        };
      });
    });

    extend(prototype, 'onremove', function () {
      console.log('destroy');
      this.lightbox.destroy();
      this.lightbox = null;
    });
  });
});
