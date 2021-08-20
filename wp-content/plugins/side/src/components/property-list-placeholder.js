import {Component} from '@wordpress/element';

/**
 * Placeholder for property list.
 * Displayed until properties are retrieved from SimplyRETS API or local storage.
 */
class PropertyListPlaceholder extends Component {
	render() {
		const numPlaceholders = this.props.numItems;
		const placeholders = [];

		for (let i = 0; i < numPlaceholders; i++) {
			placeholders.push((
				<div className="property">
					<div className="placeholder placeholder-image property-image"></div>
					<div className="placeholder placeholder-text"></div>
					<div className="placeholder placeholder-text"></div>
					<div className="placeholder placeholder-text"></div>
				</div>
			));
		}

		return placeholders;
	}
}

export default PropertyListPlaceholder;

