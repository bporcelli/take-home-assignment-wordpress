import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

/**
 * Registers the Property List block type.
 * Other metadata like the title, description, etc. is defined in block.json.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'side/property-list', {
	edit: Edit,
	save: Save
} );
