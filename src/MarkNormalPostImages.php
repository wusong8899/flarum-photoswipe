<?php

namespace SychO\PhotoSwipe;

use s9e\TextFormatter\Configurator;

class MarkNormalPostImages
{
    public const TAGS = ['IMG' => 'src', 'UPL-IMAGE-PREVIEW' => 'url'];

    public function __invoke(Configurator $config)
    {
        foreach (self::TAGS as $tagName => $src) {
            if ($config->tags->offsetExists($tagName)) {
                $tag = $config->tags->get($tagName);
                $tag->template = '<a data-pswp="" href="{@' . $src . '}">' . $tag->template . '</a>';
            }
        }
    }
}
