import {Component} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {debounce} from '../util';

class PropertyListFilters extends Component {
	constructor(props) {
		super(props);

		const inputDelay = 350;

		this.delayedHandleMinPriceChange = debounce(this.props.onMinPriceChanged, inputDelay);
		this.delayedHandleMaxPriceChange = debounce(this.props.onMaxPriceChanged, inputDelay);
	}

	handleMinPriceChange(e) {
		this.delayedHandleMinPriceChange(e.target.value);
	}

	handleMaxPriceChange(e) {
		this.delayedHandleMaxPriceChange(e.target.value);
	}

	render() {
		return (
			<form>
				<fieldset className="property-list-filters">
					<legend>{__('Price')}</legend>
					<input type="number" min="0" id="min_price" name="min_price" aria-label="{__('Min Price')}" onChange={this.handleMinPriceChange.bind(this)} />
					<span>-</span>
					<input type="number" min="0" id="max_price" name="max_price" aria-label="{__('Max Price Price')}" onChange={this.handleMaxPriceChange.bind(this)} />
				</fieldset>
			</form>
		);
	}
}

export default PropertyListFilters;
