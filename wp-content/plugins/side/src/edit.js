import PropertyList from './components/property-list';
import {useBlockProps} from "@wordpress/block-editor";

/**
 * Returns the element to render when the block is used in the block editor.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<PropertyList/>
		</div>
	);
}
