<?php

namespace App\Transform\Presets;

class FieldRelationship
{
    /**
     * Acf Field Relationship
     * 
     * Sanitise $raw data
     * 
     * @param $raw[...]
     * @return [...]
     */
    public static function get($raw) 
    {
        // map array and sanitise data
        return array_map(function ($post) {
            $data = (object) null;

            // ID
            $data->ID = $post->ID;

            // title
            $data->title = $post->post_title;

            // editor
            $data->editor = $post->excerpt;

            // image
            $data->image = get_post_thumbnail_id($post->ID);

            // link
            $data->link = get_the_permalink($post->ID);

            return $data;
        }, $raw);
    }
}
