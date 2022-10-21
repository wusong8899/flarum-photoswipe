<?php

namespace SychO\PhotoSwipe;

use s9e\TextFormatter\Configurator;

class MarkNormalPostImages
{
    const TAGS = ['IMG' => 'src', 'UPL-IMAGE-PREVIEW' => 'url'];

    public function __invoke(Configurator $config)
    {
        foreach (self::TAGS as $tagName => $src) {
            $tag = $config->tags[$tagName];

            if ($tag) {
                $tag->template = '<a data-pswp="" href="{@'.$src.'}">'.$tag->template.'</a>';
            }
        }
    }
}
