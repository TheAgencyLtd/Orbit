<?php
/**
 * Load theme scripts in the footer
 */
/* If Jquery is needed */
function client_load_theme_files_with_jquery() {
    // If stylesheet is in browser cache, load it the traditional way
    // Otherwise, inline critical CSS and load full stylesheet asynchronously
    // See keel_initialize_theme_detects()
    if ( isset($_COOKIE['fullCSS']) && $_COOKIE['fullCSS'] === 'true' ) {
        wp_enqueue_style( 'main-stylesheet', THEME_PATH.'assets/stylesheets/foundation.css', array(), '1.1', 'all' );
    }
    // Load JavaScript file
    wp_deregister_script( 'jquery' );
    wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js', array(), '2.1.0', true );

    // If you'd like to cherry-pick the foundation components you need in your project, head over to gulpfile.js and see lines 35-54.
    wp_register_script( 'foundation', THEME_PATH.'assets/javascript/foundation.js', array('jquery'), '1.1', true );


    wp_localize_script('foundation', 'ajax', array(
       'url' => admin_url('admin-ajax.php'),
    ));
    wp_enqueue_script('foundation');

    wp_dequeue_style('bodhi-svgs-attachment');
    wp_dequeue_style('contact-form-7');

    //deregister script of other plugins
    //wp_deregister_script('ssba');
}

/* If Jquery is NOT needed */
function client_load_theme_files_no_jquery() {
    // If stylesheet is in browser cache, load it the traditional way
    // Otherwise, inline critical CSS and load full stylesheet asynchronously
    // See keel_initialize_theme_detects()
    if ( isset($_COOKIE['fullCSS']) && $_COOKIE['fullCSS'] === 'true' ) {
        wp_enqueue_style( 'main-stylesheet', THEME_PATH.'assets/stylesheets/foundation.css', array(), '1.1', 'all' );
    }

    //wp_deregister_script( 'jquery' );
    //wp_deregister_script( 'foundation' );

    // If you'd like to cherry-pick the foundation components you need in your project, head over to gulpfile.js and see lines 35-54.
    wp_register_script( 'foundation', THEME_PATH.'assets/javascript/foundation.js', array(), '1.1', true );


    wp_localize_script('foundation', 'ajax', array(
       'url' => admin_url('admin-ajax.php'),
    ));
    wp_enqueue_script('foundation');

    //dequeue styles
    wp_dequeue_style('bodhi-svgs-attachment');
    wp_dequeue_style('contact-form-7');

    //deregister script of other plugins
    wp_deregister_script('contact-form-7');

}
add_action('wp_enqueue_scripts', 'client_load_theme_files_no_jquery'); //if jquery is NOT needed
//add_action('wp_enqueue_scripts', 'client_load_theme_files_with_jquery'); //if jquery is needed


/**
 * Include feature detect inits in the header
 */
function client_initialize_theme_detects() {
?>
    <?php
        if (!isset($_COOKIE['fullCSS']) || $_COOKIE['fullCSS'] !== 'true' ) {
    ?>
        <script>
            <?php include_once DIR_PATH.'assets/javascript/detect.js' ?>
        </script>
        <script>
            var stylesheet = loadCSS('<?php echo THEME_PATH. "assets/stylesheets/foundation.css?ver=1.1"; ?>');
            onloadCSS( stylesheet, function() {
                var expires = new Date(+new Date + (7 * 24 * 60 * 60 * 1000)).toUTCString();
                document.cookie = 'fullCSS=true; expires=' + expires;
            });
        </script>
        <style>
            <?php include_once DIR_PATH.'assets/stylesheets/critical.php' ?>
        </style>
    <?php
        }
}
add_action('wp_head', 'client_initialize_theme_detects', 30);

/**
 * Include script inits in the footer
 */
function client_initialize_theme_scripts() {
    // If cookie isn't set, load a noscript fallback
    if ( !isset($_COOKIE['fullCSS']) || $_COOKIE['fullCSS'] !== 'true' ) {
    ?>
        <noscript>
            <link href='<?php echo THEME_PATH."assets/stylesheets/foundation.css"; ?>' rel='stylesheet' type='text/css'>
        </noscript>
    <?php
    }
}
add_action('wp_footer', 'client_initialize_theme_scripts', 30);

/**
 * Add defer to the scrip tag
 */
function client_add_attribute_script_tags($tag, $handle) {
    //var_dump($handle);
    if ('jquery' === $handle || 'foundation' === $handle){
        return str_replace( '<script ', '<script defer ', $tag );
    }elseif( 'google-recaptcha' == $handle ) {
        return str_replace( '<script ', '<script defer ', $tag );
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'client_add_attribute_script_tags', 10, 2 );
