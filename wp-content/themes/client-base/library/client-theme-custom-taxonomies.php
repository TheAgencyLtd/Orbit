<?php

add_action('init',  'manageTaxonomies');

function manageTaxonomies()
{

    $categories = array();

    // Example
    /*
    $categories[] = array(

        'name' => 'services', // singular, slug-type
        'slug' => 'services', // plural, slug-type
        'plural' => 'Services', // plural, title case
        'singular' => 'Service', // singular, title case
        'supports' => array('work', 'post'),
    );

    */


    createTaxonomies($categories);
}


function createTaxonomies($categories) {

    foreach ($categories as $cat){
        $labels = array (
            'name' => _x ($cat['singular'], 'taxonomy general name' ),
            'singular_name' => _x ( $cat['singular'], 'taxonomy singular name' ),
            'search_items' => __ ( 'Search '.$cat['plural'] ),
            'all_items' => __ ( 'All '.$cat['plural'] ),
            'parent_item' => __ ( 'Parent '.$cat['singular'] ),
            'parent_item_colon' => __ ( 'Parent '.$cat['singular'].':' ),
            'edit_item' => __ ( 'Edit '.$cat['singular'] ),
            'update_item' => __ ( 'Update '.$cat['singular'] ),
            'add_new_item' => __ ( 'Add New '.$cat['singular'] ),
            'new_item_name' => __ ( 'New '.$cat['singular'].' Name' ),
            'menu_name' => __ ( $cat['plural'] )

        );

        $args = array (
            'hierarchical' => true,
            'labels' => $labels,
            'show_ui' => true	,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array ('slug' => $cat['slug']),
        );

        register_taxonomy ( $cat['name'], $cat['supports'], $args );
    }
}
