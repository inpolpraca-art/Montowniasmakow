<?php
/**
 * Main fallback template for Montownia Smaków.
 */

if ( is_front_page() || is_home() ) {
    include get_template_directory() . '/page-home-new.php';
    return;
}

if ( is_page('menu') ) {
    include get_template_directory() . '/page-menu-new.php';
    return;
}

if ( is_page('polityka-prywatnosci') || is_page('privacy') ) {
    include get_template_directory() . '/page-privacy-new.php';
    return;
}

if ( is_page('catering') ) {
    include get_template_directory() . '/page-catering-new.php';
    return;
}

wp_redirect( home_url() );
exit;