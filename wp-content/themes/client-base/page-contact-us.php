<?php

/*
    Template Name: Contact us
 */

$data['page']= getContext($post);

$fields = get_fields();

$data = array_merge($data, $fields);


render('contact', $data);
