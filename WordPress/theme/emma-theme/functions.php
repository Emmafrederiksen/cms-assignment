<?php
 
function wptheme_script_enqueue() {
 
    wp_enqueue_style(
        'customstyle',
        get_stylesheet_uri(),
        array(),
        '1.0',
        'all'
    );
 
}
 
add_action('wp_enqueue_scripts', 'wptheme_script_enqueue');
 
function my_register_cakes_post_type() {
    register_post_type('cake', [
        'labels' => [
            'name' => 'Cakes',
            'singular_name' => 'Cake',
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // important for Gutenberg + REST API
        'menu_icon' => 'dashicons-buddicons-community',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'rewrite' => ['slug' => 'cakes'],
    ]);
}

add_action('init', 'my_register_cakes_post_type');
 
function myportfolio_show_cakes_on_home( $query ) {
    if ( !is_admin() && $query->is_main_query() ) {
        $query->set( 'post_type', array( 'post', 'cake' ) );
    }
}
add_action( 'pre_get_posts', 'myportfolio_show_cakes_on_home' );
 
?>