<?php
    /*
        Template Name: Page with block content
     */

    $data['page'] = getContext($post);

    $data['hero'] = get_field('hero');
    $data['blocks'] = get_field('content');
    $data['is_rounded'] = get_field('is_image_rounded');

    render('about', $data);
?>
