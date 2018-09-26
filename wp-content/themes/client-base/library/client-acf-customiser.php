<?php

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(
        array(
            'page_title' => 'Business Options',
            'menu_title' => 'Business Options',
            'menu_slug' => 'business-options',
            'capability' => 'edit_posts',
            'redirect' => false
        )
    );

    acf_add_options_page(
        array(
            'page_title' => 'Admin Settings',
            'menu_title' => 'Admin Settings',
            'menu_slug' => 'admin-settings',
            'capability' => 'edit_posts',
            'redirect' => false
        )
    );
}
