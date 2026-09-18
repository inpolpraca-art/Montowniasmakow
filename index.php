<?php
/**
 * Main fallback template for Montownia Smaków.
 */

// 1. Glavnaya stranica
if ( is_front_page() || is_home() ) {
    include get_template_directory() . '/page-home-new.php';
    return;
}

// 2. Stranica Menu
if ( is_page('menu') ) {
    include get_template_directory() . '/page-menu-new.php';
    return;
}

// 3. Stranica Politiki Konfidencial'nosti
if ( is_page('polityka-prywatnosci') || is_page('privacy') ) {
    include get_template_directory() . '/page-privacy-new.php';
    return;
}

// Esli otkruta lyubaya drugaya stranica — perenapravlyaem na glavnuyu
wp_redirect( home_url() );
exit;