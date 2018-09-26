<?php
/**
 * Renders the view for the page
 *
 * This can be overwritten using Wordpress Template Hierarchy
 * (https://developer.wordpress.org/themes/basics/template-hierarchy/)
 * ie. Create a file in the form page-[pageName].php
 */

$data['page'] = getContext($post);
$pageName = $data['page']->post_name;
$pageView = get_template_directory().'/views/'.$pageName.'.php';

// check if the page has it's own view
if (is_readable($pageView)) {
    // use page view
    render($pageName, $data);
} else {
    // default to default view
    render('default', $data);
}
