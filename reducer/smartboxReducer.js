const initialSmartBoxLoc = {
    selected_location: "",
    locations: [],
    selected_smartbox: {},
    smartboxs: []
}

export const FILL_LOCATIONS = "FILL_LOCATIONS"
export const SELECTED_LOCATION = "SELECTED_LOCATION"

export const FILL_SMARTBOXS = "FILL_SMARTBOXS"
export const SELECTED_SMART_BOX = "SELECTED_SMART_BOX"

export function smartboxReducer(state = initialSmartBoxLoc, action) {
    switch (action.type) {
        case FILL_LOCATIONS:
            return {
                ...state,
                locations: action.data
            }
        case SELECTED_LOCATION:
            return {
                ...state,
                selected_location: action.value
            }
        case FILL_SMARTBOXS:
            return {
                ...state,
                smartboxs: action.data
            }
        case SELECTED_SMART_BOX:
            return {
                ...state,
                selected_smartbox: action.value
            }
        default:
            return state
    }
}