const SET_STRAY_ANNOUNCEMENTS = "SET_STRAY_ANNOUNCEMENTS"
const SET_HOUSE_ANNOUNCEMENTS = "SET_HOUSE_ANNOUNCEMENTS"

export const setStrayAnnouncements = ( message ) => {
    return { type: "SET_STRAY_ANNOUNCEMENTS", announcements: message }
}
export const setHouseAnnouncements = ( message ) => {
    return { type: "SET_HOUSE_ANNOUNCEMENTS", announcements: message }
}

let initialState = {
    stray:{
        announcements: [{latlng:[56.000685,92.933431]},{latlng:[56.002005, 92.924800]}],
    },
    house:{
        announcements: [],
    }
}
export let feed = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_STRAY_ANNOUNCEMENTS:
            return {
                ...state,
                stray: {...state.stray, announcements: action.announcements}
            }
        case SET_HOUSE_ANNOUNCEMENTS:
            return {
                ...state,
                house: {...state.house, announcements: action.announcements}

            }
        default:
            return {
                ...state
            }
    }
}
