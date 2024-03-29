const SET_CENTER = 'SET_CENTER';

export const setCenter = message => {
	return { type: 'SET_STRAY_ANNOUNCEMENTS', center: message };
};
export const setHouseAnnouncements = message => {
	return { type: 'SET_HOUSE_ANNOUNCEMENTS', announcements: message };
};

const initialState = {
	center: { lat: 56.015282, lng: 92.89325 },
};

export const map = (state = initialState, action) => {
	switch (action.type) {
		case SET_CENTER:
			return {
				...state,
				center: action.center,
			};
		default:
			return {
				...state,
			};
	}
};
