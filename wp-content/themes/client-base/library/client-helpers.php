<?php

/**
 * render template for pages.
 *
 * @param [type] $file          [name of the view we want to render]
 * @param [type] $pageVariables [the variables we pass in to the view]
 */
function render($file, $pageVariables = array(), $header = null, $footer = null)
{
    extract($pageVariables);
    include_once DIR_PATH.'views/view.header.php';
    include_once DIR_PATH.'views/view.'.$file.'.php';
    include_once DIR_PATH.'views/view.footer.php';
}

/**
 * based on args query the posts.
 *
 * @param [array] $args      [options how to query posts ]
 * @param bool    $paginated [defile whether we want to print out pagination to reset the query]
 *
 * @return [array] [array of results]
 */
function queryPosts($args, $paginated = false)
{
    if (!is_array($args)) {
        return false;
    }

    $has_posts = false;

    $query = new WP_Query($args);

    global $wp_query;
    // // Put default query object in a temp variable
    $tmp_query = $wp_query;
    // // Now wipe it out completely
    $wp_query = null;
    // // Re-populate the global with our custom query
    $wp_query = $query;

    $posts = $query->posts;
    $number = count($posts);

    foreach ($posts as $key => $post) {
        $post = transformValue($post);
        if ($number == ($key + 1)) {
            $post->order = 'last';
        }
    }
    if (!$paginated) {
        wp_reset_query();
    }

    if ($number > 0) {
        $has_posts = true;
    }

    return array(
        'has_posts' => $has_posts,
        'count' => $number,
        'results' => $posts,
    );
}
/**
 * get basic information of a post or a page.
 *
 * @param [object] $post [the object that we got from a page or a post]
 *
 * @return [array] [transformed value of the page or post]
 */
function getContext($post)
{
    if (is_null($post)) {
        return false;
    }

    return transformValue($post);
}
/**
 * Transform passed in object to a better-read object.
 *
 * @param [type] $post [the object that we got from a page or a post]
 *
 * @return [object] [description]
 */
function transformValue($post)
{
    $post->link = get_permalink($post->ID);
    $post->post_content = apply_filters('the_content', $post->post_content);
    $post->thumbnail = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
    $post->pretty_date = date('d/m/y', strtotime($post->post_date));

    if($post->post_excerpt == '' ) {
        $postContent = wp_strip_all_tags($post->post_content);
        $post->post_excerpt = wp_trim_words($postContent, 50);
    }

    return $post;
}

/**
 * get post image based on size.
 *
 * @param [type] $post_id [ID of the post we want to get the image]
 * @param [type] $size    [size of the image]
 *
 * @return [type] [source of queried image]
 */
function getImage($post_id, $size)
{
    $attach_ID = get_post_thumbnail_id($post_id);
    if ($attach_ID) {
        $img = wp_get_attachment_image_src($attach_ID, $size);

        return $img[0];
    } else {
        return IMG_PATH.'fallback.jpg';
    }
}

function addParaToIframe($iframe) {

    // use preg_match to find iframe src
    preg_match('/src="(.+?)"/', $iframe, $matches);
    $src = $matches[1];


    // add extra params to iframe src
    $params = array(
        'controls'    => 1,
        'hd'        => 1,
        'autohide'    => 1
    );

    $data_src = add_query_arg($params, $src);
    $new_src = '';

    $iframe = str_replace($src, $new_src, $iframe);


    // add extra attributes to iframe html
    $attributes = ' frameborder="0"';
    $attributes .= ' class="lazyload"';
    $attributes .= ' data-src="'.$data_src.'"';

    $iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);

    return $iframe;
}

/**
 * Function to debug
 * @param  [type]  $x    [variables to debug]
 * @param  boolean $exit [whether to exit after the debug]
 * @return [type]        []
 */
function dd($x, $exit = false) {
    if (!is_admin()) {
        echo '<pre class="inspect"><small style="font-size:14px;">';
        print_r($x);
        echo '</small></pre>';

        if ($exit === true) {
            exit;
        }
    }
}