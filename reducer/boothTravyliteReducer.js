const initialData = {
    selected_booth: {},
    booths: []
}

export const FILL_SELECTED_BOOTH = "FILL_SELECTED_BOOTH"
export const FILL_BOOTHS = "FILL_BOOTHS"

export default function boothTravyliteReducer(state = initialData, action) {
    switch (action.type) {
        case FILL_SELECTED_BOOTH:
            return {
                ...state,
                selected_booth: action.value
            }
        case FILL_BOOTHS:
            return {
                ...state,
                booths: action.value
            }
        default:
            return state;
    }
}