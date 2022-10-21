/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! photoswipe/lightbox */ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.esm.js");






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sycho/photoswipe', function () {
  var components = [(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype)];
  if ('ianm-synopsis' in flarum.extensions) {
    components.push((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default().prototype));
  }
  components.forEach(function (prototype) {
    prototype.lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_4__["default"]({
      gallery: '.Post-body > p, .item-excerpt',
      children: 'a[data-pswp]',
      pswpModule: photoswipe__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(prototype, ['onupdate', 'oncreate'], function () {
      var _this = this;
      // @ts-ignore
      this.$('a[data-pswp] > img').each(function (i, el) {
        var $el = $(el);
        var $a = $el.parent('a');
        el.onload = function () {
          var _this$lightbox;
          $a.attr('data-pswp-width', el.naturalWidth);
          $a.attr('data-pswp-height', el.naturalHeight);
          (_this$lightbox = _this.lightbox) == null ? void 0 : _this$lightbox.init();
        };
      });
    });
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(prototype, 'onremove', function () {
      this.lightbox.destroy();
      this.lightbox = null;
    });
  });
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoSwipeLightbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");

/*!
  * PhotoSwipe Lightbox 5.3.2 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */
/** @typedef {import('../photoswipe.js').Point} Point */

/** @typedef {undefined | null | false | '' | 0} Falsy */
/** @typedef {keyof HTMLElementTagNameMap} HTMLElementTagName */

/**
 * @template {HTMLElementTagName | Falsy} [T="div"]
 * @template {Node | undefined} [NodeToAppendElementTo=undefined]
 * @param {string=} className
 * @param {T=} [tagName]
 * @param {NodeToAppendElementTo=} appendToEl
 * @returns {T extends HTMLElementTagName ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap['div']}
 */
function createElement(className, tagName, appendToEl) {
  var el = document.createElement(tagName || 'div');
  if (className) {
    el.className = className;
  }
  if (appendToEl) {
    appendToEl.appendChild(el);
  }
  // @ts-expect-error
  return el;
}

/**
 * Get transform string
 *
 * @param {number} x
 * @param {number=} y
 * @param {number=} scale
 */
function toTransformString(x, y, scale) {
  var propValue = 'translate3d(' + x + 'px,' + (y || 0) + 'px' + ',0)';
  if (scale !== undefined) {
    propValue += ' scale3d(' + scale + ',' + scale + ',1)';
  }
  return propValue;
}

/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */
function setWidthHeight(el, w, h) {
  el.style.width = typeof w === 'number' ? w + 'px' : w;
  el.style.height = typeof h === 'number' ? h + 'px' : h;
}

/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */
/** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */
var LOAD_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 */
function specialKeyUsed(e) {
  if (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
    return true;
  }
}

/**
 * Parse `gallery` or `children` options.
 *
 * @param {HTMLElement | NodeListOf<HTMLElement> | string} option
 * @param {string=} legacySelector
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */
function getElementsFromOption(option, legacySelector, parent) {
  if (parent === void 0) {
    parent = document;
  }
  /** @type {HTMLElement[]} */
  var elements = [];
  if (option instanceof Element) {
    elements = [option];
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option);
  } else {
    var selector = typeof option === 'string' ? option : legacySelector;
    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector));
    }
  }
  return elements;
}

/**
 * Check if variable is PhotoSwipe class
 *
 * @param {any} fn
 */
function isPswpClass(fn) {
  return typeof fn === 'function' && fn.prototype && fn.prototype.goTo;
}

/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */
function isSafari() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}

/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../slide/content.js').default} ContentDefault */
/** @typedef {import('../slide/slide.js').default} Slide */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */
/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */

/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */
/** @typedef {{ x?: number; y?: number }} Point */

/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point, transitionDuration: number | false }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */

/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */

/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter<T>
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback<T>
 */

/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
var PhotoSwipeEvent = /*#__PURE__*/function () {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  function PhotoSwipeEvent(type, details) {
    this.type = type;
    if (details) {
      Object.assign(this, details);
    }
  }
  var _proto = PhotoSwipeEvent.prototype;
  _proto.preventDefault = function preventDefault() {
    this.defaultPrevented = true;
  };
  return PhotoSwipeEvent;
}();
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
var Eventable = /*#__PURE__*/function () {
  function Eventable() {
    /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */
    this._listeners = {};

    /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */
    this._filters = {};

    /** @type {PhotoSwipe=} */
    this.pswp = undefined;

    /** @type {PhotoSwipeOptions} */
    this.options = undefined;
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  var _proto2 = Eventable.prototype;
  _proto2.addFilter = function addFilter(name, fn, priority) {
    if (priority === void 0) {
      priority = 100;
    }
    if (!this._filters[name]) {
      this._filters[name] = [];
    }
    this._filters[name].push({
      fn: fn,
      priority: priority
    });
    this._filters[name].sort(function (f1, f2) {
      return f1.priority - f2.priority;
    });
    if (this.pswp) {
      this.pswp.addFilter(name, fn, priority);
    }
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */;
  _proto2.removeFilter = function removeFilter(name, fn) {
    if (this._filters[name]) {
      // @ts-expect-error
      this._filters[name] = this._filters[name].filter(function (filter) {
        return filter.fn !== fn;
      });
    }
    if (this.pswp) {
      this.pswp.removeFilter(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */;
  _proto2.applyFilters = function applyFilters(name) {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this._filters[name]) {
      this._filters[name].forEach(function (filter) {
        // @ts-expect-error
        args[0] = filter.fn.apply(_this, args);
      });
    }
    return args[0];
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */;
  _proto2.on = function on(name, fn) {
    if (!this._listeners[name]) {
      this._listeners[name] = [];
    }
    this._listeners[name].push(fn);

    // When binding events to lightbox,
    // also bind events to PhotoSwipe Core,
    // if it's open.
    if (this.pswp) {
      this.pswp.on(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */;
  _proto2.off = function off(name, fn) {
    if (this._listeners[name]) {
      // @ts-expect-error
      this._listeners[name] = this._listeners[name].filter(function (listener) {
        return fn !== listener;
      });
    }
    if (this.pswp) {
      this.pswp.off(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */;
  _proto2.dispatch = function dispatch(name, details) {
    var _this2 = this;
    if (this.pswp) {
      return this.pswp.dispatch(name, details);
    }
    var event = /** @type {AugmentedEvent<T>} */new PhotoSwipeEvent(name, details);
    if (!this._listeners) {
      return event;
    }
    if (this._listeners[name]) {
      this._listeners[name].forEach(function (listener) {
        listener.call(_this2, event);
      });
    }
    return event;
  };
  return Eventable;
}();
var Placeholder = /*#__PURE__*/function () {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  function Placeholder(imageSrc, container) {
    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)
    this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : '', container);
    if (imageSrc) {
      /** @type {HTMLImageElement} */
      this.element.decoding = 'async';
      /** @type {HTMLImageElement} */
      this.element.alt = '';
      /** @type {HTMLImageElement} */
      this.element.src = imageSrc;
      this.element.setAttribute('role', 'presentation');
    }
    this.element.setAttribute('aria-hiden', 'true');
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  var _proto3 = Placeholder.prototype;
  _proto3.setDisplayedSize = function setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.element.tagName === 'IMG') {
      // Use transform scale() to modify img placeholder size
      // (instead of changing width/height directly).
      // This helps with performance, specifically in iOS15 Safari.
      setWidthHeight(this.element, 250, 'auto');
      this.element.style.transformOrigin = '0 0';
      this.element.style.transform = toTransformString(0, 0, width / 250);
    } else {
      setWidthHeight(this.element, width, height);
    }
  };
  _proto3.destroy = function destroy() {
    if (this.element.parentNode) {
      this.element.remove();
    }
    this.element = null;
  };
  return Placeholder;
}();
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../util/util.js').LoadState} LoadState */
var Content = /*#__PURE__*/function () {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipe} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  function Content(itemData, instance, index) {
    this.instance = instance;
    this.data = itemData;
    this.index = index;

    /** @type {HTMLImageElement | HTMLDivElement} */
    this.element = undefined;
    this.displayedImageWidth = 0;
    this.displayedImageHeight = 0;
    this.width = Number(this.data.w) || Number(this.data.width) || 0;
    this.height = Number(this.data.h) || Number(this.data.height) || 0;
    this.isAttached = false;
    this.hasSlide = false;
    /** @type {LoadState} */
    this.state = LOAD_STATE.IDLE;
    if (this.data.type) {
      this.type = this.data.type;
    } else if (this.data.src) {
      this.type = 'image';
    } else {
      this.type = 'html';
    }
    this.instance.dispatch('contentInit', {
      content: this
    });
  }
  var _proto4 = Content.prototype;
  _proto4.removePlaceholder = function removePlaceholder() {
    var _this3 = this;
    if (this.placeholder && !this.keepPlaceholder()) {
      // With delay, as image might be loaded, but not rendered
      setTimeout(function () {
        if (_this3.placeholder) {
          _this3.placeholder.destroy();
          _this3.placeholder = null;
        }
      }, 1000);
    }
  }

  /**
   * Preload content
   *
   * @param {boolean=} isLazy
   * @param {boolean=} reload
   */;
  _proto4.load = function load(isLazy, reload) {
    if (this.slide && this.usePlaceholder()) {
      if (!this.placeholder) {
        var placeholderSrc = this.instance.applyFilters('placeholderSrc',
        // use  image-based placeholder only for the first slide,
        // as rendering (even small stretched thumbnail) is an expensive operation
        this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
        this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
      } else {
        var placeholderEl = this.placeholder.element;
        // Add placeholder to DOM if it was already created
        if (placeholderEl && !placeholderEl.parentElement) {
          this.slide.container.prepend(placeholderEl);
        }
      }
    }
    if (this.element && !reload) {
      return;
    }
    if (this.instance.dispatch('contentLoad', {
      content: this,
      isLazy: isLazy
    }).defaultPrevented) {
      return;
    }
    if (this.isImageContent()) {
      this.element = createElement('pswp__img', 'img');
      // Start loading only after width is defined, as sizes might depend on it.
      // Due to Safari feature, we must define sizes before srcset.
      if (this.displayedImageWidth) {
        this.loadImage(isLazy);
      }
    } else {
      this.element = createElement('pswp__content');
      this.element.innerHTML = this.data.html || '';
    }
    if (reload && this.slide) {
      this.slide.updateContentSize(true);
    }
  }

  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */;
  _proto4.loadImage = function loadImage(isLazy) {
    var _this4 = this;
    var imageElement = /** @type HTMLImageElement */this.element;
    if (this.instance.dispatch('contentLoadImage', {
      content: this,
      isLazy: isLazy
    }).defaultPrevented) {
      return;
    }
    this.updateSrcsetSizes();
    if (this.data.srcset) {
      imageElement.srcset = this.data.srcset;
    }
    imageElement.src = this.data.src;
    imageElement.alt = this.data.alt || '';
    this.state = LOAD_STATE.LOADING;
    if (imageElement.complete) {
      this.onLoaded();
    } else {
      imageElement.onload = function () {
        _this4.onLoaded();
      };
      imageElement.onerror = function () {
        _this4.onError();
      };
    }
  }

  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */;
  _proto4.setSlide = function setSlide(slide) {
    this.slide = slide;
    this.hasSlide = true;
    this.instance = slide.pswp;

    // todo: do we need to unset slide?
  }

  /**
   * Content load success handler
   */;
  _proto4.onLoaded = function onLoaded() {
    this.state = LOAD_STATE.LOADED;
    if (this.slide) {
      this.instance.dispatch('loadComplete', {
        slide: this.slide,
        content: this
      });

      // if content is reloaded
      if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
        this.append();
        this.slide.updateContentSize(true);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  }

  /**
   * Content load error handler
   */;
  _proto4.onError = function onError() {
    this.state = LOAD_STATE.ERROR;
    if (this.slide) {
      this.displayError();
      this.instance.dispatch('loadComplete', {
        slide: this.slide,
        isError: true,
        content: this
      });
      this.instance.dispatch('loadError', {
        slide: this.slide,
        content: this
      });
    }
  }

  /**
   * @returns {Boolean} If the content is currently loading
   */;
  _proto4.isLoading = function isLoading() {
    return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
  };
  _proto4.isError = function isError() {
    return this.state === LOAD_STATE.ERROR;
  }

  /**
   * @returns {boolean} If the content is image
   */;
  _proto4.isImageContent = function isImageContent() {
    return this.type === 'image';
  }

  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */;
  _proto4.setDisplayedSize = function setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.placeholder) {
      this.placeholder.setDisplayedSize(width, height);
    }

    // eslint-disable-next-line max-len
    if (this.instance.dispatch('contentResize', {
      content: this,
      width: width,
      height: height
    }).defaultPrevented) {
      return;
    }
    setWidthHeight(this.element, width, height);
    if (this.isImageContent() && !this.isError()) {
      var isInitialSizeUpdate = !this.displayedImageWidth && width;
      this.displayedImageWidth = width;
      this.displayedImageHeight = height;
      if (isInitialSizeUpdate) {
        this.loadImage(false);
      } else {
        this.updateSrcsetSizes();
      }
      if (this.slide) {
        // eslint-disable-next-line max-len
        this.instance.dispatch('imageSizeChange', {
          slide: this.slide,
          width: width,
          height: height,
          content: this
        });
      }
    }
  }

  /**
   * @returns {boolean} If the content can be zoomed
   */;
  _proto4.isZoomable = function isZoomable() {
    return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
  }

  /**
   * Update image srcset sizes attribute based on width and height
   */;
  _proto4.updateSrcsetSizes = function updateSrcsetSizes() {
    // Handle srcset sizes attribute.
    //
    // Never lower quality, if it was increased previously.
    // Chrome does this automatically, Firefox and Safari do not,
    // so we store largest used size in dataset.
    // Handle srcset sizes attribute.
    //
    // Never lower quality, if it was increased previously.
    // Chrome does this automatically, Firefox and Safari do not,
    // so we store largest used size in dataset.
    if (this.data.srcset) {
      var image = /** @type HTMLImageElement */this.element;
      var sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + 'px';
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
  }

  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */;
  _proto4.usePlaceholder = function usePlaceholder() {
    return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
  }

  /**
   * Preload content with lazy-loading param
   */;
  _proto4.lazyLoad = function lazyLoad() {
    if (this.instance.dispatch('contentLazyLoad', {
      content: this
    }).defaultPrevented) {
      return;
    }
    this.load(true);
  }

  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */;
  _proto4.keepPlaceholder = function keepPlaceholder() {
    return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
  }

  /**
   * Destroy the content
   */;
  _proto4.destroy = function destroy() {
    this.hasSlide = false;
    this.slide = null;
    if (this.instance.dispatch('contentDestroy', {
      content: this
    }).defaultPrevented) {
      return;
    }
    this.remove();
    if (this.placeholder) {
      this.placeholder.destroy();
      this.placeholder = null;
    }
    if (this.isImageContent() && this.element) {
      this.element.onload = null;
      this.element.onerror = null;
      this.element = null;
    }
  }

  /**
   * Display error message
   */;
  _proto4.displayError = function displayError() {
    if (this.slide) {
      /** @type {HTMLElement} */
      var errorMsgEl = createElement('pswp__error-msg');
      errorMsgEl.innerText = this.instance.options.errorMsg;
      errorMsgEl = this.instance.applyFilters('contentErrorElement', errorMsgEl, this);
      this.element = createElement('pswp__content pswp__error-msg-container');
      this.element.appendChild(errorMsgEl);
      this.slide.container.innerText = '';
      this.slide.container.appendChild(this.element);
      this.slide.updateContentSize(true);
      this.removePlaceholder();
    }
  }

  /**
   * Append the content
   */;
  _proto4.append = function append() {
    var _this5 = this;
    if (this.isAttached) {
      return;
    }
    this.isAttached = true;
    if (this.state === LOAD_STATE.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch('contentAppend', {
      content: this
    }).defaultPrevented) {
      return;
    }
    var supportsDecode = ('decode' in this.element);
    if (this.isImageContent()) {
      // Use decode() on nearby slides
      //
      // Nearby slide images are in DOM and not hidden via display:none.
      // However, they are placed offscreen (to the left and right side).
      //
      // Some browsers do not composite the image until it's actually visible,
      // using decode() helps.
      //
      // You might ask "why dont you just decode() and then append all images",
      // that's because I want to show image before it's fully loaded,
      // as browser can render parts of image while it is loading.
      // We do not do this in Safari due to partial loading bug.
      if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
        this.isDecoding = true;
        // purposefully using finally instead of then,
        // as if srcset sizes changes dynamically - it may cause decode error
        /** @type {HTMLImageElement} */
        this.element.decode()["finally"](function () {
          _this5.isDecoding = false;
          _this5.appendImage();
        });
      } else {
        this.appendImage();
      }
    } else if (this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
    }
  }

  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */;
  _proto4.activate = function activate() {
    if (this.instance.dispatch('contentActivate', {
      content: this
    }).defaultPrevented) {
      return;
    }
    if (this.slide) {
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        // add image to slide when it becomes active,
        // even if it's not finished decoding
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true); // try to reload
      }
    }
  }

  /**
   * Deactivate the content
   */;
  _proto4.deactivate = function deactivate() {
    this.instance.dispatch('contentDeactivate', {
      content: this
    });
  }

  /**
   * Remove the content from DOM
   */;
  _proto4.remove = function remove() {
    this.isAttached = false;
    if (this.instance.dispatch('contentRemove', {
      content: this
    }).defaultPrevented) {
      return;
    }
    if (this.element && this.element.parentNode) {
      this.element.remove();
    }
    if (this.placeholder && this.placeholder.element) {
      this.placeholder.element.remove();
    }
  }

  /**
   * Append the image content to slide container
   */;
  _proto4.appendImage = function appendImage() {
    if (!this.isAttached) {
      return;
    }
    if (this.instance.dispatch('contentAppendImage', {
      content: this
    }).defaultPrevented) {
      return;
    }

    // ensure that element exists and is not already appended
    if (this.slide && this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
    }
    if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
      this.removePlaceholder();
    }
  };
  return Content;
}();
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipe} pswp
 */
function getViewportSize(options, pswp) {
  if (options.getViewportSizeFn) {
    var newViewportSize = options.getViewportSizeFn(options, pswp);
    if (newViewportSize) {
      return newViewportSize;
    }
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}

/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {{ x?: number; y?: number }} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */
function parsePaddingOption(prop, options, viewportSize, itemData, index) {
  /** @type {number} */
  var paddingValue;
  if (options.paddingFn) {
    paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
  } else if (options.padding) {
    paddingValue = options.padding[prop];
  } else {
    var legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1);
    // @ts-expect-error
    if (options[legacyPropName]) {
      // @ts-expect-error
      paddingValue = options[legacyPropName];
    }
  }
  return paddingValue || 0;
}

/**
 * @param {PhotoSwipeOptions} options
 * @param {{ x?: number; y?: number }} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 */
function getPanAreaSize(options, viewportSize, itemData, index) {
  return {
    x: viewportSize.x - parsePaddingOption('left', options, viewportSize, itemData, index) - parsePaddingOption('right', options, viewportSize, itemData, index),
    y: viewportSize.y - parsePaddingOption('top', options, viewportSize, itemData, index) - parsePaddingOption('bottom', options, viewportSize, itemData, index)
  };
}
var MAX_IMAGE_WIDTH = 4000;

/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */

/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */

/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
var ZoomLevel = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe=} pswp PhotoSwipe instance, can be undefined if not initialized yet
   */
  function ZoomLevel(options, itemData, index, pswp) {
    this.pswp = pswp;
    this.options = options;
    this.itemData = itemData;
    this.index = index;
  }

  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {{ x?: number; y?: number }} panAreaSize
   */
  var _proto5 = ZoomLevel.prototype;
  _proto5.update = function update(maxWidth, maxHeight, panAreaSize) {
    this.elementSize = {
      x: maxWidth,
      y: maxHeight
    };
    this.panAreaSize = panAreaSize;
    var hRatio = this.panAreaSize.x / this.elementSize.x;
    var vRatio = this.panAreaSize.y / this.elementSize.y;
    this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
    this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);

    // zoom.vFill defines zoom level of the image
    // when it has 100% of viewport vertical space (height)
    this.vFill = Math.min(1, vRatio);
    this.initial = this._getInitial();
    this.secondary = this._getSecondary();
    this.max = Math.max(this.initial, this.secondary, this._getMax());
    this.min = Math.min(this.fit, this.initial, this.secondary);
    if (this.pswp) {
      this.pswp.dispatch('zoomLevelsUpdate', {
        zoomLevels: this,
        slideData: this.itemData
      });
    }
  }

  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   */;
  _proto5._parseZoomLevelOption = function _parseZoomLevelOption(optionPrefix) {
    // eslint-disable-next-line max-len
    var optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */optionPrefix + 'ZoomLevel';
    var optionValue = this.options[optionName];
    if (!optionValue) {
      return;
    }
    if (typeof optionValue === 'function') {
      return optionValue(this);
    }
    if (optionValue === 'fill') {
      return this.fill;
    }
    if (optionValue === 'fit') {
      return this.fit;
    }
    return Number(optionValue);
  }

  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */;
  _proto5._getSecondary = function _getSecondary() {
    var currZoomLevel = this._parseZoomLevelOption('secondary');
    if (currZoomLevel) {
      return currZoomLevel;
    }

    // 3x of "fit" state, but not larger than original
    currZoomLevel = Math.min(1, this.fit * 3);
    if (currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
      currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
    }
    return currZoomLevel;
  }

  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */;
  _proto5._getInitial = function _getInitial() {
    return this._parseZoomLevelOption('initial') || this.fit;
  }

  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */;
  _proto5._getMax = function _getMax() {
    var currZoomLevel = this._parseZoomLevelOption('max');
    if (currZoomLevel) {
      return currZoomLevel;
    }

    // max zoom level is x4 from "fit state",
    // used for zoom gesture and ctrl/trackpad zoom
    return Math.max(1, this.fit * 4);
  };
  return ZoomLevel;
}();
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipe | PhotoSwipeLightbox | PhotoSwipeBase} instance PhotoSwipe instance
 * @param {number} index
 * @returns Image that is being decoded or false.
 */
function _lazyLoadData(itemData, instance, index) {
  // src/slide/content/content.js
  var content = instance.createContentFromData(itemData, index);
  if (!content || !content.lazyLoad) {
    return;
  }
  var options = instance.options;

  // We need to know dimensions of the image to preload it,
  // as it might use srcset and we need to define sizes
  // @ts-expect-error should provide pswp instance?
  var viewportSize = instance.viewportSize || getViewportSize(options, instance);
  var panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
  var zoomLevel = new ZoomLevel(options, itemData, -1);
  zoomLevel.update(content.width, content.height, panAreaSize);
  content.lazyLoad();
  content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
  return content;
}

