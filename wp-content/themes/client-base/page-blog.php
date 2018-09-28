<?php
    /**
     * Template Name: Blog Page
     */

    $data['page'] = getContext($post);
    $data['hero'] = get_field('hero');

    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
    $paginated = true;

    $args = array(
        'post_type' => 'post',
        'paged' =>   $paged,
    );

    $data['articles'] = queryPosts($args, $paginated);
    $data['pagination'] = paginate();

    render('blog', $data);
?>
