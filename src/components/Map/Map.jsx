import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import {
	useLoadScript,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import Search from './Search';
import { color_grey } from '../colors';
import test from '../img/alpaka.png';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: ${props => props.width}px;
	height: ${props => props.height}px;

	& input {
		outline: none;

		&::placeholder {
			color: ${color_grey};
		}
	}
`;

const Img = styled.img`
	height: 100px;
`;

const mapContainerStyle = {
	width: '100%',
	height: '100%',
};

const libraries = ['places', 'visualization', 'drawing', 'geometry'];

const center = { lat: 56.015282, lng: 92.89325 };

const Map = props => {
	const [position, setPosition] = useState(center);
	const [zoom, setZoom] = useState(12);

	const [selected, setSelected] = useState(null);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyDMbcWmL7ZDjINMdQdSj2Q1qcugXVJPV18',
		libraries,
	});

	let PlaceSelected = place => {
		setPosition({
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng(),
		});
		setZoom(17);
	};

	const mapRef = React.createRef();
	const onMapLoad = useCallback(
		map => {
			mapRef.current = map;
		},
		[mapRef]
	);

	if (loadError) return 'Error loading maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<Container width={props.width} height={props.height}>
			<Search
				placeholder={props.placeholder}
				style={props.searchStyle}
				Selected={place => {
					PlaceSelected(place);
				}}
			/>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={zoom}
				center={position}
				onLoad={onMapLoad}
			>
				{!!props.stray &&
					props.stray.map((s, id) => {
						return (
							<Marker
								key={id}
								position={{ lat: s.latlng[0], lng: s.latlng[1] }}
								onClick={place => {
									setSelected(s);
									setPosition({ lat: s.latlng[0], lng: s.latlng[1] });
								}}
								icon={{
									url: '/zhivotnye_v_serdtse.png',
									scaledSize: new window.google.maps.Size(50, 35),
								}}
							/>
						);
					})}
				{!!props.house &&
					props.house.map((h, id) => {
						return (
							<Marker
								key={id}
								position={{ lat: h.latlng[0], lng: h.latlng[1] }}
								onClick={() => {
									setSelected({ lat: h.latlng[0], lng: h.latlng[1] });
								}}
								icon={{
									url: '/zhivotnye_v_serdtse.png',
									scaledSize: new window.google.maps.Size(50, 35),
								}}
							/>
						);
					})}
				{selected && (
					<InfoWindow
						position={{ lat: selected.latlng[0], lng: selected.latlng[1] }}
						onCloseClick={() => {
							setSelected(null);
						}}
					>
						<div>
							<Img src={test} alt='' />
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</Container>
	);
};

export default Map;
