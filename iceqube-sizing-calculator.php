<?php
/**
 * Plugin Name:[iceqube_calculator]
 * Description: A custom calculator for IceQube sizing embedded in WordPress.
 * Version: 1.0
 * Author: Aleksandra Wilk
 */

if (!defined('ABSPATH')) {
    exit;
}



function iceqube_calculator_enqueue_assets() {
    // Registration of styles
    wp_enqueue_style('iceqube-calculator-style', plugin_dir_url(__FILE__) . 'assets/css/sizing-calculator.css', array(), '1.0', 'all');
    // Registration  of scripts
    wp_enqueue_script('iceqube-calculator-data', plugin_dir_url(__FILE__) . 'assets/js/data.js', array(), '1.0', true);
    wp_enqueue_script('iceqube-calculator-calculator', plugin_dir_url(__FILE__) . 'assets/js/calculator.js', array(), '1.0', true);
    wp_enqueue_script('iceqube-calculator-selectors', plugin_dir_url(__FILE__) . 'assets/js/selectors.js', array(), '1.0', true);
    wp_enqueue_script('iceqube-calculator-script', plugin_dir_url(__FILE__) . 'assets/js/sizing-calculator.js', array('iceqube-calculator-data'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'iceqube_calculator_enqueue_assets');

// Shortcodeto render calculator
function iceqube_render_calculator() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/calculator-template.php';
    return ob_get_clean();
}
add_shortcode('iceqube_calculator', 'iceqube_render_calculator');
