import {Component} from '@wordpress/element';
import {getFavoriteProperties, getPropertyData, toggleFavorite} from "../util";
import PropertyListPlaceholder from './property-list-placeholder';
import PropertyListItem from "./property-list-item";
import PropertyListFilters from "./property-list-filters";

/**
 * Renders a list of properties.
 */
class PropertyList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			properties: [],
			favorites: getFavoriteProperties(),
			minPrice: 0,
			maxPrice: Number.MAX_SAFE_INTEGER,
		};

		this.onToggleFavorite = this.onToggleFavorite.bind(this);
	}

	/**
	 * Runs after component is mounted into DOM to get property data.
	 */
	componentDidMount() {
		this.updatePropertyList();
	}

	updatePropertyList() {
		const params = {
			minprice: this.state.minPrice,
			maxprice: this.state.maxPrice,
		};

		getPropertyData(params).then(properties => {
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

	/**
	 * Handles a change to the min price.
	 *
	 * @param {float} minPrice
	 */
	onMinPriceChanged(minPrice) {
		this.setState((state) => {
			return {
				minPrice: minPrice,
			};
		}, () => {
			this.updatePropertyList();
		});
	}

	/**
	 * Handles a change to the max price.
	 *
	 * @param {float} maxPrice
	 */
	onMaxPriceChanged(maxPrice) {
		this.setState((state) => {
			return {
				maxPrice: maxPrice,
			};
		}, () => {
			this.updatePropertyList();
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
			<>
				<PropertyListFilters onMinPriceChanged={this.onMinPriceChanged.bind(this)} onMaxPriceChanged={this.onMaxPriceChanged.bind(this)} />
				<div className="property-list-wrapper">
					{propertyList}
				</div>
			</>
		);
	}
}

export default PropertyList;
