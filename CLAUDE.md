# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 Project Overview

**Extension**: Flarum PhotoSwipe Integration  
**Purpose**: Adds PhotoSwipe v5 lightbox gallery functionality to Flarum forum images  
**Tech Stack**: PHP 8.0+, TypeScript, PhotoSwipe 5.x, Vite build system  
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

**Development Dependencies**:
- Modern Vite build system
- TypeScript with Flarum type definitions
- Oxlint for fast code quality checks
- Flarum testing framework for backend tests

The extension is designed to be lightweight with minimal dependencies while providing robust PhotoSwipe integration for Flarum forums.