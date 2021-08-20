import {Component} from '@wordpress/element';
import FilledHeartIcon from '../../images/heart-fill.svg';
import EmptyHeartIcon from '../../images/heart-stroke.svg';
import {__} from "@wordpress/i18n";

/**
 * Favorite button component.
 * Render filled heart or empty heart based on whether an item is favorited.
 */
class FavoriteButton extends Component {
	/**
	 * Toggle favorite state of item associated with button.
	 */
	toggleFavorite() {
		this.props.onToggleFavorite(this.props.itemId);
	}

	render() {
		const isFavorited = this.props.isFavorited;
		const imageSrc = isFavorited ? FilledHeartIcon : EmptyHeartIcon;
		const label = isFavorited ? __('Remove from Favorites', 'side') : __('Add to Favorites', 'side');

		return (
			<button type="button" className="favorite-button" onClick={this.toggleFavorite.bind(this)} aria-label={label}>
				<img src={imageSrc} width="39" height="36" alt="" />
			</button>
		);
	}
}

export default FavoriteButton;
