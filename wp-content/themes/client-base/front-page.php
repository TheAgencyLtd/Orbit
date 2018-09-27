<?php
/**
 * Template Name: Front page
 **/

$data['page'] = getContext($post);

$data['hero'] = get_field('hero');

$data['intros'] = get_field('intro_features');

$data['discover'] = get_field('discover_group');

render('home', $data);