/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipe | PhotoSwipeLightbox} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 */
function lazyLoadSlide(index, instance) {
  var itemData = instance.getItemData(index);
  if (instance.dispatch('lazyLoadSlide', {
    index: index,
    itemData: itemData
  }).defaultPrevented) {
    return;
  }
  return _lazyLoadData(itemData, instance, index);
}

/** @typedef {import("../photoswipe.js").default} PhotoSwipe */
/** @typedef {import("../photoswipe.js").PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import("../slide/slide.js").SlideData} SlideData */

/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
var PhotoSwipeBase = /*#__PURE__*/function (_Eventable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PhotoSwipeBase, _Eventable);
  function PhotoSwipeBase() {
    return _Eventable.apply(this, arguments) || this;
  }
  var _proto6 = PhotoSwipeBase.prototype;
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  _proto6.getNumItems = function getNumItems() {
    var numItems;
    var dataSource = this.options.dataSource;
    if (!dataSource) {
      numItems = 0;
    } else if ('length' in dataSource) {
      // may be an array or just object with length property
      numItems = dataSource.length;
    } else if ('gallery' in dataSource) {
      // query DOM elements
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      if (dataSource.items) {
        numItems = dataSource.items.length;
      }
    }

    // legacy event, before filters were introduced
    var event = this.dispatch('numItems', {
      dataSource: dataSource,
      numItems: numItems
    });
    return this.applyFilters('numItems', event.numItems, dataSource);
  }

  /**
   * @param {SlideData} slideData
   * @param {number} index
   */;
  _proto6.createContentFromData = function createContentFromData(slideData, index) {
    // @ts-expect-error
    return new Content(slideData, this, index);
  }

  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   */;
  _proto6.getItemData = function getItemData(index) {
    var dataSource = this.options.dataSource;
    var dataSourceItem;
    if (Array.isArray(dataSource)) {
      // Datasource is an array of elements
      dataSourceItem = dataSource[index];
    } else if (dataSource && dataSource.gallery) {
      // dataSource has gallery property,
      // thus it was created by Lightbox, based on
      // gallery and children options

      // query DOM elements
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      dataSourceItem = dataSource.items[index];
    }
    var itemData = dataSourceItem;
    if (itemData instanceof Element) {
      itemData = this._domElementToItemData(itemData);
    }

    // Dispatching the itemData event,
    // it's a legacy verion before filters were introduced
    var event = this.dispatch('itemData', {
      itemData: itemData || {},
      index: index
    });
    return this.applyFilters('itemData', event.itemData, index);
  }

  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   */;
  _proto6._getGalleryDOMElements = function _getGalleryDOMElements(galleryElement) {
    if (this.options.children || this.options.childSelector) {
      return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
    }
    return [galleryElement];
  }

  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   */
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto6._domElementToItemData = function _domElementToItemData(element) {
    /** @type {SlideData} */
    var itemData = {
      element: element
    };

    // eslint-disable-next-line max-len
    var linkEl = /** @type {HTMLAnchorElement} */element.tagName === 'A' ? element : element.querySelector('a');
    if (linkEl) {
      // src comes from data-pswp-src attribute,
      // if it's empty link href is used
      itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
      if (linkEl.dataset.pswpSrcset) {
        itemData.srcset = linkEl.dataset.pswpSrcset;
      }
      itemData.width = parseInt(linkEl.dataset.pswpWidth, 10);
      itemData.height = parseInt(linkEl.dataset.pswpHeight, 10);

      // support legacy w & h properties
      itemData.w = itemData.width;
      itemData.h = itemData.height;
      if (linkEl.dataset.pswpType) {
        itemData.type = linkEl.dataset.pswpType;
      }
      var thumbnailEl = element.querySelector('img');
      if (thumbnailEl) {
        // msrc is URL to placeholder image that's displayed before large image is loaded
        // by default it's displayed only for the first slide
        itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
        itemData.alt = thumbnailEl.getAttribute('alt');
      }
      if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
        itemData.thumbCropped = true;
      }
    }
    return this.applyFilters('domItemData', itemData, element, linkEl);
  }

  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns Image that is being decoded or false.
   */;
  _proto6.lazyLoadData = function lazyLoadData(itemData, index) {
    return _lazyLoadData(itemData, this, index);
  };
  return PhotoSwipeBase;
}(Eventable);
/**
 * @template T
 * @typedef {import('../types.js').Type<T>} Type<T>
 */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../slide/content.js').default} Content */
/** @typedef {import('../core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('../core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/**
 * @template T
 * @typedef {import('../core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * PhotoSwipe Lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */
var PhotoSwipeLightbox = /*#__PURE__*/function (_PhotoSwipeBase) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PhotoSwipeLightbox, _PhotoSwipeBase);
  /**
   * @param {PhotoSwipeOptions} options
   */
  function PhotoSwipeLightbox(options) {
    var _this6;
    _this6 = _PhotoSwipeBase.call(this) || this;
    /** @type {PhotoSwipeOptions} */
    _this6.options = options || {};
    _this6._uid = 0;
    return _this6;
  }

  /**
   * Initialize lightbox, should be called only once.
   * It's not included in the main constructor, so you may bind events before it.
   */
  var _proto7 = PhotoSwipeLightbox.prototype;
  _proto7.init = function init() {
    var _this7 = this;
    this.onThumbnailsClick = this.onThumbnailsClick.bind(this);

    // Bind click events to each gallery
    getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
      galleryElement.addEventListener('click', _this7.onThumbnailsClick, false);
    });
  }

  /**
   * @param {MouseEvent} e
   */;
  _proto7.onThumbnailsClick = function onThumbnailsClick(e) {
    // Exit and allow default browser action if:
    if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
    || window.pswp // ... if PhotoSwipe is already open
    || window.navigator.onLine === false) {
      // ... if offline
      return;
    }

    // If both clientX and clientY are 0 or not defined,
    // the event is likely triggered by keyboard,
    // so we do not pass the initialPoint
    //
    // Note that some screen readers emulate the mouse position,
    // so it's not ideal way to detect them.
    //
    var initialPoint = {
      x: e.clientX,
      y: e.clientY
    };
    if (!initialPoint.x && !initialPoint.y) {
      initialPoint = null;
    }
    var clickedIndex = this.getClickedIndex(e);
    clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this);
    var dataSource = {
      gallery: /** @type {HTMLElement} */e.currentTarget
    };
    if (clickedIndex >= 0) {
      e.preventDefault();
      this.loadAndOpen(clickedIndex, dataSource, initialPoint);
    }
  }

  /**
   * Get index of gallery item that was clicked.
   *
   * @param {MouseEvent} e click event
   */;
  _proto7.getClickedIndex = function getClickedIndex(e) {
    // legacy option
    if (this.options.getClickedIndexFn) {
      return this.options.getClickedIndexFn.call(this, e);
    }
    var clickedTarget = /** @type {HTMLElement} */e.target;
    var childElements = getElementsFromOption(this.options.children, this.options.childSelector, /** @type {HTMLElement} */e.currentTarget);
    var clickedChildIndex = childElements.findIndex(function (child) {
      return child === clickedTarget || child.contains(clickedTarget);
    });
    if (clickedChildIndex !== -1) {
      return clickedChildIndex;
    } else if (this.options.children || this.options.childSelector) {
      // click wasn't on a child element
      return -1;
    }

    // There is only one item (which is the gallery)
    return 0;
  }

  /**
   * Load and open PhotoSwipe
   *
   * @param {number} index
   * @param {DataSource=} dataSource
   * @param {{ x?: number; y?: number }} [initialPoint]
   */;
  _proto7.loadAndOpen = function loadAndOpen(index, dataSource, initialPoint) {
    // Check if the gallery is already open
    if (window.pswp) {
      return false;
    }

    // set initial index
    this.options.index = index;

    // define options for PhotoSwipe constructor
    this.options.initialPointerPos = initialPoint;
    this.shouldOpen = true;
    this.preload(index, dataSource);
    return true;
  }

  /**
   * Load the main module and the slide content by index
   *
   * @param {number} index
   * @param {DataSource=} dataSource
   */;
  _proto7.preload = function preload(index, dataSource) {
    var _this8 = this;
    var options = this.options;
    if (dataSource) {
      options.dataSource = dataSource;
    }

    // Add the main module
    /** @type {Promise<Type<PhotoSwipe>>[]} */
    var promiseArray = [];
    var pswpModuleType = typeof options.pswpModule;
    if (isPswpClass(options.pswpModule)) {
      promiseArray.push(Promise.resolve( /** @type {Type<PhotoSwipe>} */options.pswpModule));
    } else if (pswpModuleType === 'string') {
      throw new Error('pswpModule as string is no longer supported');
    } else if (pswpModuleType === 'function') {
      promiseArray.push( /** @type {() => Promise<Type<PhotoSwipe>>} */options.pswpModule());
    } else {
      throw new Error('pswpModule is not valid');
    }

    // Add custom-defined promise, if any
    if (typeof options.openPromise === 'function') {
      // allow developers to perform some task before opening
      promiseArray.push(options.openPromise());
    }
    if (options.preloadFirstSlide !== false && index >= 0) {
      this._preloadedContent = lazyLoadSlide(index, this);
    }

    // Wait till all promises resolve and open PhotoSwipe
    var uid = ++this._uid;
    Promise.all(promiseArray).then(function (iterableModules) {
      if (_this8.shouldOpen) {
        var mainModule = iterableModules[0];
        _this8._openPhotoswipe(mainModule, uid);
      }
    });
  }

  /**
   * @private
   * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
   * @param {number} uid
   */;
  _proto7._openPhotoswipe = function _openPhotoswipe(module, uid) {
    var _this9 = this;
    // Cancel opening if UID doesn't match the current one
    // (if user clicked on another gallery item before current was loaded).
    //
    // Or if shouldOpen flag is set to false
    // (developer may modify it via public API)
    if (uid !== this._uid && this.shouldOpen) {
      return;
    }
    this.shouldOpen = false;

    // PhotoSwipe is already open
    if (window.pswp) {
      return;
    }

    /**
     * Pass data to PhotoSwipe and open init
     *
     * @type {PhotoSwipe}
     */
    var pswp = typeof module === 'object' ? new module["default"](this.options) // eslint-disable-line
    : new module(this.options); // eslint-disable-line

    this.pswp = pswp;
    window.pswp = pswp;

    // map listeners from Lightbox to PhotoSwipe Core
    /** @type {(keyof PhotoSwipeEventsMap)[]} */
    Object.keys(this._listeners).forEach(function (name) {
      _this9._listeners[name].forEach(function (fn) {
        pswp.on(name, /** @type {EventCallback<typeof name>} */fn);
      });
    });

    // same with filters
    /** @type {(keyof PhotoSwipeFiltersMap)[]} */
    Object.keys(this._filters).forEach(function (name) {
      _this9._filters[name].forEach(function (filter) {
        pswp.addFilter(name, filter.fn, filter.priority);
      });
    });
    if (this._preloadedContent) {
      pswp.contentLoader.addToCache(this._preloadedContent);
      this._preloadedContent = null;
    }
    pswp.on('destroy', function () {
      // clean up public variables
      _this9.pswp = null;
      window.pswp = null;
    });
    pswp.init();
  }

  /**
   * Unbinds all events, closes PhotoSwipe if it's open.
   */;
  _proto7.destroy = function destroy() {
    var _this10 = this;
    if (this.pswp) {
      this.pswp.destroy();
    }
    this.shouldOpen = false;
    this._listeners = null;
    getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
      galleryElement.removeEventListener('click', _this10.onThumbnailsClick, false);
    });
  };
  return PhotoSwipeLightbox;
}(PhotoSwipeBase);


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoSwipe)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");



/*!
  * PhotoSwipe 5.3.2 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */
/** @typedef {import('../photoswipe.js').Point} Point */

/** @typedef {undefined | null | false | '' | 0} Falsy */
/** @typedef {keyof HTMLElementTagNameMap} HTMLElementTagName */

/**
 * @template {HTMLElementTagName | Falsy} [T="div"]
 * @template {Node | undefined} [NodeToAppendElementTo=undefined]
 * @param {string=} className
 * @param {T=} [tagName]
 * @param {NodeToAppendElementTo=} appendToEl
 * @returns {T extends HTMLElementTagName ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap['div']}
 */
function createElement(className, tagName, appendToEl) {
  var el = document.createElement(tagName || 'div');
  if (className) {
    el.className = className;
  }
  if (appendToEl) {
    appendToEl.appendChild(el);
  }
  // @ts-expect-error
  return el;
}

/**
 * @param {Point} p1
 * @param {Point} p2
 */
function equalizePoints(p1, p2) {
  p1.x = p2.x;
  p1.y = p2.y;
  if (p2.id !== undefined) {
    p1.id = p2.id;
  }
  return p1;
}

/**
 * @param {Point} p
 */
function roundPoint(p) {
  p.x = Math.round(p.x);
  p.y = Math.round(p.y);
}

/**
 * Returns distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 */
function getDistanceBetween(p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  return Math.sqrt(x * x + y * y);
}

/**
 * Whether X and Y positions of points are qual
 *
 * @param {Point} p1
 * @param {Point} p2
 */
function pointsEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

/**
 * The float result between the min and max values.
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/**
 * Get transform string
 *
 * @param {number} x
 * @param {number=} y
 * @param {number=} scale
 */
function toTransformString(x, y, scale) {
  var propValue = 'translate3d(' + x + 'px,' + (y || 0) + 'px' + ',0)';
  if (scale !== undefined) {
    propValue += ' scale3d(' + scale + ',' + scale + ',1)';
  }
  return propValue;
}

/**
 * Apply transform:translate(x, y) scale(scale) to element
 *
 * @param {HTMLElement} el
 * @param {number} x
 * @param {number=} y
 * @param {number=} scale
 */
function setTransform(el, x, y, scale) {
  el.style.transform = toTransformString(x, y, scale);
}
var defaultCSSEasing = 'cubic-bezier(.4,0,.22,1)';

/**
 * Apply CSS transition to element
 *
 * @param {HTMLElement} el
 * @param {string=} prop CSS property to animate
 * @param {number=} duration in ms
 * @param {string=} ease CSS easing function
 */
function setTransitionStyle(el, prop, duration, ease) {
  // inOut: 'cubic-bezier(.4, 0, .22, 1)', // for "toggle state" transitions
  // out: 'cubic-bezier(0, 0, .22, 1)', // for "show" transitions
  // in: 'cubic-bezier(.4, 0, 1, 1)'// for "hide" transitions
  el.style.transition = prop ? prop + ' ' + duration + 'ms ' + (ease || defaultCSSEasing) : 'none';
}

/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */
function setWidthHeight(el, w, h) {
  el.style.width = typeof w === 'number' ? w + 'px' : w;
  el.style.height = typeof h === 'number' ? h + 'px' : h;
}

/**
 * @param {HTMLElement} el
 */
function removeTransitionStyle(el) {
  setTransitionStyle(el);
}

/**
 * @param {HTMLImageElement} img
 * @returns {Promise<HTMLImageElement | void>}
 */
function decodeImage(img) {
  if ('decode' in img) {
    return img.decode();
  }
  if (img.complete) {
    return Promise.resolve(img);
  }
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      return resolve(img);
    };
    img.onerror = reject;
  });
}

/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */
/** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */
var LOAD_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 */
function specialKeyUsed(e) {
  if (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
    return true;
  }
}

/**
 * Parse `gallery` or `children` options.
 *
 * @param {HTMLElement | NodeListOf<HTMLElement> | string} option
 * @param {string=} legacySelector
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */
function getElementsFromOption(option, legacySelector, parent) {
  if (parent === void 0) {
    parent = document;
  }
  /** @type {HTMLElement[]} */
  var elements = [];
  if (option instanceof Element) {
    elements = [option];
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option);
  } else {
    var selector = typeof option === 'string' ? option : legacySelector;
    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector));
    }
  }
  return elements;
}

/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */
function isSafari() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}

// Detect passive event listener support
var supportsPassive = false;
/* eslint-disable */
try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}
/* eslint-enable */

/**
 * @typedef {Object} PoolItem
 * @prop {HTMLElement | Window | Document} target
 * @prop {string} type
 * @prop {(e: any) => void} listener
 * @prop {boolean} passive
 */
var DOMEvents = /*#__PURE__*/function () {
  function DOMEvents() {
    /**
     * @type {PoolItem[]}
     * @private
     */
    this._pool = [];
  }

  /**
   * Adds event listeners
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type Can be multiple, separated by space.
   * @param {(e: any) => void} listener
   * @param {boolean=} passive
   */
  var _proto = DOMEvents.prototype;
  _proto.add = function add(target, type, listener, passive) {
    this._toggleListener(target, type, listener, passive);
  }

  /**
   * Removes event listeners
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type
   * @param {(e: any) => void} listener
   * @param {boolean=} passive
   */;
  _proto.remove = function remove(target, type, listener, passive) {
    this._toggleListener(target, type, listener, passive, true);
  }

  /**
   * Removes all bound events
   */;
  _proto.removeAll = function removeAll() {
    var _this = this;
    this._pool.forEach(function (poolItem) {
      _this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
    });
    this._pool = [];
  }

  /**
   * Adds or removes event
   *
   * @param {HTMLElement | Window | Document} target
   * @param {string} type
   * @param {(e: any) => void} listener
   * @param {boolean} passive
   * @param {boolean=} unbind Whether the event should be added or removed
   * @param {boolean=} skipPool Whether events pool should be skipped
   */;
  _proto._toggleListener = function _toggleListener(target, type, listener, passive, unbind, skipPool) {
    var _this2 = this;
    if (!target) {
      return;
    }
    var methodName = unbind ? 'removeEventListener' : 'addEventListener';
    var types = type.split(' ');
    types.forEach(function (eType) {
      if (eType) {
        // Events pool is used to easily unbind all events when PhotoSwipe is closed,
        // so developer doesn't need to do this manually
        if (!skipPool) {
          if (unbind) {
            // Remove from the events pool
            _this2._pool = _this2._pool.filter(function (poolItem) {
              return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
            });
          } else {
            // Add to the events pool
            _this2._pool.push({
              target: target,
              type: eType,
              listener: listener,
              passive: passive
            });
          }
        }

        // most PhotoSwipe events call preventDefault,
        // and we do not need browser to scroll the page
        var eventOptions = supportsPassive ? {
          passive: passive || false
        } : false;
        target[methodName](eType, listener, eventOptions);
      }
    });
  };
  return DOMEvents;
}();
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipe} pswp
 */
function getViewportSize(options, pswp) {
  if (options.getViewportSizeFn) {
    var newViewportSize = options.getViewportSizeFn(options, pswp);
    if (newViewportSize) {
      return newViewportSize;
    }
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}

/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {{ x?: number; y?: number }} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */
function parsePaddingOption(prop, options, viewportSize, itemData, index) {
  /** @type {number} */
  var paddingValue;
  if (options.paddingFn) {
    paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
  } else if (options.padding) {
    paddingValue = options.padding[prop];
  } else {
    var legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1);
    // @ts-expect-error
    if (options[legacyPropName]) {
      // @ts-expect-error
      paddingValue = options[legacyPropName];
    }
  }
  return paddingValue || 0;
}

/**
 * @param {PhotoSwipeOptions} options
 * @param {{ x?: number; y?: number }} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 */
function getPanAreaSize(options, viewportSize, itemData, index) {
  return {
    x: viewportSize.x - parsePaddingOption('left', options, viewportSize, itemData, index) - parsePaddingOption('right', options, viewportSize, itemData, index),
    y: viewportSize.y - parsePaddingOption('top', options, viewportSize, itemData, index) - parsePaddingOption('bottom', options, viewportSize, itemData, index)
  };
}

/** @typedef {import('./slide.js').default} Slide */
/** @typedef {{ x?: number; y?: number }} Point */
/** @typedef {'x' | 'y'} Axis */

/**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */
var PanBounds = /*#__PURE__*/function () {
  /**
   * @param {Slide} slide
   */
  function PanBounds(slide) {
    this.slide = slide;
    this.currZoomLevel = 1;

    /** @type {Point} */
    this.center = {};
    /** @type {Point} */
    this.max = {};
    /** @type {Point} */
    this.min = {};
    this.reset();
  }

  /**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */
  var _proto2 = PanBounds.prototype;
  _proto2.update = function update(currZoomLevel) {
    this.currZoomLevel = currZoomLevel;
    if (!this.slide.width) {
      this.reset();
    } else {
      this._updateAxis('x');
      this._updateAxis('y');
      this.slide.pswp.dispatch('calcBounds', {
        slide: this.slide
      });
    }
  }

  /**
   * _calculateItemBoundsForAxis
   *
   * @param {Axis} axis
   */;
  _proto2._updateAxis = function _updateAxis(axis) {
    var pswp = this.slide.pswp;
    var elSize = this.slide[axis === 'x' ? 'width' : 'height'] * this.currZoomLevel;
    var paddingProp = axis === 'x' ? 'left' : 'top';
    var padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
    var panAreaSize = this.slide.panAreaSize[axis];

    // Default position of element.
    // By defaul it is center of viewport:
    this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;

    // maximum pan position
    this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];

    // minimum pan position
    this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
  }

  // _getZeroBounds
  ;
  _proto2.reset = function reset() {
    this.center.x = 0;
    this.center.y = 0;
    this.max.x = 0;
    this.max.y = 0;
    this.min.x = 0;
    this.min.y = 0;
  }

  /**
   * Correct pan position if it's beyond the bounds
   *
   * @param {Axis} axis x or y
   * @param {number} panOffset
   */;
  _proto2.correctPan = function correctPan(axis, panOffset) {
    // checkPanBounds
    return clamp(panOffset, this.max[axis], this.min[axis]);
  };
  return PanBounds;
}();
var MAX_IMAGE_WIDTH = 4000;

/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */

/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */

