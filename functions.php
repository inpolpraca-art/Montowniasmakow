<?php
function montownia_enqueue_assets() {
    $theme_uri = get_template_directory_uri();
    $theme_ver = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'montownia-style',
        $theme_uri . '/style.css',
        array(),
        $theme_ver
    );

    $script_handle = '';

    if (is_front_page() || is_page_template('page-home-new.php')) {
        $script_handle = 'montownia-home';
        wp_enqueue_script(
            $script_handle,
            $theme_uri . '/scripts/main.js',
            array(),
            $theme_ver,
            true
        );
    } 
    elseif (is_page('menu') || is_page_template('page-menu-new.php')) {
        $script_handle = 'montownia-menu';
        wp_enqueue_script(
            $script_handle,
            $theme_uri . '/scripts/main-menu.js',
            array(),
            $theme_ver,
            true
        );
    } 
    elseif (is_page('polityka-pryvatnosci') || is_page_template('page-privacy-new.php')) {
        $script_handle = 'montownia-privacy';
        wp_enqueue_script(
            $script_handle,
            $theme_uri . '/scripts/main-privacy.js', 
            array(),
            $theme_ver,
            true
        );
    }
    elseif (is_page('catering') || is_page_template('page-catering-new.php')) {
        $script_handle = 'montownia-catering';
        wp_enqueue_script(
            $script_handle,
            $theme_uri . '/scripts/main-catering.js', 
            array(),
            $theme_ver,
            true
        );
    }

    if (!empty($script_handle)) {
        wp_localize_script($script_handle, 'wpData', array(
            'themeUrl' => $theme_uri,
        ));
    }
}
add_action('wp_enqueue_scripts', 'montownia_enqueue_assets');

function montownia_script_as_module($tag, $handle, $src) {
    if (strpos($handle, 'montownia-') === 0 && $handle !== 'montownia-style') {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
add_filter('script_loader_tag', 'montownia_script_as_module', 10, 3);