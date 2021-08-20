import {Component} from '@wordpress/element';
import {getFavoriteProperties, getPropertyData, toggleFavorite} from "../util";
import PropertyListPlaceholder from './property-list-placeholder';
import PropertyListItem from "./property-list-item";

/**
 * Renders a list of properties.
 */
class PropertyList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			properties: [],
			favorites: getFavoriteProperties()
		};

		this.onToggleFavorite = this.onToggleFavorite.bind(this);
	}

	/**
	 * Runs after component is mounted into DOM to get property data.
	 */
	componentDidMount() {
		getPropertyData().then(properties => {
			this.setState({properties: properties});
		});
	}

	/**
	 * Toggle the favorited state for a property.
	 *
	 * @param {string} mlsId Property MLS ID.
	 */
	onToggleFavorite(mlsId) {
		toggleFavorite(mlsId);

		this.setState({
			favorites: getFavoriteProperties()
		});
	}

	render() {
		const properties = this.state.properties;
		const favorites = this.state.favorites;
		const onToggleFavorite = this.onToggleFavorite;

		let propertyList = [];
		if (properties.length) {
			propertyList = properties.map(property => (
				<PropertyListItem
					key={property.mlsId}
					favorites={favorites}
					onToggleFavorite={onToggleFavorite}
					propertyData={property} />
			));
		} else {
			propertyList.push(<PropertyListPlaceholder numItems="9" />);
		}

		return (
			<div className="property-list">
				{propertyList}
			</div>
		);
	}
}

export default PropertyList;
