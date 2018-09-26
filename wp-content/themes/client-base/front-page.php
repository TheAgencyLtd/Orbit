<?php

/**
 * Renders the view for the page
 *
 * This can be overwritten using Wordpress Template Hierarchy
 * (https://developer.wordpress.org/themes/basics/template-hierarchy/)
 * ie. Create a file in the form page-[pageName].php
 *
 **/

$data['page'] = getContext($post);

$data['hero'] = get_field('hero');

$data['intro'] = get_field('content_block');

$data['approach'] = get_field('approach');

$data['options'] = get_field('options');

$data['cases'] = get_field('related_case_study');

$data['testimonials'] = get_field('testimonial');

$data['blocks'] = get_field('block');

render('home', $data);
