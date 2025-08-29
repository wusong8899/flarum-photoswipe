<?php

namespace SychO\PhotoSwipe;

use s9e\TextFormatter\Configurator;

class MarkNormalPostImages
{
    public const TAGS = ['IMG' => 'src', 'UPL-IMAGE-PREVIEW' => 'url'];

    public function __invoke(Configurator $config)
    {
        // Note: This class is kept for compatibility but no longer modifies image templates
        // Images are now handled directly by the ImageCarousel component
        // The carousel extracts raw img tags instead of requiring PhotoSwipe wrapping
        
        // For future: This could add custom attributes to img tags if needed
        // foreach (self::TAGS as $tagName => $src) {
        //     if ($config->tags->offsetExists($tagName)) {
        //         $tag = $config->tags->get($tagName);
        //         // Add carousel-compatible attributes if needed
        //     }
        // }
    }
}