/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
var ZoomLevel = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe=} pswp PhotoSwipe instance, can be undefined if not initialized yet
   */
  function ZoomLevel(options, itemData, index, pswp) {
    this.pswp = pswp;
    this.options = options;
    this.itemData = itemData;
    this.index = index;
  }

  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {{ x?: number; y?: number }} panAreaSize
   */
  var _proto3 = ZoomLevel.prototype;
  _proto3.update = function update(maxWidth, maxHeight, panAreaSize) {
    this.elementSize = {
      x: maxWidth,
      y: maxHeight
    };
    this.panAreaSize = panAreaSize;
    var hRatio = this.panAreaSize.x / this.elementSize.x;
    var vRatio = this.panAreaSize.y / this.elementSize.y;
    this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
    this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);

    // zoom.vFill defines zoom level of the image
    // when it has 100% of viewport vertical space (height)
    this.vFill = Math.min(1, vRatio);
    this.initial = this._getInitial();
    this.secondary = this._getSecondary();
    this.max = Math.max(this.initial, this.secondary, this._getMax());
    this.min = Math.min(this.fit, this.initial, this.secondary);
    if (this.pswp) {
      this.pswp.dispatch('zoomLevelsUpdate', {
        zoomLevels: this,
        slideData: this.itemData
      });
    }
  }

  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   */;
  _proto3._parseZoomLevelOption = function _parseZoomLevelOption(optionPrefix) {
    // eslint-disable-next-line max-len
    var optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */optionPrefix + 'ZoomLevel';
    var optionValue = this.options[optionName];
    if (!optionValue) {
      return;
    }
    if (typeof optionValue === 'function') {
      return optionValue(this);
    }
    if (optionValue === 'fill') {
      return this.fill;
    }
    if (optionValue === 'fit') {
      return this.fit;
    }
    return Number(optionValue);
  }

  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */;
  _proto3._getSecondary = function _getSecondary() {
    var currZoomLevel = this._parseZoomLevelOption('secondary');
    if (currZoomLevel) {
      return currZoomLevel;
    }

    // 3x of "fit" state, but not larger than original
    currZoomLevel = Math.min(1, this.fit * 3);
    if (currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
      currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
    }
    return currZoomLevel;
  }

  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */;
  _proto3._getInitial = function _getInitial() {
    return this._parseZoomLevelOption('initial') || this.fit;
  }

  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */;
  _proto3._getMax = function _getMax() {
    var currZoomLevel = this._parseZoomLevelOption('max');
    if (currZoomLevel) {
      return currZoomLevel;
    }

    // max zoom level is x4 from "fit state",
    // used for zoom gesture and ctrl/trackpad zoom
    return Math.max(1, this.fit * 4);
  };
  return ZoomLevel;
}();
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * Renders and allows to control a single slide
 */
var Slide = /*#__PURE__*/function () {
  /**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */
  function Slide(data, index, pswp) {
    this.data = data;
    this.index = index;
    this.pswp = pswp;
    this.isActive = index === pswp.currIndex;
    this.currentResolution = 0;
    /** @type {Point} */
    this.panAreaSize = {};
    this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
    this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
    this.pswp.dispatch('gettingData', {
      slide: this,
      data: this.data,
      index: index
    });
    this.pan = {
      x: 0,
      y: 0
    };
    this.content = this.pswp.contentLoader.getContentBySlide(this);
    this.container = createElement('pswp__zoom-wrap');
    this.currZoomLevel = 1;
    /** @type {number} */
    this.width = this.content.width;
    /** @type {number} */
    this.height = this.content.height;
    this.bounds = new PanBounds(this);
    this.prevDisplayedWidth = -1;
    this.prevDisplayedHeight = -1;
    this.pswp.dispatch('slideInit', {
      slide: this
    });
  }

  /**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */
  var _proto4 = Slide.prototype;
  _proto4.setIsActive = function setIsActive(isActive) {
    if (isActive && !this.isActive) {
      // slide just became active
      this.activate();
    } else if (!isActive && this.isActive) {
      // slide just became non-active
      this.deactivate();
    }
  }

  /**
   * Appends slide content to DOM
   *
   * @param {HTMLElement} holderElement
   */;
  _proto4.append = function append(holderElement) {
    this.holderElement = holderElement;
    this.container.style.transformOrigin = '0 0';

    // Slide appended to DOM
    if (!this.data) {
      return;
    }
    this.calculateSize();
    this.load();
    this.updateContentSize();
    this.appendHeavy();
    this.holderElement.appendChild(this.container);
    this.zoomAndPanToInitial();
    this.pswp.dispatch('firstZoomPan', {
      slide: this
    });
    this.applyCurrentZoomPan();
    this.pswp.dispatch('afterSetContent', {
      slide: this
    });
    if (this.isActive) {
      this.activate();
    }
  };
  _proto4.load = function load() {
    this.content.load();
    this.pswp.dispatch('slideLoad', {
      slide: this
    });
  }

  /**
   * Append "heavy" DOM elements
   *
   * This may depend on a type of slide,
   * but generally these are large images.
   */;
  _proto4.appendHeavy = function appendHeavy() {
    var pswp = this.pswp;
    var appendHeavyNearby = true; // todo

    // Avoid appending heavy elements during animations
    if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
      return;
    }
    if (this.pswp.dispatch('appendHeavy', {
      slide: this
    }).defaultPrevented) {
      return;
    }
    this.heavyAppended = true;
    this.content.append();
    this.pswp.dispatch('appendHeavyContent', {
      slide: this
    });
  }

  /**
   * Triggered when this slide is active (selected).
   *
   * If it's part of opening/closing transition -
   * activate() will trigger after the transition is ended.
   */;
  _proto4.activate = function activate() {
    this.isActive = true;
    this.appendHeavy();
    this.content.activate();
    this.pswp.dispatch('slideActivate', {
      slide: this
    });
  }

  /**
   * Triggered when this slide becomes inactive.
   *
   * Slide can become inactive only after it was active.
   */;
  _proto4.deactivate = function deactivate() {
    this.isActive = false;
    this.content.deactivate();
    if (this.currZoomLevel !== this.zoomLevels.initial) {
      // allow filtering
      this.calculateSize();
    }

    // reset zoom level
    this.currentResolution = 0;
    this.zoomAndPanToInitial();
    this.applyCurrentZoomPan();
    this.updateContentSize();
    this.pswp.dispatch('slideDeactivate', {
      slide: this
    });
  }

  /**
   * The slide should destroy itself, it will never be used again.
   * (unbind all events and destroy internal components)
   */;
  _proto4.destroy = function destroy() {
    this.content.hasSlide = false;
    this.content.remove();
    this.container.remove();
    this.pswp.dispatch('slideDestroy', {
      slide: this
    });
  };
  _proto4.resize = function resize() {
    if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
      // Keep initial zoom level if it was before the resize,
      // as well as when this slide is not active

      // Reset position and scale to original state
      this.calculateSize();
      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
    } else {
      // readjust pan position if it's beyond the bounds
      this.calculateSize();
      this.bounds.update(this.currZoomLevel);
      this.panTo(this.pan.x, this.pan.y);
    }
  }

  /**
   * Apply size to current slide content,
   * based on the current resolution and scale.
   *
   * @param {boolean=} force if size should be updated even if dimensions weren't changed
   */;
  _proto4.updateContentSize = function updateContentSize(force) {
    // Use initial zoom level
    // if resolution is not defined (user didn't zoom yet)
    var scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
    if (!scaleMultiplier) {
      return;
    }
    var width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
    var height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
    if (!this.sizeChanged(width, height) && !force) {
      return;
    }
    this.content.setDisplayedSize(width, height);
  }

  /**
   * @param {number} width
   * @param {number} height
   */;
  _proto4.sizeChanged = function sizeChanged(width, height) {
    if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
      this.prevDisplayedWidth = width;
      this.prevDisplayedHeight = height;
      return true;
    }
    return false;
  };
  _proto4.getPlaceholderElement = function getPlaceholderElement() {
    if (this.content.placeholder) {
      return this.content.placeholder.element;
    }
  }

  /**
   * Zoom current slide image to...
   *
   * @param {number} destZoomLevel Destination zoom level.
   * @param {{ x?: number; y?: number }} centerPoint
   * Transform origin center point, or false if viewport center should be used.
   * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
   * @param {boolean=} ignoreBounds Minimum and maximum zoom levels will be ignored.
   * @return {boolean=} Returns true if animated.
   */;
  _proto4.zoomTo = function zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
    var _this3 = this;
    var pswp = this.pswp;
    if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
      return;
    }
    pswp.dispatch('beforeZoomTo', {
      destZoomLevel: destZoomLevel,
      centerPoint: centerPoint,
      transitionDuration: transitionDuration
    });

    // stop all pan and zoom transitions
    pswp.animations.stopAllPan();

    // if (!centerPoint) {
    //   centerPoint = pswp.getViewportCenterPoint();
    // }

    var prevZoomLevel = this.currZoomLevel;
    if (!ignoreBounds) {
      destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
    }

    // if (transitionDuration === undefined) {
    //   transitionDuration = this.pswp.options.zoomAnimationDuration;
    // }

    this.setZoomLevel(destZoomLevel);
    this.pan.x = this.calculateZoomToPanOffset('x', centerPoint, prevZoomLevel);
    this.pan.y = this.calculateZoomToPanOffset('y', centerPoint, prevZoomLevel);
    roundPoint(this.pan);
    var finishTransition = function finishTransition() {
      _this3._setResolution(destZoomLevel);
      _this3.applyCurrentZoomPan();
    };
    if (!transitionDuration) {
      finishTransition();
    } else {
      pswp.animations.startTransition({
        isPan: true,
        name: 'zoomTo',
        target: this.container,
        transform: this.getCurrentTransform(),
        onComplete: finishTransition,
        duration: transitionDuration,
        easing: pswp.options.easing
      });
    }
  }

  /**
   * @param {{ x?: number, y?: number }} [centerPoint]
   */;
  _proto4.toggleZoom = function toggleZoom(centerPoint) {
    this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
  }

  /**
   * Updates zoom level property and recalculates new pan bounds,
   * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
   *
   * @param {number} currZoomLevel
   */;
  _proto4.setZoomLevel = function setZoomLevel(currZoomLevel) {
    this.currZoomLevel = currZoomLevel;
    this.bounds.update(this.currZoomLevel);
  }

  /**
   * Get pan position after zoom at a given `point`.
   *
   * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
   * pan bounds according to the new zoom level.
   *
   * @param {'x' | 'y'} axis
   * @param {{ x?: number; y?: number }} [point]
   * point based on which zoom is performed, usually refers to the current mouse position,
   * if false - viewport center will be used.
   * @param {number=} prevZoomLevel Zoom level before new zoom was applied.
   */;
  _proto4.calculateZoomToPanOffset = function calculateZoomToPanOffset(axis, point, prevZoomLevel) {
    var totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
    if (totalPanDistance === 0) {
      return this.bounds.center[axis];
    }
    if (!point) {
      point = this.pswp.getViewportCenterPoint();
    }
    var zoomFactor = this.currZoomLevel / prevZoomLevel;
    return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
  }

  /**
   * Apply pan and keep it within bounds.
   *
   * @param {number} panX
   * @param {number} panY
   */;
  _proto4.panTo = function panTo(panX, panY) {
    this.pan.x = this.bounds.correctPan('x', panX);
    this.pan.y = this.bounds.correctPan('y', panY);
    this.applyCurrentZoomPan();
  }

  /**
   * If the slide in the current state can be panned by the user
   */;
  _proto4.isPannable = function isPannable() {
    return this.width && this.currZoomLevel > this.zoomLevels.fit;
  }

  /**
   * If the slide can be zoomed
   */;
  _proto4.isZoomable = function isZoomable() {
    return this.width && this.content.isZoomable();
  }

  /**
   * Apply transform and scale based on
   * the current pan position (this.pan) and zoom level (this.currZoomLevel)
   */;
  _proto4.applyCurrentZoomPan = function applyCurrentZoomPan() {
    this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
    if (this === this.pswp.currSlide) {
      this.pswp.dispatch('zoomPanUpdate', {
        slide: this
      });
    }
  };
  _proto4.zoomAndPanToInitial = function zoomAndPanToInitial() {
    this.currZoomLevel = this.zoomLevels.initial;

    // pan according to the zoom level
    this.bounds.update(this.currZoomLevel);
    equalizePoints(this.pan, this.bounds.center);
    this.pswp.dispatch('initialZoomPan', {
      slide: this
    });
  }

  /**
   * Set translate and scale based on current resolution
   *
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   */;
  _proto4._applyZoomTransform = function _applyZoomTransform(x, y, zoom) {
    zoom /= this.currentResolution || this.zoomLevels.initial;
    setTransform(this.container, x, y, zoom);
  };
  _proto4.calculateSize = function calculateSize() {
    var pswp = this.pswp;
    equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
    this.zoomLevels.update(this.width, this.height, this.panAreaSize);
    pswp.dispatch('calcSlideSize', {
      slide: this
    });
  };
  _proto4.getCurrentTransform = function getCurrentTransform() {
    var scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return toTransformString(this.pan.x, this.pan.y, scale);
  }

  /**
   * Set resolution and re-render the image.
   *
   * For example, if the real image size is 2000x1500,
   * and resolution is 0.5 - it will be rendered as 1000x750.
   *
   * Image with zoom level 2 and resolution 0.5 is
   * the same as image with zoom level 1 and resolution 1.
   *
   * Used to optimize animations and make
   * sure that browser renders image in highest quality.
   * Also used by responsive images to load the correct one.
   *
   * @param {number} newResolution
   */;
  _proto4._setResolution = function _setResolution(newResolution) {
    if (newResolution === this.currentResolution) {
      return;
    }
    this.currentResolution = newResolution;
    this.updateContentSize();
    this.pswp.dispatch('resolutionChanged');
  };
  return Slide;
}();
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
var PAN_END_FRICTION = 0.35;
var VERTICAL_DRAG_FRICTION = 0.6;

// 1 corresponds to the third of viewport height
var MIN_RATIO_TO_CLOSE = 0.4;

// Minimum speed required to navigate
// to next or previous slide
var MIN_NEXT_SLIDE_SPEED = 0.5;

/**
 * @param {number} initialVelocity
 * @param {number} decelerationRate
 */
function project(initialVelocity, decelerationRate) {
  return initialVelocity * decelerationRate / (1 - decelerationRate);
}

/**
 * Handles single pointer dragging
 */
var DragHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function DragHandler(gestures) {
    this.gestures = gestures;
    this.pswp = gestures.pswp;
    /** @type {Point} */
    this.startPan = {};
  }
  var _proto5 = DragHandler.prototype;
  _proto5.start = function start() {
    equalizePoints(this.startPan, this.pswp.currSlide.pan);
    this.pswp.animations.stopAll();
  };
  _proto5.change = function change() {
    var _this$gestures = this.gestures,
      p1 = _this$gestures.p1,
      prevP1 = _this$gestures.prevP1,
      dragAxis = _this$gestures.dragAxis,
      pswp = _this$gestures.pswp;
    var currSlide = pswp.currSlide;
    if (dragAxis === 'y' && pswp.options.closeOnVerticalDrag && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
      // Handle vertical drag to close
      var panY = currSlide.pan.y + (p1.y - prevP1.y);
      if (!pswp.dispatch('verticalDrag', {
        panY: panY
      }).defaultPrevented) {
        this._setPanWithFriction('y', panY, VERTICAL_DRAG_FRICTION);
        var bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
        pswp.applyBgOpacity(bgOpacity);
        currSlide.applyCurrentZoomPan();
      }
    } else {
      var mainScrollChanged = this._panOrMoveMainScroll('x');
      if (!mainScrollChanged) {
        this._panOrMoveMainScroll('y');
        roundPoint(currSlide.pan);
        currSlide.applyCurrentZoomPan();
      }
    }
  };
  _proto5.end = function end() {
    var _this$gestures2 = this.gestures,
      pswp = _this$gestures2.pswp,
      velocity = _this$gestures2.velocity;
    var mainScroll = pswp.mainScroll;
    var indexDiff = 0;
    pswp.animations.stopAll();

    // Handle main scroll if it's shifted
    if (mainScroll.isShifted()) {
      // Position of the main scroll relative to the viewport
      var mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();

      // Ratio between 0 and 1:
      // 0 - slide is not visible at all,
      // 0.5 - half of the slide is vicible
      // 1 - slide is fully visible
      var currentSlideVisibilityRatio = mainScrollShiftDiff / pswp.viewportSize.x;

      // Go next slide.
      //
      // - if velocity and its direction is matched
      //   and we see at least tiny part of the next slide
      //
      // - or if we see less than 50% of the current slide
      //   and velocity is close to 0
      //
      if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
        // Go to next slide
        indexDiff = 1;
        velocity.x = Math.min(velocity.x, 0);
      } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
        // Go to prev slide
        indexDiff = -1;
        velocity.x = Math.max(velocity.x, 0);
      }
      mainScroll.moveIndexBy(indexDiff, true, velocity.x);
    }

    // Restore zoom level
    if (pswp.currSlide.currZoomLevel > pswp.currSlide.zoomLevels.max || this.gestures.isMultitouch) {
      this.gestures.zoomLevels.correctZoomPan(true);
    } else {
      // we run two animations instead of one,
      // as each axis has own pan boundaries and thus different spring function
      // (correctZoomPan does not have this functionality,
      //  it animates all properties with single timing function)
      this._finishPanGestureForAxis('x');
      this._finishPanGestureForAxis('y');
    }
  }

  /**
   * @private
   * @param {'x' | 'y'} axis
   */;
  _proto5._finishPanGestureForAxis = function _finishPanGestureForAxis(axis) {
    var pswp = this.pswp;
    var currSlide = pswp.currSlide;
    var velocity = this.gestures.velocity;
    var pan = currSlide.pan,
      bounds = currSlide.bounds;
    var panPos = pan[axis];
    var restoreBgOpacity = pswp.bgOpacity < 1 && axis === 'y';

    // 0.995 means - scroll view loses 0.5% of its velocity per millisecond
    // Inceasing this number will reduce travel distance
    var decelerationRate = 0.995; // 0.99

    // Pan position if there is no bounds
    var projectedPosition = panPos + project(velocity[axis], decelerationRate);
    if (restoreBgOpacity) {
      var vDragRatio = this._getVerticalDragRatio(panPos);
      var projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);

      // If we are above and moving upwards,
      // or if we are below and moving downwards
      if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
        pswp.close();
        return;
      }
    }

    // Pan position with corrected bounds
    var correctedPanPosition = bounds.correctPan(axis, projectedPosition);

    // Exit if pan position should not be changed
    // or if speed it too low
    if (panPos === correctedPanPosition) {
      return;
    }

    // Overshoot if the final position is out of pan bounds
    var dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
    var initialBgOpacity = pswp.bgOpacity;
    var totalPanDist = correctedPanPosition - panPos;
    pswp.animations.startSpring({
      name: 'panGesture' + axis,
      isPan: true,
      start: panPos,
      end: correctedPanPosition,
      velocity: velocity[axis],
      dampingRatio: dampingRatio,
      onUpdate: function onUpdate(pos) {
        // Animate opacity of background relative to Y pan position of an image
        if (restoreBgOpacity && pswp.bgOpacity < 1) {
          // 0 - start of animation, 1 - end of animation
          var animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;

          // We clamp opacity to keep it between 0 and 1.
          // As progress ratio can be larger than 1 due to overshoot,
          // and we do not want to bounce opacity.
          pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
        }
        pan[axis] = Math.floor(pos);
        currSlide.applyCurrentZoomPan();
      }
    });
  }

  /**
   * Update position of the main scroll,
   * or/and update pan position of the current slide.
   *
   * Should return true if it changes (or can change) main scroll.
   *
   * @private
   * @param {'x' | 'y'} axis
   */;
  _proto5._panOrMoveMainScroll = function _panOrMoveMainScroll(axis) {
    var _this$gestures3 = this.gestures,
      p1 = _this$gestures3.p1,
      pswp = _this$gestures3.pswp,
      dragAxis = _this$gestures3.dragAxis,
      prevP1 = _this$gestures3.prevP1,
      isMultitouch = _this$gestures3.isMultitouch;
    var currSlide = pswp.currSlide,
      mainScroll = pswp.mainScroll;
    var delta = p1[axis] - prevP1[axis];
    var newMainScrollX = mainScroll.x + delta;
    if (!delta) {
      return;
    }

    // Always move main scroll if image can not be panned
    if (axis === 'x' && !currSlide.isPannable() && !isMultitouch) {
      mainScroll.moveTo(newMainScrollX, true);
      return true; // changed main scroll
    }

    var bounds = currSlide.bounds;
    var newPan = currSlide.pan[axis] + delta;
    if (pswp.options.allowPanToNext && dragAxis === 'x' && axis === 'x' && !isMultitouch) {
      var currSlideMainScrollX = mainScroll.getCurrSlideX();

      // Position of the main scroll relative to the viewport
      var mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
      var isLeftToRight = delta > 0;
      var isRightToLeft = !isLeftToRight;
      if (newPan > bounds.min[axis] && isLeftToRight) {
        // Panning from left to right, beyond the left edge

        // Wether the image was at minimum pan position (or less)
        // when this drag gesture started.
        // Minimum pan position refers to the left edge of the image.
        var wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
        if (wasAtMinPanPosition) {
          mainScroll.moveTo(newMainScrollX, true);
          return true;
        } else {
          this._setPanWithFriction(axis, newPan);
          //currSlide.pan[axis] = newPan;
        }
      } else if (newPan < bounds.max[axis] && isRightToLeft) {
        // Paning from right to left, beyond the right edge

        // Maximum pan position refers to the right edge of the image.
        var wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
        if (wasAtMaxPanPosition) {
          mainScroll.moveTo(newMainScrollX, true);
          return true;
        } else {
          this._setPanWithFriction(axis, newPan);
          //currSlide.pan[axis] = newPan;
        }
      } else {
        // If main scroll is shifted
        if (mainScrollShiftDiff !== 0) {
          // If main scroll is shifted right
          if (mainScrollShiftDiff > 0 /*&& isRightToLeft*/) {
            mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
            return true;
          } else if (mainScrollShiftDiff < 0 /*&& isLeftToRight*/) {
            // Main scroll is shifted left (Position is less than 0 comparing to the viewport 0)
            mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
            return true;
          }
        } else {
          // We are within pan bounds, so just pan
          this._setPanWithFriction(axis, newPan);
        }
      }
    } else {
      if (axis === 'y') {
        // Do not pan vertically if main scroll is shifted o
        if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
          this._setPanWithFriction(axis, newPan);
        }
      } else {
        this._setPanWithFriction(axis, newPan);
      }
    }
  }
  //
  // If we move above - the ratio is negative
  // If we move below the ratio is positive

  /**
   * Relation between pan Y position and third of viewport height.
   *
   * When we are at initial position (center bounds) - the ratio is 0,
   * if position is shifted upwards - the ratio is negative,
   * if position is shifted downwards - the ratio is positive.
   *
   * @private
   * @param {number} panY The current pan Y position.
   */;
  _proto5._getVerticalDragRatio = function _getVerticalDragRatio(panY) {
    return (panY - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3);
  }

  /**
   * Set pan position of the current slide.
   * Apply friction if the position is beyond the pan bounds,
   * or if custom friction is defined.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} potentialPan
   * @param {number=} customFriction (0.1 - 1)
   */;
  _proto5._setPanWithFriction = function _setPanWithFriction(axis, potentialPan, customFriction) {
    var _this$pswp$currSlide = this.pswp.currSlide,
      pan = _this$pswp$currSlide.pan,
      bounds = _this$pswp$currSlide.bounds;
    var correctedPan = bounds.correctPan(axis, potentialPan);
    // If we are out of pan bounds
    if (correctedPan !== potentialPan || customFriction) {
      var delta = Math.round(potentialPan - pan[axis]);
      pan[axis] += delta * (customFriction || PAN_END_FRICTION);
    } else {
      pan[axis] = potentialPan;
    }
  };
  return DragHandler;
}();
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
var UPPER_ZOOM_FRICTION = 0.05;
var LOWER_ZOOM_FRICTION = 0.15;

