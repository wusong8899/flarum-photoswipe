import PhotoSwipeLightbox from "photoswipe/lightbox";

declare module 'flarum/forum/components/CommentPost' {
  export default interface CommentPost {
    lightbox?: PhotoSwipeLightbox;
  }
}

declare module 'flarum/forum/components/DiscussionListItem' {
  export default interface DiscussionListItem {
    lightbox?: PhotoSwipeLightbox;
  }
}
