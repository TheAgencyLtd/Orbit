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