/**
 * Get center point between two points
 *
 * @param {Point} p
 * @param {Point} p1
 * @param {Point} p2
 */
function getZoomPointsCenter(p, p1, p2) {
  p.x = (p1.x + p2.x) / 2;
  p.y = (p1.y + p2.y) / 2;
  return p;
}
var ZoomHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function ZoomHandler(gestures) {
    this.gestures = gestures;
    this.pswp = this.gestures.pswp;
    /** @type {Point} */
    this._startPan = {};

    /** @type {Point} */
    this._startZoomPoint = {};
    /** @type {Point} */
    this._zoomPoint = {};
  }
  var _proto6 = ZoomHandler.prototype;
  _proto6.start = function start() {
    this._startZoomLevel = this.pswp.currSlide.currZoomLevel;
    equalizePoints(this._startPan, this.pswp.currSlide.pan);
    this.pswp.animations.stopAllPan();
    this._wasOverFitZoomLevel = false;
  };
  _proto6.change = function change() {
    var _this$gestures4 = this.gestures,
      p1 = _this$gestures4.p1,
      startP1 = _this$gestures4.startP1,
      p2 = _this$gestures4.p2,
      startP2 = _this$gestures4.startP2,
      pswp = _this$gestures4.pswp;
    var currSlide = pswp.currSlide;
    var minZoomLevel = currSlide.zoomLevels.min;
    var maxZoomLevel = currSlide.zoomLevels.max;
    if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
      return;
    }
    getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
    getZoomPointsCenter(this._zoomPoint, p1, p2);
    var currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;

    // slightly over the zoom.fit
    if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
      this._wasOverFitZoomLevel = true;
    }
    if (currZoomLevel < minZoomLevel) {
      if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
        // fade out background if zooming out
        var bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
        if (!pswp.dispatch('pinchClose', {
          bgOpacity: bgOpacity
        }).defaultPrevented) {
          pswp.applyBgOpacity(bgOpacity);
        }
      } else {
        // Apply the friction if zoom level is below the min
        currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
      }
    } else if (currZoomLevel > maxZoomLevel) {
      // Apply the friction if zoom level is above the max
      currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
    }
    currSlide.pan.x = this._calculatePanForZoomLevel('x', currZoomLevel);
    currSlide.pan.y = this._calculatePanForZoomLevel('y', currZoomLevel);
    currSlide.setZoomLevel(currZoomLevel);
    currSlide.applyCurrentZoomPan();
  };
  _proto6.end = function end() {
    var pswp = this.pswp;
    var currSlide = pswp.currSlide;
    if (currSlide.currZoomLevel < currSlide.zoomLevels.initial && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
      pswp.close();
    } else {
      this.correctZoomPan();
    }
  }

  /**
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} currZoomLevel
   */;
  _proto6._calculatePanForZoomLevel = function _calculatePanForZoomLevel(axis, currZoomLevel) {
    var zoomFactor = currZoomLevel / this._startZoomLevel;
    return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
  }

  /**
   * Correct currZoomLevel and pan if they are
   * beyond minimum or maximum values.
   * With animation.
   *
   * @param {boolean=} ignoreGesture
   * Wether gesture coordinates should be ignored when calculating destination pan position.
   */;
  _proto6.correctZoomPan = function correctZoomPan(ignoreGesture) {
    var pswp = this.pswp;
    var currSlide = pswp.currSlide;
    if (!currSlide.isZoomable()) {
      return;
    }
    if (this._zoomPoint.x === undefined) {
      ignoreGesture = true;
    }
    var prevZoomLevel = currSlide.currZoomLevel;

    /** @type {number} */
    var destinationZoomLevel;
    var currZoomLevelNeedsChange = true;
    if (prevZoomLevel < currSlide.zoomLevels.initial) {
      destinationZoomLevel = currSlide.zoomLevels.initial;
      // zoom to min
    } else if (prevZoomLevel > currSlide.zoomLevels.max) {
      destinationZoomLevel = currSlide.zoomLevels.max;
      // zoom to max
    } else {
      currZoomLevelNeedsChange = false;
      destinationZoomLevel = prevZoomLevel;
    }
    var initialBgOpacity = pswp.bgOpacity;
    var restoreBgOpacity = pswp.bgOpacity < 1;
    var initialPan = equalizePoints({}, currSlide.pan);
    var destinationPan = equalizePoints({}, initialPan);
    if (ignoreGesture) {
      this._zoomPoint.x = 0;
      this._zoomPoint.y = 0;
      this._startZoomPoint.x = 0;
      this._startZoomPoint.y = 0;
      this._startZoomLevel = prevZoomLevel;
      equalizePoints(this._startPan, initialPan);
    }
    if (currZoomLevelNeedsChange) {
      destinationPan = {
        x: this._calculatePanForZoomLevel('x', destinationZoomLevel),
        y: this._calculatePanForZoomLevel('y', destinationZoomLevel)
      };
    }

    // set zoom level, so pan bounds are updated according to it
    currSlide.setZoomLevel(destinationZoomLevel);
    destinationPan = {
      x: currSlide.bounds.correctPan('x', destinationPan.x),
      y: currSlide.bounds.correctPan('y', destinationPan.y)
    };

    // return zoom level and its bounds to initial
    currSlide.setZoomLevel(prevZoomLevel);
    var panNeedsChange = true;
    if (pointsEqual(destinationPan, initialPan)) {
      panNeedsChange = false;
    }
    if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
      // update resolution after gesture
      currSlide._setResolution(destinationZoomLevel);
      currSlide.applyCurrentZoomPan();

      // nothing to animate
      return;
    }
    pswp.animations.stopAllPan();
    pswp.animations.startSpring({
      isPan: true,
      start: 0,
      end: 1000,
      velocity: 0,
      dampingRatio: 1,
      naturalFrequency: 40,
      onUpdate: function onUpdate(now) {
        now /= 1000; // 0 - start, 1 - end

        if (panNeedsChange || currZoomLevelNeedsChange) {
          if (panNeedsChange) {
            currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
            currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
          }
          if (currZoomLevelNeedsChange) {
            var newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now;
            currSlide.setZoomLevel(newZoomLevel);
          }
          currSlide.applyCurrentZoomPan();
        }

        // Restore background opacity
        if (restoreBgOpacity && pswp.bgOpacity < 1) {
          // We clamp opacity to keep it between 0 and 1.
          // As progress ratio can be larger than 1 due to overshoot,
          // and we do not want to bounce opacity.
          pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
        }
      },
      onComplete: function onComplete() {
        // update resolution after transition ends
        currSlide._setResolution(destinationZoomLevel);
        currSlide.applyCurrentZoomPan();
      }
    });
  };
  return ZoomHandler;
}();
/**
 * @template T
 * @template P
 * @typedef {import('../types.js').AddPostfix<T, P>} AddPostfix<T, P>
 */
/** @typedef {import('./gestures.js').default} Gestures */
/** @typedef {'imageClick' | 'bgClick' | 'tap' | 'doubleTap'} Actions */
/** @typedef {{ x?: number; y?: number }} Point */
/**
 * Whether the tap was performed on the main slide
 * (rather than controls or caption).
 *
 * @param {PointerEvent} event
 */
function didTapOnMainContent(event) {
  return !! /** @type {HTMLElement} */event.target.closest('.pswp__container');
}

/**
 * Tap, double-tap handler.
 */
var TapHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function TapHandler(gestures) {
    this.gestures = gestures;
  }

  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  var _proto7 = TapHandler.prototype;
  _proto7.click = function click(point, originalEvent) {
    var targetClassList = /** @type {HTMLElement} */originalEvent.target.classList;
    var isImageClick = targetClassList.contains('pswp__img');
    var isBackgroundClick = targetClassList.contains('pswp__item') || targetClassList.contains('pswp__zoom-wrap');
    if (isImageClick) {
      this._doClickOrTapAction('imageClick', point, originalEvent);
    } else if (isBackgroundClick) {
      this._doClickOrTapAction('bgClick', point, originalEvent);
    }
  }

  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */;
  _proto7.tap = function tap(point, originalEvent) {
    if (didTapOnMainContent(originalEvent)) {
      this._doClickOrTapAction('tap', point, originalEvent);
    }
  }

  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */;
  _proto7.doubleTap = function doubleTap(point, originalEvent) {
    if (didTapOnMainContent(originalEvent)) {
      this._doClickOrTapAction('doubleTap', point, originalEvent);
    }
  }

  /**
   * @param {Actions} actionName
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */;
  _proto7._doClickOrTapAction = function _doClickOrTapAction(actionName, point, originalEvent) {
    var pswp = this.gestures.pswp;
    var currSlide = pswp.currSlide;
    var actionFullName = /** @type {AddPostfix<Actions, 'Action'>} */actionName + 'Action';
    var optionValue = pswp.options[actionFullName];
    if (pswp.dispatch(actionFullName, {
      point: point,
      originalEvent: originalEvent
    }).defaultPrevented) {
      return;
    }
    if (typeof optionValue === 'function') {
      optionValue.call(pswp, point, originalEvent);
      return;
    }
    switch (optionValue) {
      case 'close':
      case 'next':
        pswp[optionValue]();
        break;
      case 'zoom':
        currSlide.toggleZoom(point);
        break;
      case 'zoom-or-close':
        // by default click zooms current image,
        // if it can not be zoomed - gallery will be closed
        if (currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
          currSlide.toggleZoom(point);
        } else if (pswp.options.clickToCloseNonZoomable) {
          pswp.close();
        }
        break;
      case 'toggle-controls':
        this.gestures.pswp.element.classList.toggle('pswp--ui-visible');
        // if (_controlsVisible) {
        //   _ui.hideControls();
        // } else {
        //   _ui.showControls();
        // }
        break;
    }
  };
  return TapHandler;
}();
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').Point} Point */
// How far should user should drag
// until we can determine that the gesture is swipe and its direction
var AXIS_SWIPE_HYSTERISIS = 10;
//const PAN_END_FRICTION = 0.35;

var DOUBLE_TAP_DELAY = 300; // ms
var MIN_TAP_DISTANCE = 25; // px

/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */
var Gestures = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Gestures(pswp) {
    var _this4 = this;
    this.pswp = pswp;

    /** @type {'x' | 'y'} */
    this.dragAxis = undefined;

    // point objects are defined once and reused
    // PhotoSwipe keeps track only of two pointers, others are ignored
    /** @type {Point} */
    this.p1 = {}; // the first pressed pointer
    /** @type {Point} */
    this.p2 = {}; // the second pressed pointer
    /** @type {Point} */
    this.prevP1 = {};
    /** @type {Point} */
    this.prevP2 = {};
    /** @type {Point} */
    this.startP1 = {};
    /** @type {Point} */
    this.startP2 = {};
    /** @type {Point} */
    this.velocity = {};

    /** @type {Point} */
    this._lastStartP1 = {};
    /** @type {Point} */
    this._intervalP1 = {};
    this._numActivePoints = 0;
    /** @type {Point[]} */
    this._ongoingPointers = [];
    this._touchEventEnabled = 'ontouchstart' in window;
    this._pointerEventEnabled = !!window.PointerEvent;
    this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
    if (!this.supportsTouch) {
      // disable pan to next slide for non-touch devices
      pswp.options.allowPanToNext = false;
    }
    this.drag = new DragHandler(this);
    this.zoomLevels = new ZoomHandler(this);
    this.tapHandler = new TapHandler(this);
    pswp.on('bindEvents', function () {
      pswp.events.add(pswp.scrollWrap, 'click', function (e) {
        return _this4._onClick(e);
      });
      if (_this4._pointerEventEnabled) {
        _this4._bindEvents('pointer', 'down', 'up', 'cancel');
      } else if (_this4._touchEventEnabled) {
        _this4._bindEvents('touch', 'start', 'end', 'cancel');

        // In previous versions we also bound mouse event here,
        // in case device supports both touch and mouse events,
        // but newer versions of browsers now support PointerEvent.

        // on iOS10 if you bind touchmove/end after touchstart,
        // and you don't preventDefault touchstart (which PhotoSwipe does),
        // preventDefault will have no effect on touchmove and touchend.
        // Unless you bind it previously.
        pswp.scrollWrap.ontouchmove = function () {}; // eslint-disable-line
        pswp.scrollWrap.ontouchend = function () {}; // eslint-disable-line
      } else {
        _this4._bindEvents('mouse', 'down', 'up');
      }
    });
  }

  /**
   *
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */
  var _proto8 = Gestures.prototype;
  _proto8._bindEvents = function _bindEvents(pref, down, up, cancel) {
    var pswp = this.pswp;
    var events = pswp.events;
    var cancelEvent = cancel ? pref + cancel : '';
    events.add(pswp.scrollWrap, pref + down, this.onPointerDown.bind(this));
    events.add(window, pref + 'move', this.onPointerMove.bind(this));
    events.add(window, pref + up, this.onPointerUp.bind(this));
    if (cancelEvent) {
      events.add(pswp.scrollWrap, cancelEvent, this.onPointerUp.bind(this));
    }
  }

  /**
   * @param {PointerEvent} e
   */;
  _proto8.onPointerDown = function onPointerDown(e) {
    // We do not call preventDefault for touch events
    // to allow browser to show native dialog on longpress
    // (the one that allows to save image or open it in new tab).
    //
    // Desktop Safari allows to drag images when preventDefault isn't called on mousedown,
    // even though preventDefault IS called on mousemove. That's why we preventDefault mousedown.
    var isMousePointer;
    if (e.type === 'mousedown' || e.pointerType === 'mouse') {
      isMousePointer = true;
    }

    // Allow dragging only via left mouse button.
    // http://www.quirksmode.org/js/events_properties.html
    // https://developer.mozilla.org/en-US/docs/Web/API/event.button
    if (isMousePointer && e.button > 0) {
      return;
    }
    var pswp = this.pswp;

    // if PhotoSwipe is opening or closing
    if (!pswp.opener.isOpen) {
      e.preventDefault();
      return;
    }
    if (pswp.dispatch('pointerDown', {
      originalEvent: e
    }).defaultPrevented) {
      return;
    }
    if (isMousePointer) {
      pswp.mouseDetected();

      // preventDefault mouse event to prevent
      // browser image drag feature
      this._preventPointerEventBehaviour(e);
    }
    pswp.animations.stopAll();
    this._updatePoints(e, 'down');
    this.pointerDown = true;
    if (this._numActivePoints === 1) {
      this.dragAxis = null;
      // we need to store initial point to determine the main axis,
      // drag is activated only after the axis is determined
      equalizePoints(this.startP1, this.p1);
    }
    if (this._numActivePoints > 1) {
      // Tap or double tap should not trigger if more than one pointer
      this._clearTapTimer();
      this.isMultitouch = true;
    } else {
      this.isMultitouch = false;
    }
  }

  /**
   * @param {PointerEvent} e
   */;
  _proto8.onPointerMove = function onPointerMove(e) {
    e.preventDefault(); // always preventDefault move event

    if (!this._numActivePoints) {
      return;
    }
    this._updatePoints(e, 'move');
    if (this.pswp.dispatch('pointerMove', {
      originalEvent: e
    }).defaultPrevented) {
      return;
    }
    if (this._numActivePoints === 1 && !this.isDragging) {
      if (!this.dragAxis) {
        this._calculateDragDirection();
      }

      // Drag axis was detected, emit drag.start
      if (this.dragAxis && !this.isDragging) {
        if (this.isZooming) {
          this.isZooming = false;
          this.zoomLevels.end();
        }
        this.isDragging = true;
        this._clearTapTimer(); // Tap can not trigger after drag

        // Adjust starting point
        this._updateStartPoints();
        this._intervalTime = Date.now();
        //this._startTime = this._intervalTime;
        this._velocityCalculated = false;
        equalizePoints(this._intervalP1, this.p1);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.drag.start();
        this._rafStopLoop();
        this._rafRenderLoop();
      }
    } else if (this._numActivePoints > 1 && !this.isZooming) {
      this._finishDrag();
      this.isZooming = true;

      // Adjust starting points
      this._updateStartPoints();
      this.zoomLevels.start();
      this._rafStopLoop();
      this._rafRenderLoop();
    }
  }

  /**
   * @private
   */;
  _proto8._finishDrag = function _finishDrag() {
    if (this.isDragging) {
      this.isDragging = false;

      // Try to calculate velocity,
      // if it wasn't calculated yet in drag.change
      if (!this._velocityCalculated) {
        this._updateVelocity(true);
      }
      this.drag.end();
      this.dragAxis = null;
    }
  }

  /**
   * @param {PointerEvent} e
   */;
  _proto8.onPointerUp = function onPointerUp(e) {
    if (!this._numActivePoints) {
      return;
    }
    this._updatePoints(e, 'up');
    if (this.pswp.dispatch('pointerUp', {
      originalEvent: e
    }).defaultPrevented) {
      return;
    }
    if (this._numActivePoints === 0) {
      this.pointerDown = false;
      this._rafStopLoop();
      if (this.isDragging) {
        this._finishDrag();
      } else if (!this.isZooming && !this.isMultitouch) {
        //this.zoomLevels.correctZoomPan();
        this._finishTap(e);
      }
    }
    if (this._numActivePoints < 2 && this.isZooming) {
      this.isZooming = false;
      this.zoomLevels.end();
      if (this._numActivePoints === 1) {
        // Since we have 1 point left, we need to reinitiate drag
        this.dragAxis = null;
        this._updateStartPoints();
      }
    }
  }

  /**
   * @private
   */;
  _proto8._rafRenderLoop = function _rafRenderLoop() {
    if (this.isDragging || this.isZooming) {
      this._updateVelocity();
      if (this.isDragging) {
        // make sure that pointer moved since the last update
        if (!pointsEqual(this.p1, this.prevP1)) {
          this.drag.change();
        }
      } else /* if (this.isZooming) */{
          if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
            this.zoomLevels.change();
          }
        }
      this._updatePrevPoints();
      this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
    }
  }

  /**
   * Update velocity at 50ms interval
   *
   * @param {boolean=} force
   */;
  _proto8._updateVelocity = function _updateVelocity(force) {
    var time = Date.now();
    var duration = time - this._intervalTime;
    if (duration < 50 && !force) {
      return;
    }
    this.velocity.x = this._getVelocity('x', duration);
    this.velocity.y = this._getVelocity('y', duration);
    this._intervalTime = time;
    equalizePoints(this._intervalP1, this.p1);
    this._velocityCalculated = true;
  }

  /**
   * @private
   * @param {PointerEvent} e
   */;
  _proto8._finishTap = function _finishTap(e) {
    var _this5 = this;
    var mainScroll = this.pswp.mainScroll;

    // Do not trigger tap events if main scroll is shifted
    if (mainScroll.isShifted()) {
      // restore main scroll position
      // (usually happens if stopped in the middle of animation)
      mainScroll.moveIndexBy(0, true);
      return;
    }

    // Do not trigger tap for touchcancel or pointercancel
    if (e.type.indexOf('cancel') > 0) {
      return;
    }

    // Trigger click instead of tap for mouse events
    if (e.type === 'mouseup' || e.pointerType === 'mouse') {
      this.tapHandler.click(this.startP1, e);
      return;
    }

    // Disable delay if there is no doubleTapAction
    var tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;

    // If tapTimer is defined - we tapped recently,
    // check if the current tap is close to the previous one,
    // if yes - trigger double tap
    if (this._tapTimer) {
      this._clearTapTimer();
      // Check if two taps were more or less on the same place
      if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
        this.tapHandler.doubleTap(this.startP1, e);
      }
    } else {
      equalizePoints(this._lastStartP1, this.startP1);
      this._tapTimer = setTimeout(function () {
        _this5.tapHandler.tap(_this5.startP1, e);
        _this5._clearTapTimer();
      }, tapDelay);
    }
  }

  /**
   * @private
   */;
  _proto8._clearTapTimer = function _clearTapTimer() {
    if (this._tapTimer) {
      clearTimeout(this._tapTimer);
      this._tapTimer = null;
    }
  }

  /**
   * Get velocity for axis
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} duration
   */;
  _proto8._getVelocity = function _getVelocity(axis, duration) {
    // displacement is like distance, but can be negative.
    var displacement = this.p1[axis] - this._intervalP1[axis];
    if (Math.abs(displacement) > 1 && duration > 5) {
      return displacement / duration;
    }
    return 0;
  }

  /**
   * @private
   */;
  _proto8._rafStopLoop = function _rafStopLoop() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
  }

  /**
   * @private
   * @param {PointerEvent} e
   */;
  _proto8._preventPointerEventBehaviour = function _preventPointerEventBehaviour(e) {
    // TODO find a way to disable e.preventDefault on some elements
    //      via event or some class or something
    e.preventDefault();
    return true;
  }

  /**
   * Parses and normalizes points from the touch, mouse or pointer event.
   * Updates p1 and p2.
   *
   * @private
   * @param {PointerEvent | TouchEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */;
  _proto8._updatePoints = function _updatePoints(e, pointerType) {
    if (this._pointerEventEnabled) {
      var pointerEvent = /** @type {PointerEvent} */e;
      // Try to find the current pointer in ongoing pointers by its ID
      var pointerIndex = this._ongoingPointers.findIndex(function (ongoingPoiner) {
        return ongoingPoiner.id === pointerEvent.pointerId;
      });
      if (pointerType === 'up' && pointerIndex > -1) {
        // release the pointer - remove it from ongoing
        this._ongoingPointers.splice(pointerIndex, 1);
      } else if (pointerType === 'down' && pointerIndex === -1) {
        // add new pointer
        this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {}));
      } else if (pointerIndex > -1) {
        // update existing pointer
        this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
      }
      this._numActivePoints = this._ongoingPointers.length;

      // update points that PhotoSwipe uses
      // to calculate position and scale
      if (this._numActivePoints > 0) {
        equalizePoints(this.p1, this._ongoingPointers[0]);
      }
      if (this._numActivePoints > 1) {
        equalizePoints(this.p2, this._ongoingPointers[1]);
      }
    } else {
      var touchEvent = /** @type {TouchEvent} */e;
      this._numActivePoints = 0;
      if (touchEvent.type.indexOf('touch') > -1) {
        // Touch Event
        // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
        if (touchEvent.touches && touchEvent.touches.length > 0) {
          this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
          this._numActivePoints++;
          if (touchEvent.touches.length > 1) {
            this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
            this._numActivePoints++;
          }
        }
      } else {
        // Mouse Event
        this._convertEventPosToPoint( /** @type {PointerEvent} */e, this.p1);
        if (pointerType === 'up') {
          // clear all points on mouseup
          this._numActivePoints = 0;
        } else {
          this._numActivePoints++;
        }
      }
    }
  }

  // update points that were used during previous rAF tick
  ;
  _proto8._updatePrevPoints = function _updatePrevPoints() {
    equalizePoints(this.prevP1, this.p1);
    equalizePoints(this.prevP2, this.p2);
  }

  // update points at the start of gesture
  ;
  _proto8._updateStartPoints = function _updateStartPoints() {
    equalizePoints(this.startP1, this.p1);
    equalizePoints(this.startP2, this.p2);
    this._updatePrevPoints();
  };
  _proto8._calculateDragDirection = function _calculateDragDirection() {
    if (this.pswp.mainScroll.isShifted()) {
      // if main scroll position is shifted – direction is always horizontal
      this.dragAxis = 'x';
    } else {
      // calculate delta of the last touchmove tick
      var diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (diff !== 0) {
        // check if pointer was shifted horizontally or vertically
        var axisToCheck = diff > 0 ? 'x' : 'y';
        if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
          this.dragAxis = axisToCheck;
        }
      }
    }
  }

  /**
   * Converts touch, pointer or mouse event
   * to PhotoSwipe point.
   *
   * @private
   * @param {Touch | PointerEvent} e
   * @param {Point} p
   */;
  _proto8._convertEventPosToPoint = function _convertEventPosToPoint(e, p) {
    p.x = e.pageX - this.pswp.offset.x;
    p.y = e.pageY - this.pswp.offset.y;
    if ('pointerId' in e) {
      p.id = e.pointerId;
    } else if (e.identifier !== undefined) {
      p.id = e.identifier;
    }
    return p;
  }

  /**
   * @private
   * @param {PointerEvent} e
   */;
  _proto8._onClick = function _onClick(e) {
    // Do not allow click event to pass through after drag
    if (this.pswp.mainScroll.isShifted()) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return Gestures;
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/slide.js').default} Slide */
/** @typedef {{ el: HTMLDivElement; slide?: Slide }} ItemHolder */
var MAIN_SCROLL_END_FRICTION = 0.35;

// const MIN_SWIPE_TRANSITION_DURATION = 250;
// const MAX_SWIPE_TRABSITION_DURATION = 500;
// const DEFAULT_SWIPE_TRANSITION_DURATION = 333;

/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */
var MainScroll = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function MainScroll(pswp) {
    this.pswp = pswp;
    this.x = 0;

    /** @type {number} */
    this.slideWidth = undefined;

    /** @type {ItemHolder[]} */
    this.itemHolders = undefined;
    this.resetPosition();
  }

  /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean=} resizeSlides Whether slides content should resized
   */
  var _proto9 = MainScroll.prototype;
  _proto9.resize = function resize(resizeSlides) {
    var _this6 = this;
    var pswp = this.pswp;
    var newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
    // Mobile browsers might trigger a resize event during a gesture.
    // (due to toolbar appearing or hiding).
    // Avoid re-adjusting main scroll position if width wasn't changed
    var slideWidthChanged = newSlideWidth !== this.slideWidth;
    if (slideWidthChanged) {
      this.slideWidth = newSlideWidth;
      this.moveTo(this.getCurrSlideX());
    }
    this.itemHolders.forEach(function (itemHolder, index) {
      if (slideWidthChanged) {
        setTransform(itemHolder.el, (index + _this6._containerShiftIndex) * _this6.slideWidth);
      }
      if (resizeSlides && itemHolder.slide) {
        itemHolder.slide.resize();
      }
    });
  }

  /**
   * Reset X position of the main scroller to zero
   */;
  _proto9.resetPosition = function resetPosition() {
    // Position on the main scroller (offset)
    // it is independent from slide index
    this._currPositionIndex = 0;
    this._prevPositionIndex = 0;

    // This will force recalculation of size on next resize()
    this.slideWidth = 0;

    // _containerShiftIndex*viewportSize will give you amount of transform of the current slide
    this._containerShiftIndex = -1;
  }

  /**
   * Create and append array of three items
   * that hold data about slides in DOM
   */;
  _proto9.appendHolders = function appendHolders() {
    this.itemHolders = [];

    // append our three slide holders -
    // previous, current, and next
    for (var i = 0; i < 3; i++) {
      var el = createElement('pswp__item', false, this.pswp.container);

      // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
      el.style.display = i === 1 ? 'block' : 'none';
      this.itemHolders.push({
        el: el
        //index: -1
      });
    }
  }

  /**
   * Whether the main scroll can be horizontally swiped to the next or previous slide.
   */;
  _proto9.canBeSwiped = function canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }

  /**
   * Move main scroll by X amount of slides.
   * For example:
   *   `-1` will move to the previous slide,
   *    `0` will reset the scroll position of the current slide,
   *    `3` will move three slides forward
   *
   * If loop option is enabled - index will be automatically looped too,
   * (for example `-1` will move to the last slide of the gallery).
   *
   * @param {number} diff
   * @param {boolean=} animate
   * @param {number=} velocityX
   * @returns {boolean} whether index was changed or not
   */;
  _proto9.moveIndexBy = function moveIndexBy(diff, animate, velocityX) {
    var _this7 = this;
    var pswp = this.pswp;
    var newIndex = pswp.potentialIndex + diff;
    var numSlides = pswp.getNumItems();
    if (pswp.canLoop()) {
      newIndex = pswp.getLoopedIndex(newIndex);
      var distance = (diff + numSlides) % numSlides;
      if (distance <= numSlides / 2) {
        // go forward
        diff = distance;
      } else {
        // go backwards
        diff = distance - numSlides;
      }
    } else {
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= numSlides) {
        newIndex = numSlides - 1;
      }
      diff = newIndex - pswp.potentialIndex;
    }
    pswp.potentialIndex = newIndex;
    this._currPositionIndex -= diff;
    pswp.animations.stopMainScroll();
    var destinationX = this.getCurrSlideX();
    if (!animate) {
      this.moveTo(destinationX);
      this.updateCurrItem();
    } else {
      pswp.animations.startSpring({
        isMainScroll: true,
        start: this.x,
        end: destinationX,
        velocity: velocityX || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        //0.7,
        onUpdate: function onUpdate(x) {
          _this7.moveTo(x);
        },
        onComplete: function onComplete() {
          _this7.updateCurrItem();
          pswp.appendHeavy();
        }
      });
      var currDiff = pswp.potentialIndex - pswp.currIndex;
      if (pswp.canLoop()) {
        var currDistance = (currDiff + numSlides) % numSlides;
        if (currDistance <= numSlides / 2) {
          // go forward
          currDiff = currDistance;
        } else {
          // go backwards
          currDiff = currDistance - numSlides;
        }
      }

      // Force-append new slides during transition
      // if difference between slides is more than 1
      if (Math.abs(currDiff) > 1) {
        this.updateCurrItem();
      }
    }
    if (diff) {
      return true;
    }
  }

  /**
   * X position of the main scroll for the current slide
   * (ignores position during dragging)
   */;
  _proto9.getCurrSlideX = function getCurrSlideX() {
    return this.slideWidth * this._currPositionIndex;
  }

  /**
   * Whether scroll position is shifted.
   * For example, it will return true if the scroll is being dragged or animated.
   */;
  _proto9.isShifted = function isShifted() {
    return this.x !== this.getCurrSlideX();
  }

  /**
   * Update slides X positions and set their content
   */;
  _proto9.updateCurrItem = function updateCurrItem() {
    var pswp = this.pswp;
    var positionDifference = this._prevPositionIndex - this._currPositionIndex;
    if (!positionDifference) {
      return;
    }
    this._prevPositionIndex = this._currPositionIndex;
    pswp.currIndex = pswp.potentialIndex;
    var diffAbs = Math.abs(positionDifference);
    var tempHolder;
    if (diffAbs >= 3) {
      this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
      diffAbs = 3;
    }
    for (var i = 0; i < diffAbs; i++) {
      if (positionDifference > 0) {
        tempHolder = this.itemHolders.shift();
        this.itemHolders[2] = tempHolder; // move first to last

        this._containerShiftIndex++;
        setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
        pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i + 2);
      } else {
        tempHolder = this.itemHolders.pop();
        this.itemHolders.unshift(tempHolder); // move last to first

        this._containerShiftIndex--;
        setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
        pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i - 2);
      }
    }

    // Reset transfrom every 50ish navigations in one direction.
    //
    // Otherwise transform will keep growing indefinitely,
    // which might cause issues as browsers have a maximum transform limit.
    // I wasn't able to reach it, but just to be safe.
    // This should not cause noticable lag.
    if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
      this.resetPosition();
      this.resize();
    }

    // Pan transition might be running (and consntantly updating pan position)
    pswp.animations.stopAllPan();
    this.itemHolders.forEach(function (itemHolder, i) {
      if (itemHolder.slide) {
        // Slide in the 2nd holder is always active
        itemHolder.slide.setIsActive(i === 1);
      }
    });
    pswp.currSlide = this.itemHolders[1].slide;
    pswp.contentLoader.updateLazy(positionDifference);
    pswp.currSlide.applyCurrentZoomPan();
    pswp.dispatch('change');
  }

  /**
   * Move the X position of the main scroll container
   *
   * @param {number} x
   * @param {boolean=} dragging
   */;
  _proto9.moveTo = function moveTo(x, dragging) {
    /** @type {number} */
    var newSlideIndexOffset;
    /** @type {number} */
    var delta;
    if (!this.pswp.canLoop() && dragging) {
      // Apply friction
      newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
      newSlideIndexOffset += this.pswp.currIndex;
      delta = Math.round(x - this.x);
      if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
        x = this.x + delta * MAIN_SCROLL_END_FRICTION;
      }
    }
    this.x = x;
    setTransform(this.pswp.container, x);
    this.pswp.dispatch('moveMainScroll', {
      x: x,
      dragging: dragging
    });
  };
  return MainScroll;
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('./types.js').Methods<T>} Methods<T>
 */
