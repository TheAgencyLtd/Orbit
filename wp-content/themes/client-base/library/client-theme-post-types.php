<?php

add_action('init', 'managePostTypes');
function managePostTypes()
{
    $post_types = [];

    // solution post type
    $post_types[] = array(
        'slug' => 'case-study',
        'singular' => 'Case Study',
        'plural' => 'Case Studies',
        'menu_name' => 'Our Case Studies',
        'description' => 'Describe case studies done for clients',
        'menu_position' => '15',
        'archive' => false,
        'icon' => 'dashicons-hammer',
    );

    $post_types[] = array(
        'slug' => 'testimonial',
        'singular' => 'Testimonial',
        'plural' => 'Testimonials',
        'menu_name' => 'Testimonials',
        'description' => 'Testimonials from clients',
        'menu_position' => '15',
        'archive' => false,
        'icon' => 'dashicons-universal-access-alt',
    );


    $results = createPostTypes($post_types);
    if ($results) {
        return true;
    } else {
        throw new Exception('Failed to create post types...', 1);
    }
}//function managePostTypes

function createPostTypes($post_types)
{
    if (!is_array($post_types)) {
        return false;
    }

    foreach ($post_types as $i => $type) {
        register_post_type(
            $type['slug'],
            array(
                'labels' => array(
                    'name' => __($type['plural']),
                    'singular_name' => __($type['singular']),
                    'add_new' => _x('Add New '.$type['singular'], $type['singular']),
                    'add_new_item' => __('Add New '.$type['singular']),
                    'edit_item' => __('Edit '.$type['singular']),
                    'new_item' => __('New '.$type['singular']),
                    'all_items' => __('All '.$type['plural']),
                    'view_item' => __('View '.$type['singular']),
                    'search_items' => __('Search '.$type['plural']),
                    'not_found' => __('No '.$type['plural'].' found'),
                    'not_found_in_trash' => __('No '.$type['plural'].' found in the Trash'),
                    'parent_item_colon' => '',
                    'menu_name' => $type['menu_name'],
                ),
                'description' => $type['description'],
                //'show_in_menu' => $type['menu_location'],
                'supports' => array(
                                'title',
                                'editor',
                                'thumbnail',
                                'excerpt',
                                'page-attributes',
                ),
                'has_archive' => $type['archive'],
                'menu_icon' => $type['icon'], //16x16 png if you want an icon
                'menu_position' => $type['menu_position'],
                'public' => true,
            )
        );
    }

    return true;
} // function createPostTypes
