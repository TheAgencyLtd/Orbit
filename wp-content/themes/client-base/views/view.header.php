<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<!--[if lt IE 9]>
	   <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/html5.js"></script>
	<![endif]-->
    <?php wp_head(); ?>
    <?php the_field('header_scripts', 'options') ?>
    <?php
        if( isset($_COOKIE['cookie_accept']) && $_COOKIE['cookie_accept'] === 'true' ){
            the_field('google_analytics', 'options');
        }
    ?>
</head>

<body <?php body_class(); ?>>
    <?php the_field('after_body_scripts', 'options') ?>
    <section id="" class="main-container">
    	<a class="skip-link screen-reader-text hide" href="#content">Skip to content</a>

        <header class="main-header" id="masthead">
            <div class="row">
                <div class="columns small-12 medium-3 large-5">
                    <a href="/">
                        <img class="logo-image" src="<?=IMG_PATH?>orbit_logo.png" alt="<?php echo  bloginfo('name'); ?>" width="144" height="42" />
                    </a>
                </div>
                <div class="columns small-12 medium-9 large-7">
                    <nav class="column main-menu-container">
                        <?php include_once PARTIAL.'burger.php' ?>
                        <?php
                            wp_nav_menu(
                                array(
                                    'menu' => 'Main',
                                    'menu_class' => 'main-menu',
                                    'container' => false
                                )
                            );
                        ?>
                    </nav>
                </div>
            </div>
        </header>
    	<main id="content" class="main-container">
