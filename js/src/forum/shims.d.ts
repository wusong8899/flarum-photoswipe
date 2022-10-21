import CommentPost from 'flarum/forum/components/CommentPost';
import PhotoSwipeLightbox from "photoswipe/lightbox";

declare module 'flarum/forum/components/CommentPost' {
  export default interface CommentPost {
    lightbox?: PhotoSwipeLightbox;
  }
}
