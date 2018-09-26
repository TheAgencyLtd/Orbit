<?php
    /*
        Template Name: Industry Page
     */

    $data['hero'] = get_field('hero');
    $data['cases'] = get_field('related_case_study');
    $data['testimonials'] = get_field('testimonial');
    $data['blocks'] = get_field('block');

    render('industry', $data);
?>