/**
 * - Manages keyboard shortcuts.
 * - Heps trap focus within photoswipe.
 */
var Keyboard = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Keyboard(pswp) {
    var _this8 = this;
    this.pswp = pswp;
    pswp.on('bindEvents', function () {
      // Dialog was likely opened by keyboard if initial point is not defined
      if (!pswp.options.initialPointerPos) {
        // focus causes layout,
        // which causes lag during the animation,
        // that's why we delay it until the opener transition ends
        _this8._focusRoot();
      }
      pswp.events.add(document, 'focusin', _this8._onFocusIn.bind(_this8));
      pswp.events.add(document, 'keydown', _this8._onKeyDown.bind(_this8));
    });
    var lastActiveElement = /** @type {HTMLElement} */document.activeElement;
    pswp.on('destroy', function () {
      if (pswp.options.returnFocus && lastActiveElement && _this8._wasFocused) {
        lastActiveElement.focus();
      }
    });
  }
  var _proto10 = Keyboard.prototype;
  _proto10._focusRoot = function _focusRoot() {
    if (!this._wasFocused) {
      this.pswp.element.focus();
      this._wasFocused = true;
    }
  }

  /**
   * @param {KeyboardEvent} e
   */;
  _proto10._onKeyDown = function _onKeyDown(e) {
    var pswp = this.pswp;
    if (pswp.dispatch('keydown', {
      originalEvent: e
    }).defaultPrevented) {
      return;
    }
    if (specialKeyUsed(e)) {
      // don't do anything if special key pressed
      // to prevent from overriding default browser actions
      // for example, in Chrome on Mac cmd+arrow-left returns to previous page
      return;
    }

    /** @type {Methods<PhotoSwipe>} */
    var keydownAction;
    /** @type {'x' | 'y'} */
    var axis;
    var isForward;
    switch (e.keyCode) {
      case 27:
        // esc
        if (pswp.options.escKey) {
          keydownAction = 'close';
        }
        break;
      case 90:
        // z key
        keydownAction = 'toggleZoom';
        break;
      case 37:
        // left
        axis = 'x';
        break;
      case 38:
        // top
        axis = 'y';
        break;
      case 39:
        // right
        axis = 'x';
        isForward = true;
        break;
      case 40:
        // bottom
        isForward = true;
        axis = 'y';
        break;
      case 9:
        // tab
        this._focusRoot();
        break;
    }

    // if left/right/top/bottom key
    if (axis) {
      // prevent page scroll
      e.preventDefault();
      var currSlide = pswp.currSlide;
      if (pswp.options.arrowKeys && axis === 'x' && pswp.getNumItems() > 1) {
        keydownAction = isForward ? 'next' : 'prev';
      } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
        // up/down arrow keys pan the image vertically
        // left/right arrow keys pan horizontally.
        // Unless there is only one image,
        // or arrowKeys option is disabled
        currSlide.pan[axis] += isForward ? -80 : 80;
        currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
      }
    }
    if (keydownAction) {
      e.preventDefault();
      pswp[keydownAction]();
    }
  }

  /**
   * Trap focus inside photoswipe
   *
   * @param {FocusEvent} e
   */;
  _proto10._onFocusIn = function _onFocusIn(e) {
    var template = this.pswp.template;
    if (document !== e.target && template !== e.target && !template.contains( /** @type {Node} */e.target)) {
      // focus root element
      template.focus();
    }
  };
  return Keyboard;
}();
var DEFAULT_EASING = 'cubic-bezier(.4,0,.22,1)';

/** @typedef {import('./animations.js').AnimationProps} AnimationProps */

/**
 * Runs CSS transition.
 */
var CSSAnimation = /*#__PURE__*/function () {
  /**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {AnimationProps} props
   */
  function CSSAnimation(props) {
    var _this9 = this;
    this.props = props;
    var target = props.target,
      onComplete = props.onComplete,
      transform = props.transform,
      onFinish = props.onFinish;
    var duration = props.duration,
      easing = props.easing;

    /** @type {() => void} */
    this.onFinish = onFinish;

    // support only transform and opacity
    var prop = transform ? 'transform' : 'opacity';
    var propValue = props[prop];

    /** @private */
    this._target = target;
    /** @private */
    this._onComplete = onComplete;
    duration = duration || 333;
    easing = easing || DEFAULT_EASING;

    /** @private */
    this._onTransitionEnd = this._onTransitionEnd.bind(this);

    // Using timeout hack to make sure that animation
    // starts even if the animated property was changed recently,
    // otherwise transitionend might not fire or transiton won't start.
    // https://drafts.csswg.org/css-transitions/#starting
    //
    // ¯\_(ツ)_/¯
    /** @private */
    this._helperTimeout = setTimeout(function () {
      setTransitionStyle(target, prop, duration, easing);
      _this9._helperTimeout = setTimeout(function () {
        target.addEventListener('transitionend', _this9._onTransitionEnd, false);
        target.addEventListener('transitioncancel', _this9._onTransitionEnd, false);

        // Safari occasionally does not emit transitionend event
        // if element propery was modified during the transition,
        // which may be caused by resize or third party component,
        // using timeout as a safety fallback
        _this9._helperTimeout = setTimeout(function () {
          _this9._finalizeAnimation();
        }, duration + 500);
        target.style[prop] = propValue;
      }, 30); // Do not reduce this number
    }, 0);
  }

  /**
   * @private
   * @param {TransitionEvent} e
   */
  var _proto11 = CSSAnimation.prototype;
  _proto11._onTransitionEnd = function _onTransitionEnd(e) {
    if (e.target === this._target) {
      this._finalizeAnimation();
    }
  }

  /**
   * @private
   */;
  _proto11._finalizeAnimation = function _finalizeAnimation() {
    if (!this._finished) {
      this._finished = true;
      this.onFinish();
      if (this._onComplete) {
        this._onComplete();
      }
    }
  }

  // Destroy is called automatically onFinish
  ;
  _proto11.destroy = function destroy() {
    if (this._helperTimeout) {
      clearTimeout(this._helperTimeout);
    }
    removeTransitionStyle(this._target);
    this._target.removeEventListener('transitionend', this._onTransitionEnd, false);
    this._target.removeEventListener('transitioncancel', this._onTransitionEnd, false);
    if (!this._finished) {
      this._finalizeAnimation();
    }
  };
  return CSSAnimation;
}();
var DEFAULT_NATURAL_FREQUENCY = 12;
var DEFAULT_DAMPING_RATIO = 0.75;

/**
 * Spring easing helper
 */
var SpringEaser = /*#__PURE__*/function () {
  /**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} dampingRatio
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} naturalFrequency
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */
  function SpringEaser(initialVelocity, dampingRatio, naturalFrequency) {
    this.velocity = initialVelocity * 1000; // convert to "pixels per second"

    // https://en.wikipedia.org/wiki/Damping_ratio
    this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;

    // https://en.wikipedia.org/wiki/Natural_frequency
    this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
    if (this._dampingRatio < 1) {
      this._dampedFrequency = this._naturalFrequency * Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
    }
  }

  /**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */
  var _proto12 = SpringEaser.prototype;
  _proto12.easeFrame = function easeFrame(deltaPosition, deltaTime) {
    // Inspired by Apple Webkit and Android spring function implementation
    // https://en.wikipedia.org/wiki/Oscillation
    // https://en.wikipedia.org/wiki/Damping_ratio
    // we ignore mass (assume that it's 1kg)

    var displacement = 0;
    var coeff;
    deltaTime /= 1000;
    var naturalDumpingPow = Math.pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
    if (this._dampingRatio === 1) {
      coeff = this.velocity + this._naturalFrequency * deltaPosition;
      displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
      this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
    } else if (this._dampingRatio < 1) {
      coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
      var dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
      var dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
      displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
      this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
    }

    // Overdamped (>1) damping ratio is not supported

    return displacement;
  };
  return SpringEaser;
}();
/** @typedef {import('./animations.js').AnimationProps} AnimationProps */
var SpringAnimation = /*#__PURE__*/function () {
  /**
   * @param {AnimationProps} props
   */
  function SpringAnimation(props) {
    var _this10 = this;
    this.props = props;
    var start = props.start,
      end = props.end,
      velocity = props.velocity,
      onUpdate = props.onUpdate,
      onComplete = props.onComplete,
      onFinish = props.onFinish,
      dampingRatio = props.dampingRatio,
      naturalFrequency = props.naturalFrequency;

    /** @type {() => void} */
    this.onFinish = onFinish;
    var easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
    var prevTime = Date.now();
    var deltaPosition = start - end;
    var animationLoop = function animationLoop() {
      if (_this10._raf) {
        deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);

        // Stop the animation if velocity is low and position is close to end
        if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
          // Finalize the animation
          onUpdate(end);
          if (onComplete) {
            onComplete();
          }
          _this10.onFinish();
        } else {
          prevTime = Date.now();
          onUpdate(deltaPosition + end);
          _this10._raf = requestAnimationFrame(animationLoop);
        }
      }
    };
    this._raf = requestAnimationFrame(animationLoop);
  }

  // Destroy is called automatically onFinish
  var _proto13 = SpringAnimation.prototype;
  _proto13.destroy = function destroy() {
    if (this._raf >= 0) {
      cancelAnimationFrame(this._raf);
    }
    this._raf = null;
  };
  return SpringAnimation;
}();
/** @typedef {SpringAnimation | CSSAnimation} Animation */
/**
 * @typedef {Object} AnimationProps
 *
 * @prop {HTMLElement=} target
 *
 * @prop {string=} name
 *
 * @prop {number=} start
 * @prop {number=} end
 * @prop {number=} duration
 * @prop {number=} velocity
 * @prop {number=} dampingRatio
 * @prop {number=} naturalFrequency
 *
 * @prop {(end: number) => void} [onUpdate]
 * @prop {() => void} [onComplete]
 * @prop {() => void} [onFinish]
 *
 * @prop {string=} transform
 * @prop {string=} opacity
 * @prop {string=} easing
 *
 * @prop {boolean=} isPan
 * @prop {boolean=} isMainScroll
 */
/**
 * Manages animations
 */
var Animations = /*#__PURE__*/function () {
  function Animations() {
    /** @type {Animation[]} */
    this.activeAnimations = [];
  }

  /**
   * @param {AnimationProps} props
   */
  var _proto14 = Animations.prototype;
  _proto14.startSpring = function startSpring(props) {
    this._start(props, true);
  }

  /**
   * @param {AnimationProps} props
   */;
  _proto14.startTransition = function startTransition(props) {
    this._start(props);
  }

  /**
   * @param {AnimationProps} props
   * @param {boolean=} isSpring
   */;
  _proto14._start = function _start(props, isSpring) {
    var _this11 = this;
    /** @type {Animation} */
    var animation;
    if (isSpring) {
      animation = new SpringAnimation(props);
    } else {
      animation = new CSSAnimation(props);
    }
    this.activeAnimations.push(animation);
    animation.onFinish = function () {
      return _this11.stop(animation);
    };
    return animation;
  }

  /**
   * @param {Animation} animation
   */;
  _proto14.stop = function stop(animation) {
    animation.destroy();
    var index = this.activeAnimations.indexOf(animation);
    if (index > -1) {
      this.activeAnimations.splice(index, 1);
    }
  };
  _proto14.stopAll = function stopAll() {
    // _stopAllAnimations
    this.activeAnimations.forEach(function (animation) {
      animation.destroy();
    });
    this.activeAnimations = [];
  }

  /**
   * Stop all pan or zoom transitions
   */;
  _proto14.stopAllPan = function stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter(function (animation) {
      if (animation.props.isPan) {
        animation.destroy();
        return false;
      }
      return true;
    });
  };
  _proto14.stopMainScroll = function stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter(function (animation) {
      if (animation.props.isMainScroll) {
        animation.destroy();
        return false;
      }
      return true;
    });
  }

  /**
   * Returns true if main scroll transition is running
   */
  // isMainScrollRunning() {
  //   return this.activeAnimations.some((animation) => {
  //     return animation.props.isMainScroll;
  //   });
  // }

  /**
   * Returns true if any pan or zoom transition is running
   */;
  _proto14.isPanRunning = function isPanRunning() {
    return this.activeAnimations.some(function (animation) {
      return animation.props.isPan;
    });
  };
  return Animations;
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */
var ScrollWheel = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function ScrollWheel(pswp) {
    this.pswp = pswp;
    pswp.events.add(pswp.element, 'wheel', this._onWheel.bind(this));
  }

  /**
   * @private
   * @param {WheelEvent} e
   */
  var _proto15 = ScrollWheel.prototype;
  _proto15._onWheel = function _onWheel(e) {
    e.preventDefault();
    var currSlide = this.pswp.currSlide;
    var deltaX = e.deltaX,
      deltaY = e.deltaY;
    if (!currSlide) {
      return;
    }
    if (this.pswp.dispatch('wheel', {
      originalEvent: e
    }).defaultPrevented) {
      return;
    }
    if (e.ctrlKey || this.pswp.options.wheelToZoom) {
      // zoom
      if (currSlide.isZoomable()) {
        var zoomFactor = -deltaY;
        if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
          zoomFactor *= 0.05;
        } else {
          zoomFactor *= e.deltaMode ? 1 : 0.002;
        }
        zoomFactor = Math.pow(2, zoomFactor);
        var destZoomLevel = currSlide.currZoomLevel * zoomFactor;
        currSlide.zoomTo(destZoomLevel, {
          x: e.clientX,
          y: e.clientY
        });
      }
    } else {
      // pan
      if (currSlide.isPannable()) {
        if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
          // 18 - average line height
          deltaX *= 18;
          deltaY *= 18;
        }
        currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
      }
    }
  };
  return ScrollWheel;
}();
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('../types.js').Methods<T>} Methods<T>
 */
