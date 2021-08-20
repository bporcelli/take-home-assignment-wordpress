<?php
/**
 * Plugin Name: Side
 * Description: Provides a block to display a list of properties from SimplyRETS.
 * Version: 1.0.0
 * Author: Side
 * License: GPLv2 or later
 * Text Domain: side
 */

/**
 * Registers the Property List block using the metadata loaded from the `block.json` file.
 */
function side_property_list_block_init() {
	register_block_type_from_metadata( __DIR__ );
}

add_action( 'init', 'side_property_list_block_init' );
