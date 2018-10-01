<?php

$category = get_queried_object();

$data['cat'][] = $category->slug;

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$paginated = true;


$args = array(
    'post_type' => 'post',
    'category_name' => $category->slug,
    'paged' =>   $paged,
);

$data['articles'] = queryPosts($args, $paginated);
$data['pagination'] = paginate();

$categories = get_categories(array(
    'hide_empty' => false,
    'orderby'    => 'term_order',
    'order'      => 'ASC'
));

$data['categories'] = $categories;

//dd($data);

render('blog', $data);
?>