/**
 * @typedef {Object} UIElementMarkupProps
 * @prop {boolean=} isCustomSVG
 * @prop {string} inner
 * @prop {string=} outlineID
 * @prop {number | string} [size]
 */
/**
 * @typedef {Object} UIElementData
 * @prop {DefaultUIElements | string} [name]
 * @prop {string=} className
 * @prop {UIElementMarkup=} html
 * @prop {boolean=} isButton
 * @prop {keyof HTMLElementTagNameMap} [tagName]
 * @prop {string=} title
 * @prop {string=} ariaLabel
 * @prop {(element: HTMLElement, pswp: PhotoSwipe) => void} [onInit]
 * @prop {Methods<PhotoSwipe> | ((e: MouseEvent, element: HTMLElement, pswp: PhotoSwipe) => void)} [onClick]
 * @prop {'bar' | 'wrapper' | 'root'} [appendTo]
 * @prop {number=} order
 */
/** @typedef {'arrowPrev' | 'arrowNext' | 'close' | 'zoom' | 'counter'} DefaultUIElements */
/** @typedef {string | UIElementMarkupProps} UIElementMarkup */
/**
 * @param {UIElementMarkup} [htmlData]
 */
function addElementHTML(htmlData) {
  if (typeof htmlData === 'string') {
    // Allow developers to provide full svg,
    // For example:
    // <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" class="pswp__icn">
    //   <path d="..." />
    //   <circle ... />
    // </svg>
    // Can also be any HTML string.
    return htmlData;
  }
  if (!htmlData || !htmlData.isCustomSVG) {
    return '';
  }
  var svgData = htmlData;
  var out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  // replace all %d with size
  out = out.split('%d').join( /** @type {string} */svgData.size || 32);

  // Icons may contain outline/shadow,
  // to make it we "clone" base icon shape and add border to it.
  // Icon itself and border are styled via CSS.
  //
  // Property shadowID defines ID of element that should be cloned.
  if (svgData.outlineID) {
    out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
  }
  out += svgData.inner;
  out += '</svg>';
  return out;
}
var UIElement =
/**
 * @param {PhotoSwipe} pswp
 * @param {UIElementData} data
 */
function UIElement(pswp, data) {
  var name = data.name || data.className;
  var elementHTML = data.html;

  // @ts-expect-error lookup only by `data.name` maybe?
  if (pswp.options[name] === false) {
    // exit if element is disabled from options
    return;
  }

  // Allow to override SVG icons from options
  // @ts-expect-error lookup only by `data.name` maybe?
  if (typeof pswp.options[name + 'SVG'] === 'string') {
    // arrowPrevSVG
    // arrowNextSVG
    // closeSVG
    // zoomSVG
    // @ts-expect-error lookup only by `data.name` maybe?
    elementHTML = pswp.options[name + 'SVG'];
  }
  pswp.dispatch('uiElementCreate', {
    data: data
  });
  var className = '';
  if (data.isButton) {
    className += 'pswp__button ';
    className += data.className || "pswp__button--" + data.name;
  } else {
    className += data.className || "pswp__" + data.name;
  }

  /** @type {HTMLElement} */
  var element;
  var tagName = data.isButton ? data.tagName || 'button' : data.tagName || 'div';
  tagName = /** @type {keyof HTMLElementTagNameMap} */tagName.toLowerCase();
  element = createElement(className, tagName);
  if (data.isButton) {
    // create button element
    element = createElement(className, tagName);
    if (tagName === 'button') {
      /** @type {HTMLButtonElement} */element.type = 'button';
    }
    var title = data.title;
    var ariaLabel = data.ariaLabel;

    // @ts-expect-error lookup only by `data.name` maybe?
    if (typeof pswp.options[name + 'Title'] === 'string') {
      // @ts-expect-error lookup only by `data.name` maybe?
      title = pswp.options[name + 'Title'];
    }
    if (title) {
      element.title = title;
    }
    if (ariaLabel || title) {
      /** @type {HTMLElement} */element.setAttribute('aria-label', ariaLabel || title);
    }
  }
  element.innerHTML = addElementHTML(elementHTML);
  if (data.onInit) {
    data.onInit(element, pswp);
  }
  if (data.onClick) {
    element.onclick = function (e) {
      if (typeof data.onClick === 'string') {
        pswp[data.onClick]();
      } else {
        data.onClick(e, element, pswp);
      }
    };
  }

  // Top bar is default position
  var appendTo = data.appendTo || 'bar';
  var container;
  if (appendTo === 'bar') {
    if (!pswp.topBar) {
      pswp.topBar = createElement('pswp__top-bar pswp__hide-on-close', 'div', pswp.scrollWrap);
    }
    container = pswp.topBar;
  } else {
    // element outside of top bar gets a secondary class
    // that makes element fade out on close
    element.classList.add('pswp__hide-on-close');
    if (appendTo === 'wrapper') {
      container = pswp.scrollWrap;
    } else {
      // root element
      container = pswp.element;
    }
  }
  container.appendChild(pswp.applyFilters('uiElement', element, data));
};
/*
  Backward and forward arrow buttons
 */
/** @typedef {import('./ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 *
 * @param {HTMLElement} element
 * @param {PhotoSwipe} pswp
 * @param {boolean=} isNextButton
 */
function initArrowButton(element, pswp, isNextButton) {
  element.classList.add('pswp__button--arrow');
  pswp.on('change', function () {
    if (!pswp.options.loop) {
      if (isNextButton) {
        /** @type {HTMLButtonElement} */
        element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
      } else {
        /** @type {HTMLButtonElement} */
        element.disabled = !(pswp.currIndex > 0);
      }
    }
  });
}

/** @type {UIElementData} */
var arrowPrev = {
  name: 'arrowPrev',
  className: 'pswp__button--arrow--prev',
  title: 'Previous',
  order: 10,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'prev',
  onInit: initArrowButton
};

/** @type {UIElementData} */
var arrowNext = {
  name: 'arrowNext',
  className: 'pswp__button--arrow--next',
  title: 'Next',
  order: 11,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'next',
  onInit: function onInit(el, pswp) {
    initArrowButton(el, pswp, true);
  }
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var closeButton = {
  name: 'close',
  title: 'Close',
  order: 20,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: 'pswp__icn-close'
  },
  onClick: 'close'
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var zoomButton = {
  name: 'zoom',
  title: 'Zoom',
  order: 10,
  isButton: true,
  html: {
    isCustomSVG: true,
    // eslint-disable-next-line max-len
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: 'pswp__icn-zoom'
  },
  onClick: 'toggleZoom'
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var loadingIndicator = {
  name: 'preloader',
  appendTo: 'bar',
  order: 7,
  html: {
    isCustomSVG: true,
    // eslint-disable-next-line max-len
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: 'pswp__icn-loading'
  },
  onInit: function onInit(indicatorElement, pswp) {
    /** @type {boolean} */
    var isVisible;
    /** @type {NodeJS.Timeout} */
    var delayTimeout;

    /**
     * @param {string} className
     * @param {boolean} add
     */
    var toggleIndicatorClass = function toggleIndicatorClass(className, add) {
      indicatorElement.classList[add ? 'add' : 'remove']('pswp__preloader--' + className);
    };

    /**
     * @param {boolean} visible
     */
    var setIndicatorVisibility = function setIndicatorVisibility(visible) {
      if (isVisible !== visible) {
        isVisible = visible;
        toggleIndicatorClass('active', visible);
      }
    };
    var updatePreloaderVisibility = function updatePreloaderVisibility() {
      if (!pswp.currSlide.content.isLoading()) {
        setIndicatorVisibility(false);
        if (delayTimeout) {
          clearTimeout(delayTimeout);
          delayTimeout = null;
        }
        return;
      }
      if (!delayTimeout) {
        // display loading indicator with delay
        delayTimeout = setTimeout(function () {
          setIndicatorVisibility(pswp.currSlide.content.isLoading());
          delayTimeout = null;
        }, pswp.options.preloaderDelay);
      }
    };
    pswp.on('change', updatePreloaderVisibility);
    pswp.on('loadComplete', function (e) {
      if (pswp.currSlide === e.slide) {
        updatePreloaderVisibility();
      }
    });

    // expose the method
    pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
  }
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var counterIndicator = {
  name: 'counter',
  order: 5,
  onInit: function onInit(counterElement, pswp) {
    pswp.on('change', function () {
      counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
    });
  }
};

/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./ui-element.js').UIElementData} UIElementData */

/**
 * Set special class on element when image is zoomed.
 *
 * By default it is used to adjust
 * zoom icon and zoom cursor via CSS.
 *
 * @param {HTMLElement} el
 * @param {boolean} isZoomedIn
 */
function setZoomedIn(el, isZoomedIn) {
  el.classList[isZoomedIn ? 'add' : 'remove']('pswp--zoomed-in');
}
var UI = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function UI(pswp) {
    this.pswp = pswp;

    /** @type {() => void} */
    this.updatePreloaderVisibility = undefined;

    /** @type {number} */
    this._lastUpdatedZoomLevel = undefined;
  }
  var _proto16 = UI.prototype;
  _proto16.init = function init() {
    var _this12 = this;
    var pswp = this.pswp;
    this.isRegistered = false;
    /** @type {UIElementData[]} */
    this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
    pswp.dispatch('uiRegister');

    // sort by order
    this.uiElementsData.sort(function (a, b) {
      // default order is 0
      return (a.order || 0) - (b.order || 0);
    });

    /** @type {(UIElement | UIElementData)[]} */
    this.items = [];
    this.isRegistered = true;
    this.uiElementsData.forEach(function (uiElementData) {
      _this12.registerElement(uiElementData);
    });
    pswp.on('change', function () {
      pswp.element.classList[pswp.getNumItems() === 1 ? 'add' : 'remove']('pswp--one-slide');
    });
    pswp.on('zoomPanUpdate', function () {
      return _this12._onZoomPanUpdate();
    });
  }

  /**
   * @param {UIElementData} elementData
   */;
  _proto16.registerElement = function registerElement(elementData) {
    if (this.isRegistered) {
      this.items.push(new UIElement(this.pswp, elementData));
    } else {
      this.uiElementsData.push(elementData);
    }
  }

  /**
   * Fired each time zoom or pan position is changed.
   * Update classes that control visibility of zoom button and cursor icon.
   */;
  _proto16._onZoomPanUpdate = function _onZoomPanUpdate() {
    var _this$pswp = this.pswp,
      template = _this$pswp.template,
      currSlide = _this$pswp.currSlide,
      options = _this$pswp.options;
    var currZoomLevel = currSlide.currZoomLevel;
    if (this.pswp.opener.isClosing) {
      return;
    }

    // if not open yet - check against initial zoom level
    if (!this.pswp.opener.isOpen) {
      currZoomLevel = currSlide.zoomLevels.initial;
    }
    if (currZoomLevel === this._lastUpdatedZoomLevel) {
      return;
    }
    this._lastUpdatedZoomLevel = currZoomLevel;
    var currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;

    // Initial and secondary zoom levels are almost equal
    if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
      // disable zoom
      setZoomedIn(template, false);
      template.classList.remove('pswp--zoom-allowed');
      return;
    }
    template.classList.add('pswp--zoom-allowed');
    var potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
    setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
    if (options.imageClickAction === 'zoom' || options.imageClickAction === 'zoom-or-close') {
      template.classList.add('pswp--click-to-zoom');
    }
  };
  return UI;
}();
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {{ x: number; y: number; w: number; innerRect?: { w: number; h: number; x: number; y: number } }} Bounds */
/**
 * @param {HTMLElement} el
 */
function getBoundsByElement(el) {
  var thumbAreaRect = el.getBoundingClientRect();
  return {
    x: thumbAreaRect.left,
    y: thumbAreaRect.top,
    w: thumbAreaRect.width
  };
}

/**
 * @param {HTMLElement} el
 * @param {number} imageWidth
 * @param {number} imageHeight
 */
function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
  var thumbAreaRect = el.getBoundingClientRect();

  // fill image into the area
  // (do they same as object-fit:cover does to retrieve coordinates)
  var hRatio = thumbAreaRect.width / imageWidth;
  var vRatio = thumbAreaRect.height / imageHeight;
  var fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
  var offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
  var offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;

  /**
   * Coordinates of the image,
   * as if it was not cropped,
   * height is calculated automatically
   *
   * @type {Bounds}
   */
  var bounds = {
    x: thumbAreaRect.left + offsetX,
    y: thumbAreaRect.top + offsetY,
    w: imageWidth * fillZoomLevel
  };

  // Coordinates of inner crop area
  // relative to the image
  bounds.innerRect = {
    w: thumbAreaRect.width,
    h: thumbAreaRect.height,
    x: offsetX,
    y: offsetY
  };
  return bounds;
}

/**
 * Get dimensions of thumbnail image
 * (click on which opens photoswipe or closes photoswipe to)
 *
 * @param {number} index
 * @param {SlideData} itemData
 * @param {PhotoSwipe} instance PhotoSwipe instance
 * @returns {Bounds | undefined}
 */
function _getThumbBounds(index, itemData, instance) {
  // legacy event, before filters were introduced
  var event = instance.dispatch('thumbBounds', {
    index: index,
    itemData: itemData,
    instance: instance
  });
  // @ts-expect-error
  if (event.thumbBounds) {
    // @ts-expect-error
    return event.thumbBounds;
  }
  var element = itemData.element;
  var thumbBounds;
  /** @type {HTMLElement} */
  var thumbnail;
  if (element && instance.options.thumbSelector !== false) {
    var thumbSelector = instance.options.thumbSelector || 'img';
    thumbnail = element.matches(thumbSelector) ? element : element.querySelector(thumbSelector);
  }
  thumbnail = instance.applyFilters('thumbEl', thumbnail, itemData, index);
  if (thumbnail) {
    if (!itemData.thumbCropped) {
      thumbBounds = getBoundsByElement(thumbnail);
    } else {
      thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w, itemData.height || itemData.h);
    }
  }
  return instance.applyFilters('thumbBounds', thumbBounds, itemData, index);
}

/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../slide/content.js').default} ContentDefault */
/** @typedef {import('../slide/slide.js').default} Slide */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */
/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */

/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */
/** @typedef {{ x?: number; y?: number }} Point */

/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point, transitionDuration: number | false }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */

/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */

/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter<T>
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback<T>
 */

/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
var PhotoSwipeEvent = /*#__PURE__*/function () {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  function PhotoSwipeEvent(type, details) {
    this.type = type;
    if (details) {
      Object.assign(this, details);
    }
  }
  var _proto17 = PhotoSwipeEvent.prototype;
  _proto17.preventDefault = function preventDefault() {
    this.defaultPrevented = true;
  };
  return PhotoSwipeEvent;
}();
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
var Eventable = /*#__PURE__*/function () {
  function Eventable() {
    /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */
    this._listeners = {};

    /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */
    this._filters = {};

    /** @type {PhotoSwipe=} */
    this.pswp = undefined;

    /** @type {PhotoSwipeOptions} */
    this.options = undefined;
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  var _proto18 = Eventable.prototype;
  _proto18.addFilter = function addFilter(name, fn, priority) {
    if (priority === void 0) {
      priority = 100;
    }
    if (!this._filters[name]) {
      this._filters[name] = [];
    }
    this._filters[name].push({
      fn: fn,
      priority: priority
    });
    this._filters[name].sort(function (f1, f2) {
      return f1.priority - f2.priority;
    });
    if (this.pswp) {
      this.pswp.addFilter(name, fn, priority);
    }
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */;
  _proto18.removeFilter = function removeFilter(name, fn) {
    if (this._filters[name]) {
      // @ts-expect-error
      this._filters[name] = this._filters[name].filter(function (filter) {
        return filter.fn !== fn;
      });
    }
    if (this.pswp) {
      this.pswp.removeFilter(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */;
  _proto18.applyFilters = function applyFilters(name) {
    var _this13 = this;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this._filters[name]) {
      this._filters[name].forEach(function (filter) {
        // @ts-expect-error
        args[0] = filter.fn.apply(_this13, args);
      });
    }
    return args[0];
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */;
  _proto18.on = function on(name, fn) {
    if (!this._listeners[name]) {
      this._listeners[name] = [];
    }
    this._listeners[name].push(fn);

    // When binding events to lightbox,
    // also bind events to PhotoSwipe Core,
    // if it's open.
    if (this.pswp) {
      this.pswp.on(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */;
  _proto18.off = function off(name, fn) {
    if (this._listeners[name]) {
      // @ts-expect-error
      this._listeners[name] = this._listeners[name].filter(function (listener) {
        return fn !== listener;
      });
    }
    if (this.pswp) {
      this.pswp.off(name, fn);
    }
  }

  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */;
  _proto18.dispatch = function dispatch(name, details) {
    var _this14 = this;
    if (this.pswp) {
      return this.pswp.dispatch(name, details);
    }
    var event = /** @type {AugmentedEvent<T>} */new PhotoSwipeEvent(name, details);
    if (!this._listeners) {
      return event;
    }
    if (this._listeners[name]) {
      this._listeners[name].forEach(function (listener) {
        listener.call(_this14, event);
      });
    }
    return event;
  };
  return Eventable;
}();
var Placeholder = /*#__PURE__*/function () {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  function Placeholder(imageSrc, container) {
    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)
    this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : '', container);
    if (imageSrc) {
      /** @type {HTMLImageElement} */
      this.element.decoding = 'async';
      /** @type {HTMLImageElement} */
      this.element.alt = '';
      /** @type {HTMLImageElement} */
      this.element.src = imageSrc;
      this.element.setAttribute('role', 'presentation');
    }
    this.element.setAttribute('aria-hiden', 'true');
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  var _proto19 = Placeholder.prototype;
  _proto19.setDisplayedSize = function setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.element.tagName === 'IMG') {
      // Use transform scale() to modify img placeholder size
      // (instead of changing width/height directly).
      // This helps with performance, specifically in iOS15 Safari.
      setWidthHeight(this.element, 250, 'auto');
      this.element.style.transformOrigin = '0 0';
      this.element.style.transform = toTransformString(0, 0, width / 250);
    } else {
      setWidthHeight(this.element, width, height);
    }
  };
  _proto19.destroy = function destroy() {
    if (this.element.parentNode) {
      this.element.remove();
    }
    this.element = null;
  };
  return Placeholder;
}();
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../util/util.js').LoadState} LoadState */
var Content = /*#__PURE__*/function () {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipe} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  function Content(itemData, instance, index) {
    this.instance = instance;
    this.data = itemData;
    this.index = index;

    /** @type {HTMLImageElement | HTMLDivElement} */
    this.element = undefined;
    this.displayedImageWidth = 0;
    this.displayedImageHeight = 0;
    this.width = Number(this.data.w) || Number(this.data.width) || 0;
    this.height = Number(this.data.h) || Number(this.data.height) || 0;
    this.isAttached = false;
    this.hasSlide = false;
    /** @type {LoadState} */
    this.state = LOAD_STATE.IDLE;
    if (this.data.type) {
      this.type = this.data.type;
    } else if (this.data.src) {
      this.type = 'image';
    } else {
      this.type = 'html';
    }
    this.instance.dispatch('contentInit', {
      content: this
    });
  }
  var _proto20 = Content.prototype;
  _proto20.removePlaceholder = function removePlaceholder() {
    var _this15 = this;
    if (this.placeholder && !this.keepPlaceholder()) {
      // With delay, as image might be loaded, but not rendered
      setTimeout(function () {
        if (_this15.placeholder) {
          _this15.placeholder.destroy();
          _this15.placeholder = null;
        }
      }, 1000);
    }
  }

  /**
   * Preload content
   *
   * @param {boolean=} isLazy
   * @param {boolean=} reload
   */;
  _proto20.load = function load(isLazy, reload) {
    if (this.slide && this.usePlaceholder()) {
      if (!this.placeholder) {
        var placeholderSrc = this.instance.applyFilters('placeholderSrc',
        // use  image-based placeholder only for the first slide,
        // as rendering (even small stretched thumbnail) is an expensive operation
        this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
        this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
      } else {
        var placeholderEl = this.placeholder.element;
        // Add placeholder to DOM if it was already created
        if (placeholderEl && !placeholderEl.parentElement) {
          this.slide.container.prepend(placeholderEl);
        }
      }
    }
    if (this.element && !reload) {
      return;
    }
    if (this.instance.dispatch('contentLoad', {
      content: this,
      isLazy: isLazy
    }).defaultPrevented) {
      return;
    }
    if (this.isImageContent()) {
      this.element = createElement('pswp__img', 'img');
      // Start loading only after width is defined, as sizes might depend on it.
      // Due to Safari feature, we must define sizes before srcset.
      if (this.displayedImageWidth) {
        this.loadImage(isLazy);
      }
    } else {
      this.element = createElement('pswp__content');
      this.element.innerHTML = this.data.html || '';
    }
    if (reload && this.slide) {
      this.slide.updateContentSize(true);
    }
  }

  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */;
  _proto20.loadImage = function loadImage(isLazy) {
    var _this16 = this;
    var imageElement = /** @type HTMLImageElement */this.element;
    if (this.instance.dispatch('contentLoadImage', {
      content: this,
      isLazy: isLazy
    }).defaultPrevented) {
      return;
    }
    this.updateSrcsetSizes();
    if (this.data.srcset) {
      imageElement.srcset = this.data.srcset;
    }
    imageElement.src = this.data.src;
    imageElement.alt = this.data.alt || '';
    this.state = LOAD_STATE.LOADING;
    if (imageElement.complete) {
      this.onLoaded();
    } else {
      imageElement.onload = function () {
        _this16.onLoaded();
      };
      imageElement.onerror = function () {
        _this16.onError();
      };
    }
  }

  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */;
  _proto20.setSlide = function setSlide(slide) {
    this.slide = slide;
    this.hasSlide = true;
    this.instance = slide.pswp;

    // todo: do we need to unset slide?
  }

  /**
   * Content load success handler
   */;
  _proto20.onLoaded = function onLoaded() {
    this.state = LOAD_STATE.LOADED;
    if (this.slide) {
      this.instance.dispatch('loadComplete', {
        slide: this.slide,
        content: this
      });

      // if content is reloaded
      if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
        this.append();
        this.slide.updateContentSize(true);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  }

  /**
   * Content load error handler
   */;
  _proto20.onError = function onError() {
    this.state = LOAD_STATE.ERROR;
    if (this.slide) {
      this.displayError();
      this.instance.dispatch('loadComplete', {
        slide: this.slide,
        isError: true,
        content: this
      });
      this.instance.dispatch('loadError', {
        slide: this.slide,
        content: this
      });
    }
  }

  /**
   * @returns {Boolean} If the content is currently loading
   */;
  _proto20.isLoading = function isLoading() {
    return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
  };
  _proto20.isError = function isError() {
    return this.state === LOAD_STATE.ERROR;
  }

  /**
   * @returns {boolean} If the content is image
   */;
  _proto20.isImageContent = function isImageContent() {
    return this.type === 'image';
  }

  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */;
  _proto20.setDisplayedSize = function setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.placeholder) {
      this.placeholder.setDisplayedSize(width, height);
    }

    // eslint-disable-next-line max-len
    if (this.instance.dispatch('contentResize', {
      content: this,
      width: width,
      height: height
    }).defaultPrevented) {
      return;
    }
    setWidthHeight(this.element, width, height);
    if (this.isImageContent() && !this.isError()) {
      var isInitialSizeUpdate = !this.displayedImageWidth && width;
      this.displayedImageWidth = width;
      this.displayedImageHeight = height;
      if (isInitialSizeUpdate) {
        this.loadImage(false);
      } else {
        this.updateSrcsetSizes();
      }
      if (this.slide) {
        // eslint-disable-next-line max-len
        this.instance.dispatch('imageSizeChange', {
          slide: this.slide,
          width: width,
          height: height,
          content: this
        });
      }
    }
  }

  /**
   * @returns {boolean} If the content can be zoomed
   */;
  _proto20.isZoomable = function isZoomable() {
    return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
  }

  /**
   * Update image srcset sizes attribute based on width and height
   */;
  _proto20.updateSrcsetSizes = function updateSrcsetSizes() {
    // Handle srcset sizes attribute.
    //
    // Never lower quality, if it was increased previously.
    // Chrome does this automatically, Firefox and Safari do not,
    // so we store largest used size in dataset.
    // Handle srcset sizes attribute.
    //
    // Never lower quality, if it was increased previously.
    // Chrome does this automatically, Firefox and Safari do not,
    // so we store largest used size in dataset.
    if (this.data.srcset) {
      var image = /** @type HTMLImageElement */this.element;
      var sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + 'px';
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
  }

  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */;
  _proto20.usePlaceholder = function usePlaceholder() {
    return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
  }

  /**
   * Preload content with lazy-loading param
   */;
  _proto20.lazyLoad = function lazyLoad() {
    if (this.instance.dispatch('contentLazyLoad', {
      content: this
    }).defaultPrevented) {
      return;
    }
    this.load(true);
  }

  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */;
  _proto20.keepPlaceholder = function keepPlaceholder() {
    return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
  }

  /**
   * Destroy the content
   */;
  _proto20.destroy = function destroy() {
    this.hasSlide = false;
    this.slide = null;
    if (this.instance.dispatch('contentDestroy', {
      content: this
    }).defaultPrevented) {
      return;
    }
    this.remove();
    if (this.placeholder) {
      this.placeholder.destroy();
      this.placeholder = null;
    }
    if (this.isImageContent() && this.element) {
      this.element.onload = null;
      this.element.onerror = null;
      this.element = null;
    }
  }

  /**
   * Display error message
   */;
  _proto20.displayError = function displayError() {
    if (this.slide) {
      /** @type {HTMLElement} */
      var errorMsgEl = createElement('pswp__error-msg');
      errorMsgEl.innerText = this.instance.options.errorMsg;
      errorMsgEl = this.instance.applyFilters('contentErrorElement', errorMsgEl, this);
      this.element = createElement('pswp__content pswp__error-msg-container');
      this.element.appendChild(errorMsgEl);
      this.slide.container.innerText = '';
      this.slide.container.appendChild(this.element);
      this.slide.updateContentSize(true);
      this.removePlaceholder();
    }
  }

  /**
   * Append the content
   */;
  _proto20.append = function append() {
    var _this17 = this;
    if (this.isAttached) {
      return;
    }
    this.isAttached = true;
    if (this.state === LOAD_STATE.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch('contentAppend', {
      content: this
    }).defaultPrevented) {
      return;
    }
    var supportsDecode = ('decode' in this.element);
    if (this.isImageContent()) {
      // Use decode() on nearby slides
      //
      // Nearby slide images are in DOM and not hidden via display:none.
      // However, they are placed offscreen (to the left and right side).
      //
      // Some browsers do not composite the image until it's actually visible,
      // using decode() helps.
      //
      // You might ask "why dont you just decode() and then append all images",
      // that's because I want to show image before it's fully loaded,
      // as browser can render parts of image while it is loading.
      // We do not do this in Safari due to partial loading bug.
      if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
        this.isDecoding = true;
        // purposefully using finally instead of then,
        // as if srcset sizes changes dynamically - it may cause decode error
        /** @type {HTMLImageElement} */
        this.element.decode()["finally"](function () {
          _this17.isDecoding = false;
          _this17.appendImage();
        });
      } else {
        this.appendImage();
      }
    } else if (this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
    }
  }

  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */;
  _proto20.activate = function activate() {
    if (this.instance.dispatch('contentActivate', {
      content: this
    }).defaultPrevented) {
      return;
    }
    if (this.slide) {
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        // add image to slide when it becomes active,
        // even if it's not finished decoding
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true); // try to reload
      }
    }
  }

  /**
   * Deactivate the content
   */;
  _proto20.deactivate = function deactivate() {
    this.instance.dispatch('contentDeactivate', {
      content: this
    });
  }

  /**
   * Remove the content from DOM
   */;
  _proto20.remove = function remove() {
    this.isAttached = false;
    if (this.instance.dispatch('contentRemove', {
      content: this
    }).defaultPrevented) {
      return;
    }
    if (this.element && this.element.parentNode) {
      this.element.remove();
    }
    if (this.placeholder && this.placeholder.element) {
      this.placeholder.element.remove();
    }
  }

  /**
   * Append the image content to slide container
   */;
  _proto20.appendImage = function appendImage() {
    if (!this.isAttached) {
      return;
    }
    if (this.instance.dispatch('contentAppendImage', {
      content: this
    }).defaultPrevented) {
      return;
    }

    // ensure that element exists and is not already appended
    if (this.slide && this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
    }
    if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
      this.removePlaceholder();
    }
  };
  return Content;
}();
/** @typedef {import('./content.js').default} Content */
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
var MIN_SLIDES_TO_CACHE = 5;

/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipe | PhotoSwipeLightbox | PhotoSwipeBase} instance PhotoSwipe instance
 * @param {number} index
 * @returns Image that is being decoded or false.
 */
