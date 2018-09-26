<?php
/**
 * Clean up head.+
 * ----------------------------------------------------------------------------
 */


/*
    Remove embedded scripts
*/
add_action('init', 'disable_embeds_init', 9999);
function disable_embeds_init()
{
    // Remove the REST API endpoint.
    remove_action('rest_api_init', 'wp_oembed_register_route');

    // Turn off oEmbed auto discovery.
    // Don't filter oEmbed results.
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);

    // Remove oEmbed discovery links.
    remove_action('wp_head', 'wp_oembed_add_discovery_links');

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action('wp_head', 'wp_oembed_add_host_js');
}

/**
 * JavaScript Detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
function javascript_detection()
{
    echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action('wp_head', 'javascript_detection', 0);

/**
 * Remove Comments menu from CMS
 * @return [type] [description]
 */
function custom_menu_page_removing() {
    remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'custom_menu_page_removing' );


/**
 * Remove WP Version
 */

function removeVersion(){
	return "";
}
add_filter('the_generator', 'removeVersion');

function hideWrongLogin(){
	return 'Wrong username or password';
}
add_filter('login_errors', 'hideWrongLogin');

/**
 * Replace login logo
 */

 function changeLoginLogo() { ?>
     <style type="text/css">
        #login h1 a, .login h1 a {
			height: 130px;
	 		width: 320px;
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/images/snc.svg);
 			background-size: 100%;
 			background-repeat: no-repeat;
        }
     </style>
 <?php }
 add_action( 'login_enqueue_scripts', 'changeLoginLogo' );

/*
  * Only allow Admin users to view WP REST API JSON Endpoints
  */
function restrictAPIAccessToAdminOnly( $access ) {
 	if( ! is_user_logged_in() || ! current_user_can( 'manage_options' ) ) {
 		return new WP_Error( 'rest_cannot_access', __( 'Only authenticated users can access the REST API.', 'disable-json-api' ), array( 'status' => rest_authorization_required_code() ) );
 	}
 	return $access;
}
add_filter( 'rest_authentication_errors', 'restrictAPIAccessToAdminOnly' );
