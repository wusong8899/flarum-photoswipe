# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 Project Overview

**Extension**: Flarum PhotoSwipe Integration with Glide Carousel  
**Purpose**: Adds PhotoSwipe v5 lightbox gallery functionality to Flarum forum images, with Glide.js carousel for multi-image posts  
**Tech Stack**: PHP 8.0+, TypeScript, PhotoSwipe 5.x, Glide.js 3.6.x, Vite build system  
**Namespace**: `SychO\PhotoSwipe`

## 🛠️ Development Commands

### Frontend Development
```bash
cd js/
pnpm install                     # Install dependencies
pnpm run dev                     # Build both admin and forum (development)
pnpm run dev:admin               # Build admin only (development)
pnpm run dev:forum               # Build forum only (development)
pnpm run dev:watch               # Watch mode for both targets
pnpm run build                   # Production build for both targets
pnpm run lint                    # Run oxlint
pnpm run lint:fix                # Auto-fix linting issues
```

### Backend Development
```bash
# PHP testing (from extension root)
composer install                # Install dependencies
composer test                   # Run all tests (unit + integration)
composer test:unit              # Unit tests only
composer test:integration       # Integration tests only
composer test:setup             # Setup test database (first time only)

# Flarum integration
php flarum cache:clear          # Clear cache after changes
php flarum assets:publish       # Republish assets
```

## 🏗️ Architecture Overview

### Extension Integration Pattern

The extension uses Flarum's dual-phase approach:

1. **Backend Formatter Configuration** (`extend.php`):
   - Registers `MarkNormalPostImages` to wrap IMG/UPL-IMAGE-PREVIEW tags with PhotoSwipe anchors
   - Adds `data-pswp=""` attributes and href links to image sources

2. **Frontend PhotoSwipe Integration** (`js/src/forum/index.ts`):
   - Initializes PhotoSwipe lightbox instances per post/discussion
   - Handles dynamic image loading and dimension detection
   - Manages gallery synchronization with Swiper galleries
   - Integrates Glide.js carousel for posts with multiple images using Flarum's `contentItems()` API

### Build System Architecture

**Dual Vite Configuration**:
- `vite.config.admin.mts` - Admin panel build (currently no admin components)
- `vite.config.forum.mts` - Forum frontend build with PhotoSwipe integration
- Custom `flarumModuleExports()` plugin for Flarum compatibility
- External dependencies: Flarum core, jQuery, Mithril

**Key Build Features**:
- TypeScript compilation with `flarum-tsconfig`
- Oxlint integration for fast linting
- Tree-shaking optimization
- Source map generation
- IIFE output format for Flarum compatibility

### PhotoSwipe Integration Details

#### Smart Gallery Detection
The extension dynamically creates PhotoSwipe instances based on:
- Post/discussion ID context (`data-id` attributes)
- Extension compatibility detection (`ianm-synopsis`, `datitisev-post-galleries`)
- Modern CSS selector support (`:has()` with fallbacks)

#### Extension Compatibility Patterns
```typescript
// Detects and handles multiple extension scenarios
const hasGalleryExtension = 'datitisev-post-galleries' in flarum.extensions;
const hasIanmSynopsis = 'ianm-synopsis' in flarum.extensions;

// Dynamic selector building for different contexts
selectors.push(`[data-id="${dataId}"] .Post-body:not(:has(.swiper))`);
```

#### Gallery Synchronization
- Automatically syncs PhotoSwipe slide changes with Swiper gallery instances
- Handles multiple galleries per page with individual state management
- Prevents conflicts between different gallery types

### Backend Formatter Integration

**Image Tag Processing** (`MarkNormalPostImages.php`):
```php
public const TAGS = ['IMG' => 'src', 'UPL-IMAGE-PREVIEW' => 'url'];

// Wraps existing tags with PhotoSwipe-compatible anchors
$tag->template = '<a data-pswp="" href="{@' . $src . '}">' . $tag->template . '</a>';
```

This creates the necessary HTML structure for PhotoSwipe to detect and process images.

### Component Lifecycle Management

The extension carefully manages PhotoSwipe instances to prevent memory leaks:

1. **Initialization** (`oninit`): Creates PhotoSwipe lightbox instance
2. **DOM Updates** (`oncreate`/`onupdate`): Sets image dimensions and initializes lightbox
3. **Cleanup** (`onremove`): Destroys lightbox instance and clears references

### Optional Dependencies Integration

The extension gracefully handles optional Flarum extensions:
- **flarum/markdown**: Standard markdown image processing
- **flarum/bbcode**: BBCode image tag support
- **datitisev/flarum-post-galleries**: Gallery-specific PhotoSwipe instances
- **fof/upload**: Upload extension image preview support

## 🔧 Key Technical Patterns

### Image Dimension Detection
```typescript
const setDimensions = () => {
  $a.attr('data-pswp-width', el.naturalWidth);
  $a.attr('data-pswp-height', el.naturalHeight);
};
```
PhotoSwipe requires image dimensions for proper layout calculations.