function _lazyLoadData(itemData, instance, index) {
  // src/slide/content/content.js
  var content = instance.createContentFromData(itemData, index);
  if (!content || !content.lazyLoad) {
    return;
  }
  var options = instance.options;

  // We need to know dimensions of the image to preload it,
  // as it might use srcset and we need to define sizes
  // @ts-expect-error should provide pswp instance?
  var viewportSize = instance.viewportSize || getViewportSize(options, instance);
  var panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
  var zoomLevel = new ZoomLevel(options, itemData, -1);
  zoomLevel.update(content.width, content.height, panAreaSize);
  content.lazyLoad();
  content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
  return content;
}

/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipe | PhotoSwipeLightbox} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 */
function lazyLoadSlide(index, instance) {
  var itemData = instance.getItemData(index);
  if (instance.dispatch('lazyLoadSlide', {
    index: index,
    itemData: itemData
  }).defaultPrevented) {
    return;
  }
  return _lazyLoadData(itemData, instance, index);
}
var ContentLoader = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function ContentLoader(pswp) {
    this.pswp = pswp;
    // Total amount of cached images
    this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
    /** @type {Content[]} */
    this._cachedItems = [];
  }

  /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number=} diff Difference between slide indexes that was changed recently, or 0.
   */
  var _proto21 = ContentLoader.prototype;
  _proto21.updateLazy = function updateLazy(diff) {
    var pswp = this.pswp;
    if (pswp.dispatch('lazyLoad').defaultPrevented) {
      return;
    }
    var preload = pswp.options.preload;
    var isForward = diff === undefined ? true : diff >= 0;
    var i;

    // preload[1] - num items to preload in forward direction
    for (i = 0; i <= preload[1]; i++) {
      this.loadSlideByIndex(pswp.currIndex + (isForward ? i : -i));
    }

    // preload[0] - num items to preload in backward direction
    for (i = 1; i <= preload[0]; i++) {
      this.loadSlideByIndex(pswp.currIndex + (isForward ? -i : i));
    }
  }

  /**
   * @param {number} index
   */;
  _proto21.loadSlideByIndex = function loadSlideByIndex(index) {
    index = this.pswp.getLoopedIndex(index);
    // try to get cached content
    var content = this.getContentByIndex(index);
    if (!content) {
      // no cached content, so try to load from scratch:
      content = lazyLoadSlide(index, this.pswp);
      // if content can be loaded, add it to cache:
      if (content) {
        this.addToCache(content);
      }
    }
  }

  /**
   * @param {Slide} slide
   */;
  _proto21.getContentBySlide = function getContentBySlide(slide) {
    var content = this.getContentByIndex(slide.index);
    if (!content) {
      // create content if not found in cache
      content = this.pswp.createContentFromData(slide.data, slide.index);
      if (content) {
        this.addToCache(content);
      }
    }
    if (content) {
      // assign slide to content
      content.setSlide(slide);
    }
    return content;
  }

  /**
   * @param {Content} content
   */;
  _proto21.addToCache = function addToCache(content) {
    // move to the end of array
    this.removeByIndex(content.index);
    this._cachedItems.push(content);
    if (this._cachedItems.length > this.limit) {
      // Destroy the first content that's not attached
      var indexToRemove = this._cachedItems.findIndex(function (item) {
        return !item.isAttached && !item.hasSlide;
      });
      if (indexToRemove !== -1) {
        var removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
        removedItem.destroy();
      }
    }
  }

  /**
   * Removes an image from cache, does not destroy() it, just removes.
   *
   * @param {number} index
   */;
  _proto21.removeByIndex = function removeByIndex(index) {
    var indexToRemove = this._cachedItems.findIndex(function (item) {
      return item.index === index;
    });
    if (indexToRemove !== -1) {
      this._cachedItems.splice(indexToRemove, 1);
    }
  }

  /**
   * @param {number} index
   */;
  _proto21.getContentByIndex = function getContentByIndex(index) {
    return this._cachedItems.find(function (content) {
      return content.index === index;
    });
  };
  _proto21.destroy = function destroy() {
    this._cachedItems.forEach(function (content) {
      return content.destroy();
    });
    this._cachedItems = null;
  };
  return ContentLoader;
}();
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */
/** @typedef {import("../photoswipe.js").PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import("../slide/slide.js").SlideData} SlideData */
/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
var PhotoSwipeBase = /*#__PURE__*/function (_Eventable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PhotoSwipeBase, _Eventable);
  function PhotoSwipeBase() {
    return _Eventable.apply(this, arguments) || this;
  }
  var _proto22 = PhotoSwipeBase.prototype;
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  _proto22.getNumItems = function getNumItems() {
    var numItems;
    var dataSource = this.options.dataSource;
    if (!dataSource) {
      numItems = 0;
    } else if ('length' in dataSource) {
      // may be an array or just object with length property
      numItems = dataSource.length;
    } else if ('gallery' in dataSource) {
      // query DOM elements
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      if (dataSource.items) {
        numItems = dataSource.items.length;
      }
    }

    // legacy event, before filters were introduced
    var event = this.dispatch('numItems', {
      dataSource: dataSource,
      numItems: numItems
    });
    return this.applyFilters('numItems', event.numItems, dataSource);
  }

  /**
   * @param {SlideData} slideData
   * @param {number} index
   */;
  _proto22.createContentFromData = function createContentFromData(slideData, index) {
    // @ts-expect-error
    return new Content(slideData, this, index);
  }

  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   */;
  _proto22.getItemData = function getItemData(index) {
    var dataSource = this.options.dataSource;
    var dataSourceItem;
    if (Array.isArray(dataSource)) {
      // Datasource is an array of elements
      dataSourceItem = dataSource[index];
    } else if (dataSource && dataSource.gallery) {
      // dataSource has gallery property,
      // thus it was created by Lightbox, based on
      // gallery and children options

      // query DOM elements
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      dataSourceItem = dataSource.items[index];
    }
    var itemData = dataSourceItem;
    if (itemData instanceof Element) {
      itemData = this._domElementToItemData(itemData);
    }

    // Dispatching the itemData event,
    // it's a legacy verion before filters were introduced
    var event = this.dispatch('itemData', {
      itemData: itemData || {},
      index: index
    });
    return this.applyFilters('itemData', event.itemData, index);
  }

  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   */;
  _proto22._getGalleryDOMElements = function _getGalleryDOMElements(galleryElement) {
    if (this.options.children || this.options.childSelector) {
      return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
    }
    return [galleryElement];
  }

  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   */
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto22._domElementToItemData = function _domElementToItemData(element) {
    /** @type {SlideData} */
    var itemData = {
      element: element
    };

    // eslint-disable-next-line max-len
    var linkEl = /** @type {HTMLAnchorElement} */element.tagName === 'A' ? element : element.querySelector('a');
    if (linkEl) {
      // src comes from data-pswp-src attribute,
      // if it's empty link href is used
      itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
      if (linkEl.dataset.pswpSrcset) {
        itemData.srcset = linkEl.dataset.pswpSrcset;
      }
      itemData.width = parseInt(linkEl.dataset.pswpWidth, 10);
      itemData.height = parseInt(linkEl.dataset.pswpHeight, 10);

      // support legacy w & h properties
      itemData.w = itemData.width;
      itemData.h = itemData.height;
      if (linkEl.dataset.pswpType) {
        itemData.type = linkEl.dataset.pswpType;
      }
      var thumbnailEl = element.querySelector('img');
      if (thumbnailEl) {
        // msrc is URL to placeholder image that's displayed before large image is loaded
        // by default it's displayed only for the first slide
        itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
        itemData.alt = thumbnailEl.getAttribute('alt');
      }
      if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
        itemData.thumbCropped = true;
      }
    }
    return this.applyFilters('domItemData', itemData, element, linkEl);
  }

  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns Image that is being decoded or false.
   */;
  _proto22.lazyLoadData = function lazyLoadData(itemData, index) {
    return _lazyLoadData(itemData, this, index);
  };
  return PhotoSwipeBase;
}(Eventable);
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/get-thumb-bounds.js').Bounds} Bounds */
/** @typedef {import('./util/animations.js').AnimationProps} AnimationProps */
// some browsers do not paint
// elements which opacity is set to 0,
// since we need to pre-render elements for the animation -
// we set it to the minimum amount
var MIN_OPACITY = 0.003;

/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */
var Opener = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Opener(pswp) {
    this.pswp = pswp;
    this.isClosed = true;
    this._prepareOpen = this._prepareOpen.bind(this);

    /** @type {false | Bounds} */
    this._thumbBounds = undefined;

    // Override initial zoom and pan position
    pswp.on('firstZoomPan', this._prepareOpen);
  }
  var _proto23 = Opener.prototype;
  _proto23.open = function open() {
    this._prepareOpen();
    this._start();
  };
  _proto23.close = function close() {
    var _this18 = this;
    if (this.isClosed || this.isClosing || this.isOpening) {
      // if we close during opening animation
      // for now do nothing,
      // browsers aren't good at changing the direction of the CSS transition
      return false;
    }
    var slide = this.pswp.currSlide;
    this.isOpen = false;
    this.isOpening = false;
    this.isClosing = true;
    this._duration = this.pswp.options.hideAnimationDuration;
    if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
      this._duration = 0;
    }
    this._applyStartProps();
    setTimeout(function () {
      _this18._start();
    }, this._croppedZoom ? 30 : 0);
    return true;
  };
  _proto23._prepareOpen = function _prepareOpen() {
    this.pswp.off('firstZoomPan', this._prepareOpen);
    if (!this.isOpening) {
      var slide = this.pswp.currSlide;
      this.isOpening = true;
      this.isClosing = false;
      this._duration = this.pswp.options.showAnimationDuration;
      if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }
      this._applyStartProps();
    }
  };
  _proto23._applyStartProps = function _applyStartProps() {
    var pswp = this.pswp;
    var slide = this.pswp.currSlide;
    var options = pswp.options;
    if (options.showHideAnimationType === 'fade') {
      options.showHideOpacity = true;
      this._thumbBounds = false;
    } else if (options.showHideAnimationType === 'none') {
      options.showHideOpacity = false;
      this._duration = 0;
      this._thumbBounds = false;
    } else if (this.isOpening && pswp._initialThumbBounds) {
      // Use initial bounds if defined
      this._thumbBounds = pswp._initialThumbBounds;
    } else {
      this._thumbBounds = this.pswp.getThumbBounds();
    }
    this._placeholder = slide.getPlaceholderElement();
    pswp.animations.stopAll();

    // Discard animations when duration is less than 50ms
    this._useAnimation = this._duration > 50;
    this._animateZoom = Boolean(this._thumbBounds) && slide.content && slide.content.usePlaceholder() && (!this.isClosing || !pswp.mainScroll.isShifted());
    if (!this._animateZoom) {
      this._animateRootOpacity = true;
      if (this.isOpening) {
        slide.zoomAndPanToInitial();
        slide.applyCurrentZoomPan();
      }
    } else {
      this._animateRootOpacity = options.showHideOpacity;
    }
    this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
    this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
    if (!this._useAnimation) {
      this._duration = 0;
      this._animateZoom = false;
      this._animateBgOpacity = false;
      this._animateRootOpacity = true;
      if (this.isOpening) {
        pswp.element.style.opacity = String(MIN_OPACITY);
        pswp.applyBgOpacity(1);
      }
      return;
    }
    if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
      // Properties are used when animation from cropped thumbnail
      this._croppedZoom = true;
      this._cropContainer1 = this.pswp.container;
      this._cropContainer2 = this.pswp.currSlide.holderElement;
      pswp.container.style.overflow = 'hidden';
      pswp.container.style.width = pswp.viewportSize.x + 'px';
    } else {
      this._croppedZoom = false;
    }
    if (this.isOpening) {
      // Apply styles before opening transition
      if (this._animateRootOpacity) {
        pswp.element.style.opacity = String(MIN_OPACITY);
        pswp.applyBgOpacity(1);
      } else {
        if (this._animateBgOpacity) {
          pswp.bg.style.opacity = String(MIN_OPACITY);
        }
        pswp.element.style.opacity = '1';
      }
      if (this._animateZoom) {
        this._setClosedStateZoomPan();
        if (this._placeholder) {
          // tell browser that we plan to animate the placeholder
          this._placeholder.style.willChange = 'transform';

          // hide placeholder to allow hiding of
          // elements that overlap it (such as icons over the thumbnail)
          this._placeholder.style.opacity = String(MIN_OPACITY);
        }
      }
    } else if (this.isClosing) {
      // hide nearby slides to make sure that
      // they are not painted during the transition
      pswp.mainScroll.itemHolders[0].el.style.display = 'none';
      pswp.mainScroll.itemHolders[2].el.style.display = 'none';
      if (this._croppedZoom) {
        if (pswp.mainScroll.x !== 0) {
          // shift the main scroller to zero position
          pswp.mainScroll.resetPosition();
          pswp.mainScroll.resize();
        }
      }
    }
  };
  _proto23._start = function _start() {
    var _this19 = this;
    if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === 'IMG') {
      // To ensure smooth animation
      // we wait till the current slide image placeholder is decoded,
      // but no longer than 250ms,
      // and no shorter than 50ms
      // (just using requestanimationframe is not enough in Firefox,
      // for some reason)
      new Promise(function (resolve) {
        var decoded = false;
        var isDelaying = true;
        decodeImage( /** @type {HTMLImageElement} */_this19._placeholder)["finally"](function () {
          decoded = true;
          if (!isDelaying) {
            resolve();
          }
        });
        setTimeout(function () {
          isDelaying = false;
          if (decoded) {
            resolve();
          }
        }, 50);
        setTimeout(resolve, 250);
      })["finally"](function () {
        return _this19._initiate();
      });
    } else {
      this._initiate();
    }
  };
  _proto23._initiate = function _initiate() {
    this.pswp.element.style.setProperty('--pswp-transition-duration', this._duration + 'ms');
    this.pswp.dispatch(this.isOpening ? 'openingAnimationStart' : 'closingAnimationStart');

    // legacy event
    this.pswp.dispatch( /** @type {'initialZoomIn' | 'initialZoomOut'} */
    'initialZoom' + (this.isOpening ? 'In' : 'Out'));
    this.pswp.element.classList[this.isOpening ? 'add' : 'remove']('pswp--ui-visible');
    if (this.isOpening) {
      if (this._placeholder) {
        // unhide the placeholder
        this._placeholder.style.opacity = '1';
      }
      this._animateToOpenState();
    } else if (this.isClosing) {
      this._animateToClosedState();
    }
    if (!this._useAnimation) {
      this._onAnimationComplete();
    }
  };
  _proto23._onAnimationComplete = function _onAnimationComplete() {
    var pswp = this.pswp;
    this.isOpen = this.isOpening;
    this.isClosed = this.isClosing;
    this.isOpening = false;
    this.isClosing = false;
    pswp.dispatch(this.isOpen ? 'openingAnimationEnd' : 'closingAnimationEnd');

    // legacy event
    pswp.dispatch( /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
    'initialZoom' + (this.isOpen ? 'InEnd' : 'OutEnd'));
    if (this.isClosed) {
      pswp.destroy();
    } else if (this.isOpen) {
      if (this._animateZoom) {
        pswp.container.style.overflow = 'visible';
        pswp.container.style.width = '100%';
      }
      pswp.currSlide.applyCurrentZoomPan();
    }
  };
  _proto23._animateToOpenState = function _animateToOpenState() {
    var pswp = this.pswp;
    if (this._animateZoom) {
      if (this._croppedZoom) {
        this._animateTo(this._cropContainer1, 'transform', 'translate3d(0,0,0)');
        this._animateTo(this._cropContainer2, 'transform', 'none');
      }
      pswp.currSlide.zoomAndPanToInitial();
      this._animateTo(pswp.currSlide.container, 'transform', pswp.currSlide.getCurrentTransform());
    }
    if (this._animateBgOpacity) {
      this._animateTo(pswp.bg, 'opacity', String(pswp.options.bgOpacity));
    }
    if (this._animateRootOpacity) {
      this._animateTo(pswp.element, 'opacity', '1');
    }
  };
  _proto23._animateToClosedState = function _animateToClosedState() {
    var pswp = this.pswp;
    if (this._animateZoom) {
      this._setClosedStateZoomPan(true);
    }
    if (this._animateBgOpacity && pswp.bgOpacity > 0.01) {
      // do not animate opacity if it's already at 0
      this._animateTo(pswp.bg, 'opacity', '0');
    }
    if (this._animateRootOpacity) {
      this._animateTo(pswp.element, 'opacity', '0');
    }
  }

  /**
   * @param {boolean=} animate
   */;
  _proto23._setClosedStateZoomPan = function _setClosedStateZoomPan(animate) {
    if (!this._thumbBounds) return;
    var pswp = this.pswp;
    var innerRect = this._thumbBounds.innerRect;
    var currSlide = pswp.currSlide,
      viewportSize = pswp.viewportSize;
    if (this._croppedZoom) {
      var containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
      var containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
      var containerTwoPanX = viewportSize.x - innerRect.w;
      var containerTwoPanY = viewportSize.y - innerRect.h;
      if (animate) {
        this._animateTo(this._cropContainer1, 'transform', toTransformString(containerOnePanX, containerOnePanY));
        this._animateTo(this._cropContainer2, 'transform', toTransformString(containerTwoPanX, containerTwoPanY));
      } else {
        setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
        setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
      }
    }
    equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
    currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
    if (animate) {
      this._animateTo(currSlide.container, 'transform', currSlide.getCurrentTransform());
    } else {
      currSlide.applyCurrentZoomPan();
    }
  }

  /**
   * @param {HTMLElement} target
   * @param {'transform' | 'opacity'} prop
   * @param {string} propValue
   */;
  _proto23._animateTo = function _animateTo(target, prop, propValue) {
    var _this20 = this;
    if (!this._duration) {
      target.style[prop] = propValue;
      return;
    }
    var animations = this.pswp.animations;
    /** @type {AnimationProps} */
    var animProps = {
      duration: this._duration,
      easing: this.pswp.options.easing,
      onComplete: function onComplete() {
        if (!animations.activeAnimations.length) {
          _this20._onAnimationComplete();
        }
      },
      target: target
    };
    animProps[prop] = propValue;
    animations.startTransition(animProps);
  };
  return Opener;
}();
/**
 * @template T
 * @typedef {import('./types.js').Type<T>} Type<T>
 */
