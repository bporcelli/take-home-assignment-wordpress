/**
 * Get property list data from SimplyRETS properties endpoint or local storage.
 *
 * @return Promise
 */
export function getPropertyData(params) {
	const defaultParams = {
		limit: 9,
		sort: 'listprice',
		minprice: 0,
		maxprice: Number.MAX_SAFE_INTEGER,
	};

	params = Object.assign(defaultParams, params);

	const searchParams = new URLSearchParams();
	for (let [param, value] of Object.entries(params)) {
		searchParams.append(param, value);
	}

	const queryParams = searchParams.toString();
	const cacheKey = `sidePropertyData:${queryParams}`;
	const cachedPropertyData = localStorage.getItem(cacheKey);

	if (cachedPropertyData) {
		return Promise.resolve(JSON.parse(cachedPropertyData));
	}

	const headers = new Headers();
	headers.set('Authorization', 'Basic ' + btoa('simplyrets:simplyrets')); // todo: protect credentials.

	const requestConfig = {
		method: 'GET',
		headers: headers,
	};

	return fetch(`https://api.simplyrets.com/properties?${queryParams}`, requestConfig)
		.then(response => {
			if (!response.ok) {
				throw `${response.status} ${response.statusText}`;
			}
			return response.json()
				.then(properties => {
					localStorage.setItem('sidePropertyData', JSON.stringify(properties));
					return properties;
				});
		})
		.catch((error) => {
			console.error('Error retrieving property data:', error);
			return [];
		});
}

/**
 * Get favorite properties from local storage.
 *
 * @return {string[]} MLS IDs of favorite properties.
 */
export function getFavoriteProperties() {
	return JSON.parse(localStorage.getItem('sideFavoriteProperties') || '[]');
}

/**
 * Toggle the favorited state of a property.
 *
 * @param {string} mlsId Property MLS ID.
 */
export function toggleFavorite(mlsId) {
	let favorites = getFavoriteProperties();

	if (favorites.includes(mlsId)) {
		favorites = favorites.filter(id => id !== mlsId);
	} else {
		favorites.push(mlsId);
	}

	localStorage.setItem('sideFavoriteProperties', JSON.stringify(favorites));
}

export function debounce(func, timeout = 300){
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
