import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const center = { lat: 56.015282, lng: 92.89325 };

const bounds = {
	north: center.lat + 0.15,
	south: center.lat - 0.15,
	east: center.lng + 0.45,
	west: center.lng - 0.55,
};

const options = {
	bounds: bounds,
	types: [],
	componentRestrictions: { country: 'ru' },
};

const Search = props => {
	return (
		<Autocomplete
			{...props}
			apiKey='AIzaSyDMbcWmL7ZDjINMdQdSj2Q1qcugXVJPV18'
			onPlaceSelected={place => {
				props.Selected(place);
			}}
			options={options}
		/>
	);
};

export default Search;
