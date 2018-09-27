<?php

/**
 * [change logo and link for backend login].
 *
 * @return [type] [description]
 */
function change_login_page_logo_link()
{
    return get_bloginfo('url');
}
add_filter('login_headerurl', 'change_login_page_logo_link');


add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
    .acf-repeater.-row > table > tbody > tr > td, .acf-repeater.-block > table > tbody > tr > td {
        border-top-color: #8a8a8a;
    }
  </style>';
}
