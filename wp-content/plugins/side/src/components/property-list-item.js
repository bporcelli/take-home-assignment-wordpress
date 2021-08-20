import {__} from "@wordpress/i18n";
import {Component} from '@wordpress/element';
import FavoriteButton from "./favorite-button";

/**
 * Renders a property in a property list.
 */
class PropertyListItem extends Component {
	render() {
		const {favorites, onToggleFavorite, propertyData} = this.props;

		const {
			listPrice,
			address,
			listDate,
			photos,
			property,
			mlsId
		} = propertyData;

		const {bedrooms, bathsHalf, bathsFull, area} = property;
		const numBaths = bathsFull + bathsHalf * 0.5;
		const formattedAddress = `${address.full}, ${address.city}, ${address.state}`;
		const formattedListDate = new Date(listDate).toLocaleDateString();
		const formattedListPrice = listPrice.toLocaleString();
		const propertyMeta = [
			sprintf(__('%d BR', 'side'), bedrooms),
			sprintf(__('%d Bath', 'side'), numBaths),
			sprintf(__('%s Sq Ft', 'side'), area),
		];

		return (
			<div className="property">
				<div className="property-image">
					<img
						src={photos[0]} alt={sprintf(__('Photo of %s', 'side'), formattedAddress)}
						width="315"
						height="280" />
					<FavoriteButton
						itemId={mlsId}
						isFavorited={favorites.includes(mlsId)}
						onToggleFavorite={onToggleFavorite} />
				</div>
				<div className="property-meta">{propertyMeta.join(' | ')}</div>
				<div className="property-price">${formattedListPrice}</div>
				<div className="property-address">{formattedAddress}</div>
				<div className="property-list-date">
					{sprintf(__('Listed: %s', 'side'), formattedListDate)}
				</div>
			</div>
		)
	}
}

export default PropertyListItem;