/** @typedef {import('./slide/slide.js').SlideData} SlideData */
/** @typedef {import('./slide/zoom-level.js').ZoomLevelOption} ZoomLevelOption */
/** @typedef {import('./ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('./main-scroll.js').ItemHolder} ItemHolder */
/** @typedef {import('./core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('./core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/**
 * @template T
 * @typedef {import('./core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * @template T
 * @typedef {import('./core/eventable.js').AugmentedEvent<T>} AugmentedEvent<T>
 */
/** @typedef {{ x?: number; y?: number; id?: string | number }} Point */
/** @typedef {{ x?: number; y?: number }} Size */
/** @typedef {{ top: number; bottom: number; left: number; right: number }} Padding */
/** @typedef {SlideData[]} DataSourceArray */
/** @typedef {{ gallery: HTMLElement; items?: HTMLElement[] }} DataSourceObject */
/** @typedef {DataSourceArray | DataSourceObject} DataSource */
/** @typedef {(point: Point, originalEvent: PointerEvent) => void} ActionFn */
/** @typedef {'close' | 'next' | 'zoom' | 'zoom-or-close' | 'toggle-controls'} ActionType */
/** @typedef {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} PhotoSwipeModule */
/** @typedef {PhotoSwipeModule | Promise<PhotoSwipeModule> | (() => Promise<PhotoSwipeModule>)} PhotoSwipeModuleOption */
/**
 * @typedef {Object} PhotoSwipeOptions https://photoswipe.com/options/
 *
 * @prop {DataSource=} dataSource
 * Pass an array of any items via dataSource option. Its length will determine amount of slides
 * (which may be modified further from numItems event).
 *
 * Each item should contain data that you need to generate slide
 * (for image slide it would be src (image URL), width (image width), height, srcset, alt).
 *
 * If these properties are not present in your initial array, you may "pre-parse" each item from itemData filter.
 *
 * @prop {number=} bgOpacity
 * Background backdrop opacity, always define it via this option and not via CSS rgba color.
 *
 * @prop {number=} spacing
 * Spacing between slides. Defined as ratio relative to the viewport width (0.1 = 10% of viewport).
 *
 * @prop {boolean=} allowPanToNext
 * Allow swipe navigation to the next slide when the current slide is zoomed. Does not apply to mouse events.
 *
 * @prop {boolean=} loop
 * If set to true you'll be able to swipe from the last to the first image.
 * Option is always false when there are less than 3 slides.
 *
 * @prop {boolean=} wheelToZoom
 * By default PhotoSwipe zooms image with ctrl-wheel, if you enable this option - image will zoom just via wheel.
 *
 * @prop {boolean=} pinchToClose
 * Pinch touch gesture to close the gallery.
 *
 * @prop {boolean=} closeOnVerticalDrag
 * Vertical drag gesture to close the PhotoSwipe.
 *
 * @prop {Padding=} padding
 * Slide area padding (in pixels).
 *
 * @prop {(viewportSize: Size, itemData: SlideData, index: number) => Padding} [paddingFn]
 * The option is checked frequently, so make sure it's performant. Overrides padding option if defined. For example:
 *
 * @prop {number | false} [hideAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} [showAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} [zoomAnimationDuration]
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {string=} easing
 * String, 'cubic-bezier(.4,0,.22,1)'. CSS easing function for open/close/zoom transitions.
 *
 * @prop {boolean=} escKey
 * Esc key to close.
 *
 * @prop {boolean=} arrowKeys
 * Left/right arrow keys for navigation.
 *
 * @prop {boolean=} returnFocus
 * Restore focus the last active element after PhotoSwipe is closed.
 *
 * @prop {boolean=} clickToCloseNonZoomable
 * If image is not zoomable (for example, smaller than viewport) it can be closed by clicking on it.
 *
 * @prop {ActionType | ActionFn | false} [imageClickAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [bgClickAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [tapAction]
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} [doubleTapAction]
 * Refer to click and tap actions page.
 *
 * @prop {number=} preloaderDelay
 * Delay before the loading indicator will be displayed,
 * if image is loaded during it - the indicator will not be displayed at all. Can be zero.
 *
 * @prop {string=} indexIndicatorSep
 * Used for slide count indicator ("1 of 10 ").
 *
 * @prop {(options: PhotoSwipeOptions, pswp: PhotoSwipe) => { x: number; y: number }} [getViewportSizeFn]
 * A function that should return slide viewport width and height, in format {x: 100, y: 100}.
 *
 * @prop {string=} errorMsg
 * Message to display when the image wasn't able to load. If you need to display HTML - use contentErrorElement filter.
 *
 * @prop {[number, number]=} preload
 * Lazy loading of nearby slides based on direction of movement. Should be an array with two integers,
 * first one - number of items to preload before the current image, second one - after the current image.
 * Two nearby images are always loaded.
 *
 * @prop {string=} mainClass
 * Class that will be added to the root element of PhotoSwipe, may contain multiple separated by space.
 * Example on Styling page.
 *
 * @prop {HTMLElement=} appendToEl
 * Element to which PhotoSwipe dialog will be appended when it opens.
 *
 * @prop {number=} maxWidthToAnimate
 * Maximum width of image to animate, if initial rendered image width
 * is larger than this value - the opening/closing transition will be automatically disabled.
 *
 * @prop {string=} closeTitle
 * Translating
 *
 * @prop {string=} zoomTitle
 * Translating
 *
 * @prop {string=} arrowPrevTitle
 * Translating
 *
 * @prop {string=} arrowNextTitle
 * Translating
 *
 * @prop {'zoom' | 'fade' | 'none'} [showHideAnimationType]
 * To adjust opening or closing transition type use lightbox option `showHideAnimationType` (`String`).
 * It supports three values - `zoom` (default), `fade` (default if there is no thumbnail) and `none`.
 *
 * Animations are automatically disabled if user `(prefers-reduced-motion: reduce)`.
 *
 * @prop {number=} index
 * Defines start slide index.
 *
 * @prop {(e: MouseEvent) => number} [getClickedIndexFn]
 *
 * @prop {boolean=} arrowPrev
 * @prop {boolean=} arrowNext
 * @prop {boolean=} zoom
 * @prop {boolean=} close
 * @prop {boolean=} counter
 *
 * @prop {string=} arrowPrevSVG
 * @prop {string=} arrowNextSVG
 * @prop {string=} zoomSVG
 * @prop {string=} closeSVG
 * @prop {string=} counterSVG
 *
 * @prop {string=} arrowPrevTitle
 * @prop {string=} arrowNextTitle
 * @prop {string=} zoomTitle
 * @prop {string=} closeTitle
 * @prop {string=} counterTitle
 *
 * @prop {ZoomLevelOption=} initialZoomLevel
 * @prop {ZoomLevelOption=} secondaryZoomLevel
 * @prop {ZoomLevelOption=} maxZoomLevel
 *
 * @prop {boolean=} mouseMovePan
 * @prop {Point | null} [initialPointerPos]
 * @prop {boolean=} showHideOpacity
 *
 * @prop {PhotoSwipeModuleOption} [pswpModule]
 * @prop {() => Promise<any>} [openPromise]
 * @prop {boolean=} preloadFirstSlide
 * @prop {string=} gallery
 * @prop {string=} gallerySelector
 * @prop {string=} children
 * @prop {string=} childSelector
 * @prop {string | false} [thumbSelector]
 */
/** @type {PhotoSwipeOptions} */
var defaultOptions = {
  allowPanToNext: true,
  spacing: 0.1,
  loop: true,
  pinchToClose: true,
  closeOnVerticalDrag: true,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: true,
  arrowKeys: true,
  returnFocus: true,
  maxWidthToAnimate: 4000,
  clickToCloseNonZoomable: true,
  imageClickAction: 'zoom-or-close',
  bgClickAction: 'close',
  tapAction: 'toggle-controls',
  doubleTapAction: 'zoom',
  indexIndicatorSep: ' / ',
  preloaderDelay: 2000,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: 'The image cannot be loaded',
  preload: [1, 2],
  easing: 'cubic-bezier(.4,0,.22,1)'
};

/**
 * PhotoSwipe Core
 */
var PhotoSwipe = /*#__PURE__*/function (_PhotoSwipeBase) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PhotoSwipe, _PhotoSwipeBase);
  /**
   * @param {PhotoSwipeOptions} options
   */
  function PhotoSwipe(options) {
    var _this21;
    _this21 = _PhotoSwipeBase.call(this) || this;
    _this21._prepareOptions(options);

    /**
     * offset of viewport relative to document
     *
     * @type {{ x?: number; y?: number }}
     */
    _this21.offset = {};

    /**
     * @type {{ x?: number; y?: number }}
     * @private
     */
    _this21._prevViewportSize = {};

    /**
     * Size of scrollable PhotoSwipe viewport
     *
     * @type {{ x?: number; y?: number }}
     */
    _this21.viewportSize = {};

    /**
     * background (backdrop) opacity
     *
     * @type {number}
     */
    _this21.bgOpacity = 1;

    /** @type {HTMLDivElement} */
    _this21.topBar = undefined;
    _this21.events = new DOMEvents();

    /** @type {Animations} */
    _this21.animations = new Animations();
    _this21.mainScroll = new MainScroll((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21));
    _this21.gestures = new Gestures((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21));
    _this21.opener = new Opener((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21));
    _this21.keyboard = new Keyboard((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21));
    _this21.contentLoader = new ContentLoader((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this21));
    return _this21;
  }
  var _proto24 = PhotoSwipe.prototype;
  _proto24.init = function init() {
    var _this22 = this;
    if (this.isOpen || this.isDestroying) {
      return;
    }
    this.isOpen = true;
    this.dispatch('init'); // legacy
    this.dispatch('beforeOpen');
    this._createMainStructure();

    // add classes to the root element of PhotoSwipe
    var rootClasses = 'pswp--open';
    if (this.gestures.supportsTouch) {
      rootClasses += ' pswp--touch';
    }
    if (this.options.mainClass) {
      rootClasses += ' ' + this.options.mainClass;
    }
    this.element.className += ' ' + rootClasses;
    this.currIndex = this.options.index || 0;
    this.potentialIndex = this.currIndex;
    this.dispatch('firstUpdate'); // starting index can be modified here

    // initialize scroll wheel handler to block the scroll
    this.scrollWheel = new ScrollWheel(this);

    // sanitize index
    if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
      this.currIndex = 0;
    }
    if (!this.gestures.supportsTouch) {
      // enable mouse features if no touch support detected
      this.mouseDetected();
    }

    // causes forced synchronous layout
    this.updateSize();
    this.offset.y = window.pageYOffset;
    this._initialItemData = this.getItemData(this.currIndex);
    this.dispatch('gettingData', {
      index: this.currIndex,
      data: this._initialItemData,
      slide: undefined
    });

    // *Layout* - calculate size and position of elements here
    this._initialThumbBounds = this.getThumbBounds();
    this.dispatch('initialLayout');
    this.on('openingAnimationEnd', function () {
      _this22.mainScroll.itemHolders[0].el.style.display = 'block';
      _this22.mainScroll.itemHolders[2].el.style.display = 'block';

      // Add content to the previous and next slide
      _this22.setContent(_this22.mainScroll.itemHolders[0], _this22.currIndex - 1);
      _this22.setContent(_this22.mainScroll.itemHolders[2], _this22.currIndex + 1);
      _this22.appendHeavy();
      _this22.contentLoader.updateLazy();
      _this22.events.add(window, 'resize', _this22._handlePageResize.bind(_this22));
      _this22.events.add(window, 'scroll', _this22._updatePageScrollOffset.bind(_this22));
      _this22.dispatch('bindEvents');
    });

    // set content for center slide (first time)
    this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
    this.dispatch('change');
    this.opener.open();
    this.dispatch('afterInit');
    return true;
  }

  /**
   * Get looped slide index
   * (for example, -1 will return the last slide)
   *
   * @param {number} index
   */;
  _proto24.getLoopedIndex = function getLoopedIndex(index) {
    var numSlides = this.getNumItems();
    if (this.options.loop) {
      if (index > numSlides - 1) {
        index -= numSlides;
      }
      if (index < 0) {
        index += numSlides;
      }
    }
    index = clamp(index, 0, numSlides - 1);
    return index;
  };
  _proto24.appendHeavy = function appendHeavy() {
    this.mainScroll.itemHolders.forEach(function (itemHolder) {
      if (itemHolder.slide) {
        itemHolder.slide.appendHeavy();
      }
    });
  }

  /**
   * Change the slide
   * @param {number} index New index
   */;
  _proto24.goTo = function goTo(index) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
  }

  /**
   * Go to the next slide.
   */;
  _proto24.next = function next() {
    this.goTo(this.potentialIndex + 1);
  }

  /**
   * Go to the previous slide.
   */;
  _proto24.prev = function prev() {
    this.goTo(this.potentialIndex - 1);
  }

  /**
   * @see slide/slide.js zoomTo
   *
   * @param {Parameters<Slide['zoomTo']>} args
   */;
  _proto24.zoomTo = function zoomTo() {
    var _this$currSlide;
    (_this$currSlide = this.currSlide).zoomTo.apply(_this$currSlide, arguments);
  }

  /**
   * @see slide/slide.js toggleZoom
   */;
  _proto24.toggleZoom = function toggleZoom() {
    this.currSlide.toggleZoom();
  }

  /**
   * Close the gallery.
   * After closing transition ends - destroy it
   */;
  _proto24.close = function close() {
    if (!this.opener.isOpen || this.isDestroying) {
      return;
    }
    this.isDestroying = true;
    this.dispatch('close');
    this.events.removeAll();
    this.opener.close();
  }

  /**
   * Destroys the gallery:
   * - instantly closes the gallery
   * - unbinds events,
   * - cleans intervals and timeouts
   * - removes elements from DOM
   */;
  _proto24.destroy = function destroy() {
    if (!this.isDestroying) {
      this.options.showHideAnimationType = 'none';
      this.close();
      return;
    }
    this.dispatch('destroy');
    this.listeners = null;
    this.scrollWrap.ontouchmove = null;
    this.scrollWrap.ontouchend = null;
    this.element.remove();
    this.mainScroll.itemHolders.forEach(function (itemHolder) {
      if (itemHolder.slide) {
        itemHolder.slide.destroy();
      }
    });
    this.contentLoader.destroy();
    this.events.removeAll();
  }

  /**
   * Refresh/reload content of a slide by its index
   *
   * @param {number} slideIndex
   */;
  _proto24.refreshSlideContent = function refreshSlideContent(slideIndex) {
    var _this23 = this;
    this.contentLoader.removeByIndex(slideIndex);
    this.mainScroll.itemHolders.forEach(function (itemHolder, i) {
      var potentialHolderIndex = _this23.currSlide.index - 1 + i;
      if (_this23.canLoop()) {
        potentialHolderIndex = _this23.getLoopedIndex(potentialHolderIndex);
      }
      if (potentialHolderIndex === slideIndex) {
        // set the new slide content
        _this23.setContent(itemHolder, slideIndex, true);

        // activate the new slide if it's current
        if (i === 1) {
          /** @type {Slide} */
          _this23.currSlide = itemHolder.slide;
          itemHolder.slide.setIsActive(true);
        }
      }
    });
    this.dispatch('change');
  }

  /**
   * Set slide content
   *
   * @param {ItemHolder} holder mainScroll.itemHolders array item
   * @param {number} index Slide index
   * @param {boolean=} force If content should be set even if index wasn't changed
   */;
  _proto24.setContent = function setContent(holder, index, force) {
    if (this.canLoop()) {
      index = this.getLoopedIndex(index);
    }
    if (holder.slide) {
      if (holder.slide.index === index && !force) {
        // exit if holder already contains this slide
        // this could be common when just three slides are used
        return;
      }

      // destroy previous slide
      holder.slide.destroy();
      holder.slide = null;
    }

    // exit if no loop and index is out of bounds
    if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
      return;
    }
    var itemData = this.getItemData(index);
    holder.slide = new Slide(itemData, index, this);

    // set current slide
    if (index === this.currIndex) {
      this.currSlide = holder.slide;
    }
    holder.slide.append(holder.el);
  };
  _proto24.getViewportCenterPoint = function getViewportCenterPoint() {
    return {
      x: this.viewportSize.x / 2,
      y: this.viewportSize.y / 2
    };
  }

  /**
   * Update size of all elements.
   * Executed on init and on page resize.
   *
   * @param {boolean=} force Update size even if size of viewport was not changed.
   */;
  _proto24.updateSize = function updateSize(force) {
    // let item;
    // let itemIndex;

    if (this.isDestroying) {
      // exit if PhotoSwipe is closed or closing
      // (to avoid errors, as resize event might be delayed)
      return;
    }

    //const newWidth = this.scrollWrap.clientWidth;
    //const newHeight = this.scrollWrap.clientHeight;

    var newViewportSize = getViewportSize(this.options, this);
    if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
      // Exit if dimensions were not changed
      return;
    }

    //this._prevViewportSize.x = newWidth;
    //this._prevViewportSize.y = newHeight;
    equalizePoints(this._prevViewportSize, newViewportSize);
    this.dispatch('beforeResize');
    equalizePoints(this.viewportSize, this._prevViewportSize);
    this._updatePageScrollOffset();
    this.dispatch('viewportSize');

    // Resize slides only after opener animation is finished
    // and don't re-calculate size on inital size update
    this.mainScroll.resize(this.opener.isOpen);
    if (!this.hasMouse && window.matchMedia('(any-hover: hover)').matches) {
      this.mouseDetected();
    }
    this.dispatch('resize');
  }

  /**
   * @param {number} opacity
   */;
  _proto24.applyBgOpacity = function applyBgOpacity(opacity) {
    this.bgOpacity = Math.max(opacity, 0);
    this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
  }

  /**
   * Whether mouse is detected
   */;
  _proto24.mouseDetected = function mouseDetected() {
    if (!this.hasMouse) {
      this.hasMouse = true;
      this.element.classList.add('pswp--has_mouse');
    }
  }

  /**
   * Page resize event handler
   *
   * @private
   */;
  _proto24._handlePageResize = function _handlePageResize() {
    var _this24 = this;
    this.updateSize();

    // In iOS webview, if element size depends on document size,
    // it'll be measured incorrectly in resize event
    //
    // https://bugs.webkit.org/show_bug.cgi?id=170595
    // https://hackernoon.com/onresize-event-broken-in-mobile-safari-d8469027bf4d
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      setTimeout(function () {
        _this24.updateSize();
      }, 500);
    }
  }

  /**
   * Page scroll offset is used
   * to get correct coordinates
   * relative to PhotoSwipe viewport.
   *
   * @private
   */;
  _proto24._updatePageScrollOffset = function _updatePageScrollOffset() {
    this.setScrollOffset(0, window.pageYOffset);
  }

  /**
   * @param {number} x
   * @param {number} y
   */;
  _proto24.setScrollOffset = function setScrollOffset(x, y) {
    this.offset.x = x;
    this.offset.y = y;
    this.dispatch('updateScrollOffset');
  }

  /**
   * Create main HTML structure of PhotoSwipe,
   * and add it to DOM
   *
   * @private
   */;
  _proto24._createMainStructure = function _createMainStructure() {
    // root DOM element of PhotoSwipe (.pswp)
    this.element = createElement('pswp');
    this.element.setAttribute('tabindex', '-1');
    this.element.setAttribute('role', 'dialog');

    // template is legacy prop
    this.template = this.element;

    // Background is added as a separate element,
    // as animating opacity is faster than animating rgba()
    this.bg = createElement('pswp__bg', false, this.element);
    this.scrollWrap = createElement('pswp__scroll-wrap', false, this.element);
    this.container = createElement('pswp__container', false, this.scrollWrap);
    this.mainScroll.appendHolders();
    this.ui = new UI(this);
    this.ui.init();

    // append to DOM
    (this.options.appendToEl || document.body).appendChild(this.element);
  }

  /**
   * Get position and dimensions of small thumbnail
   *   {x:,y:,w:}
   *
   * Height is optional (calculated based on the large image)
   */;
  _proto24.getThumbBounds = function getThumbBounds() {
    return _getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
  }

  /**
   * If the PhotoSwipe can have continious loop
   * @returns Boolean
   */;
  _proto24.canLoop = function canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }

  /**
   * @param {PhotoSwipeOptions} options
   * @private
   */;
  _proto24._prepareOptions = function _prepareOptions(options) {
    if (window.matchMedia('(prefers-reduced-motion), (update: slow)').matches) {
      options.showHideAnimationType = 'none';
      options.zoomAnimationDuration = 0;
    }

    /** @type {PhotoSwipeOptions}*/
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultOptions, options);
  };
  return PhotoSwipe;
}(PhotoSwipeBase);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map