### Lazy Loading Compatibility
The extension handles both loaded and loading images:
- Immediate initialization for `el.complete && el.naturalWidth`
- `onload` event handling for lazy-loaded images
- Dynamic lightbox refresh for updated content

### Modern CSS Selector Fallbacks
Uses try-catch for `:has()` selector support with graceful degradation for older browsers.

## 🎠 Glide Carousel Integration

### Architecture Pattern
The extension integrates Glide.js carousel using Flarum's official component architecture:

1. **Flarum `contentItems()` Extension**: Uses the ItemList pattern to add carousel components
2. **Component Lifecycle Management**: Proper Mithril component lifecycle with cleanup
3. **Dynamic Image Detection**: Automatically shows carousel for posts with 2+ images

### Key Components

#### PhotoSwipeGlideComponent (`js/src/forum/components/PhotoSwipeGlideComponent.tsx`)
- Full Mithril component with proper lifecycle hooks
- Handles Glide.js initialization and destruction
- Manages carousel state and synchronization with PhotoSwipe
- Includes error handling and retry mechanisms

#### GlideConfig Utility (`js/src/forum/utils/GlideConfig.ts`)
- Configuration management for different screen sizes and image counts
- Carousel instance management and cleanup
- Image extraction from post DOM elements
- Responsive breakpoint handling

### Extension Integration Pattern

```typescript
// Extends CommentPost using Flarum's contentItems API
extend(prototype, 'contentItems', function (items) {
  if (this.attrs?.post && this.glidePostId) {
    items.add(
      'photoswipe-glide',
      m(PhotoSwipeGlideComponent, {
        postId: postId,
        discussionId: this.glideDiscussionId,
        enableAutoplay: false
      }),
      -10 // Lower priority to render after main content
    );
  }
});
```

### Carousel Features
- **Responsive Design**: Adapts to mobile, tablet, and desktop viewports
- **Accessibility**: Full ARIA support and keyboard navigation
- **Performance**: Only renders for posts with multiple images
- **Integration**: Syncs with PhotoSwipe lightbox state
- **Memory Management**: Proper cleanup to prevent memory leaks

### Styling Architecture
The extension uses a modular LESS approach:
- `less/forum.less` - Main entry point importing PhotoSwipe and Glide styles
- `less/photoswipe.less` - PhotoSwipe-specific customizations
- `less/glide.less` - Glide carousel wrapper and integration styles
- `less/glide-core.less` - Core Glide.js styles (replaces external CSS)
- `less/glide-theme.less` - Themed controls and navigation elements

The styling system supports:
- Dark mode compatibility with CSS custom properties
- Responsive design with mobile-first breakpoints
- Flarum theme integration using CSS variables
- Smooth animations and hover effects

## 🧪 Testing Architecture

**PHPUnit Configuration**:
- Separate unit and integration test configurations
- Database setup for integration tests
- Flarum testing framework integration

**Test Structure**:
- `tests/unit/` - Unit tests for PHP classes
- `tests/integration/` - Full Flarum integration tests
- `tests/fixtures/` - Test data and mock objects

## 📦 Extension Dependencies

**Core Requirements**:
- `flarum/core: ^1.5.0`
- `photoswipe: ^5.3.2`
- `@glidejs/glide: ^3.6.2`

**Development Dependencies**:
- Modern Vite build system
- TypeScript with Flarum type definitions
- Oxlint for fast code quality checks
- Flarum testing framework for backend tests

The extension is designed to be lightweight with minimal dependencies while providing robust PhotoSwipe integration for Flarum forums.

## 🏛️ Key Architectural Decisions

### Why Flarum's `contentItems()` Pattern
The extension uses Flarum's official `contentItems()` extension pattern rather than DOM manipulation because:
- **API Compatibility**: Follows Flarum's recommended extension patterns
- **Update Safety**: Less likely to break with Flarum core updates  
- **Performance**: Uses Mithril's native rendering system
- **Maintainability**: Cleaner, more predictable code structure

### Component Lifecycle Strategy
- **Lazy Initialization**: Glide instances are only created when needed
- **DOM-Ready Pattern**: Components find their target elements after Mithril rendering
- **Memory Safety**: Comprehensive cleanup in `onremove` and `onbeforeremove` hooks
- **Error Recovery**: Graceful fallbacks when initialization fails

### Extension Compatibility Design
The codebase dynamically detects and adapts to other Flarum extensions:
```typescript
const hasGalleryExtension = 'datitisev-post-galleries' in flarum.extensions;
const hasIanmSynopsis = 'ianm-synopsis' in flarum.extensions;
```

This allows the PhotoSwipe integration to work seamlessly alongside:
- Post Galleries extension (different selectors for gallery vs individual images)
- Synopsis extension (handles discussion list items)
- Upload extension (processes UPL-IMAGE-PREVIEW tags)

### Build System Choices
- **Vite over Webpack**: Modern build tooling with faster development builds
- **TypeScript**: Full type safety with Flarum's official type definitions
- **Oxlint**: Fast linting for rapid development feedback
- **Dual Target Builds**: Separate admin/forum builds for optimal bundle sizes