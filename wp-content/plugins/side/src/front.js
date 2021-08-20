import './style.scss';
import {render} from '@wordpress/element';
import PropertyList from './components/property-list';

/**
 * Renders a PropertyList component in place of all property list block placeholders
 * on page load.
 */
function renderPropertyLists() {
	const elements = document.querySelectorAll('.wp-block-side-property-list');

	elements.forEach((element) => {
		render(
			<PropertyList />,
			element
		);
	});
}

document.addEventListener('DOMContentLoaded', renderPropertyLists);
