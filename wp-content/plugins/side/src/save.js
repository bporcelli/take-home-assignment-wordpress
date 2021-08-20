import {useBlockProps} from '@wordpress/block-editor';
import PropertyListPlaceholder from "./components/property-list-placeholder";

/**
 * Returns the markup to save into post_content.
 * For the property list block, we just save a placeholder div which gets replaced
 * on page load with a PropertyList component.
 *
 * @return {WPElement} Element to render.
 */
export default function Save() {
	const props = useBlockProps.save({
		className: 'property-list',
	});

	return (
		<div {...props}>
			<PropertyListPlaceholder numItems="9" />
		</div>
	);
}
