<?php
/**
 * Renders the view for the page.
 *
 * This can be overwritten using Wordpress Template Hierarchy
 * (https://developer.wordpress.org/themes/basics/template-hierarchy/)
 * ie. Create a file in the form page-[pageName].php
 */

$data['post'] = getContext($post);
$postType = $data['post']->post_type;
if ($postType == 'post') {
    $pageName = 'single-post';
} else {
    $pageName = 'single-'.$postType;
}

$args = array(
    'post_type' => $postType,
    'posts_per_page' => 3,
    'post__not_in' =>   [$post->ID],
);

$data['related'] = queryPosts($args);

$pageView = get_template_directory().'/views/view.'.$pageName.'.php';

//get list of categories
$categories = get_categories(array(
    'hide_empty' => false,
    'orderby'    => 'term_order',
    'order'      => 'ASC'
));

$data['categories'] = $categories;

//get post categories
$postCategories = get_the_category($post->ID);

if( $postCategories ) {
    foreach ($postCategories as $postCategory) {
        $data['cat'][] = $postCategory->slug;
    }
}else {
    $data['cat'] = 'all'; //the default category
}


// check if the page has it's own view
if (is_readable($pageView)) {
    // use page view
    render($pageName, $data);
} else {
    // default to default view
    render('single', $data);
}
