/**
 * @jest-environment jsdom
 */

import {getFavoriteProperties, getPropertyData, toggleFavorite} from "../util";

const mockPropertyData = [
	{
		"agent": {
			"firstName": "Zeus",
			"officeMlsId": null,
			"contact": {
				"cell": null,
				"office": "(091) 892-5921",
				"email": "agent@example.com"
			},
			"lastName": "Bradley",
			"id": "zbradley",
			"address": null
		},
		"mls": {
			"originatingSystemName": null,
			"area": "Memorial West",
			"originalEntryTimestamp": null,
			"areaMinor": null,
			"status": "Active",
			"statusText": "ÂÃ¨GÂ¢",
			"daysOnMarket": 456
		},
		"showingContactName": null,
		"specialListingConditions": null,
		"school": {
			"highSchool": "TAYLOR",
			"district": null,
			"middleSchool": "NCES",
			"elementarySchool": "Northline"
		},
		"leaseTerm": null,
		"modified": "2011-12-03T06:32:29.984024Z",
		"tax": {
			"taxAnnualAmount": 5033,
			"taxYear": 2013,
			"id": "878-123-843-6924"
		},
		"agreement": "Purchaser Exemptions",
		"privateRemarks": "This property is a trial property to test the SimplyRETS. Private agent remarks will be included in this field for use in the SimplyRETS REST API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"ownership": null,
		"showingInstructions": "The showing instructions for this trial property are brought to you by the SimplyRETS team. This field will include any showing remarks for the given listing in your RETS feed. Enjoy!",
		"disclaimer": "This information is believed to be accurate, but without warranty.",
		"photos": [
			"https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home4.jpg",
			"https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-4.jpg"
		],
		"listDate": "2011-04-22T05:47:52.077772Z",
		"remarks": "This property is a trial property to test the SimplyRETS. This field will include remarks or descriptions from your RETS feed intended for public view. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"leaseType": "Other",
		"listPrice": 10114945,
		"office": {
			"servingName": null,
			"contact": {
				"office": "(478) 565-1012",
				"email": "info-office@example.com",
				"cell": null
			},
			"name": null,
			"brokerid": null
		},
		"originalListPrice": null,
		"internetEntireListingDisplay": null,
		"virtualTourUrl": null,
		"listingId": "57603177",
		"geo": {
			"marketArea": "Memorial West",
			"lng": -95.521685,
			"directions": "From 290 exit Barker Cypress to left on Tuckerton, right on Danbury Bridge, right on Bending Post, right on Driftwood Prairie",
			"county": "South",
			"lat": 29.833739
		},
		"mlsId": 1005181,
		"property": {
			"pool": "Association,Community Pool",
			"style": "Ranch, Traditional",
			"view": "Neighborhood",
			"ownerName": null,
			"subTypeText": null,
			"occupantType": null,
			"occupantName": null,
			"flooring": null,
			"interiorFeatures": "Alarm System - Owned",
			"lotSizeAreaUnits": null,
			"stories": 5,
			"roof": "Composition",
			"acres": null,
			"parking": {
				"leased": null,
				"description": "Attached Garage,Off-Site Parking,Room for Oversized Vehicle",
				"spaces": 7
			},
			"foundation": "Pier & Beam, Slab",
			"maintenanceExpense": null,
			"garageSpaces": 2.92463099692749,
			"heating": "Forced Air,Gravity Heating,Propane,Solar,Fireplace",
			"water": null,
			"bathsFull": 2,
			"lotSize": "346X303",
			"subType": "Condominium",
			"lotDescription": "Corner",
			"bathrooms": null,
			"accessibility": "Manned Gate",
			"yearBuilt": 1971,
			"fireplaces": 1,
			"bathsThreeQuarter": null,
			"lotSizeArea": null,
			"exteriorFeatures": "Back Yard Fenced",
			"subdivision": "Northpointe East",
			"areaSource": "Estimated",
			"bedrooms": 6,
			"cooling": null,
			"additionalRooms": "Computer Room,Exercise Room,Family Room,Library/Office,Media Room,Recreation Room,Screened Porch,Wine Cellar,Workshop",
			"type": "RES",
			"bathsHalf": 4,
			"construction": "Basement,Laundry Room",
			"area": 1990,
			"laundryFeatures": "Gas & Electric Dryer Hookup,Electric Dryer Hookup,In Garage,See Remarks"
		},
		"association": {
			"frequency": null,
			"fee": 1000,
			"amenities": "Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub",
			"name": "SimplyRETS Home Owners Association"
		},
		"coAgent": {
			"lastName": null,
			"contact": {
				"cell": null,
				"email": "coagent@example.com",
				"office": "(878) 342-9064"
			},
			"id": "HPM34",
			"address": null,
			"firstName": null,
			"officeMlsId": null
		},
		"internetAddressDisplay": null,
		"sales": {
			"agent": {
				"address": null,
				"id": "nrice",
				"contact": null,
				"lastName": "Rice",
				"officeMlsId": "HPM34",
				"firstName": "Nyssa"
			},
			"office": {
				"brokerid": "HPM34",
				"name": "Houston Properties",
				"servingName": "Houston Properties",
				"contact": null
			},
			"closeDate": "1998-09-18T05:52:17.750544Z",
			"closePrice": 1393773,
			"contractDate": null
		},
		"terms": "All Cash,Conventional,Will Rent,Lease Option",
		"address": {
			"streetName": "West Old Woman Springs Rd Drive",
			"postalCode": "77433",
			"streetNumber": 39781,
			"city": "Katy",
			"full": "39781 West Old Woman Springs Rd Drive #APT 2B",
			"unit": "APT 2B",
			"state": "Texas",
			"streetNumberText": "39781",
			"crossStreet": "Williams Parkway & Vodden St.",
			"country": "United States"
		},
		"showingContactPhone": null
	},
];

beforeAll(() => {
	global.fetch = jest.fn().mockImplementation();
});

afterEach(() => {
	localStorage.clear();

	jest.clearAllMocks();
	jest.restoreAllMocks();
});

it('loads property data from local storage if available', () => {
	localStorage.setItem('sidePropertyData', JSON.stringify(mockPropertyData));

	const fetch = jest.spyOn(global, 'fetch');

	expect.assertions(2);

	return getPropertyData().then(propertyData => {
		expect(propertyData).toStrictEqual(mockPropertyData);
		expect(fetch).not.toHaveBeenCalled();
	});
});

it('loads property data from simplyrets if not in local storage', () => {
	const mockResponse = {
		ok: true,
		json: () => Promise.resolve(mockPropertyData),
	};

	const fetch = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

	expect.assertions(3);

	return getPropertyData().then(propertyData => {
		expect(propertyData).toStrictEqual(mockPropertyData);
		expect(fetch).toHaveBeenCalledWith('https://api.simplyrets.com/properties?limit=9', expect.anything());
		expect(localStorage.getItem('sidePropertyData')).toEqual(JSON.stringify(mockPropertyData));
	});
});

it( 'returns empty favorites list when local storage is empty', () => {
	expect(getFavoriteProperties()).toEqual([]);
});

it('toggles favorite state for items correctly', () => {
	toggleFavorite(1);
	expect(getFavoriteProperties()).toContain(1);
	toggleFavorite(1);
	expect(getFavoriteProperties()).not.toContain(1);
});
