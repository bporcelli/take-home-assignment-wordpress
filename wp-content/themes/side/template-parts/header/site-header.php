<?php
/**
 * Displays the site header.
 *
 * @package WordPress
 * @subpackage Side
 * @since 1.0.0
 */

$wrapper_classes  = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= true === get_theme_mod( 'display_title_and_tagline', true ) ? ' has-title-and-tagline' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';
?>

<header id="masthead" class="<?php echo esc_attr( $wrapper_classes ); ?>" role="banner">
	<?php if ( is_singular( 'page' ) ) : ?>
		<h1 class="entry-title"><?php the_title(); ?></h1>
	<?php endif; ?>
</header><!-- #masthead -->
