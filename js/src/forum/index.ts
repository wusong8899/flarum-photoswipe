import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import pswpModule from 'photoswipe';

app.initializers.add('sycho/photoswipe', () => {
  CommentPost.prototype.lightbox = new PhotoSwipeLightbox({
    gallery: '.Post-body > p',
    children: 'a[data-pswp]',
    pswpModule,
  });

  extend(CommentPost.prototype, ['onupdate', 'oncreate'], function () {
    // @ts-ignore
    this.$('[data-pswp] > img').each((i, el: HTMLImageElement) => {
      const $el = $(el);
      const $a = $el.parent('a');

      el.onload = () => {
        $a.attr('data-pswp-width', el.naturalWidth);
        $a.attr('data-pswp-height', el.naturalHeight);

        this.lightbox?.init();
      };
    });
  });

  extend(CommentPost.prototype, 'onremove', function () {
    this.lightbox.destroy();
    this.lightbox = null;
  });
});
