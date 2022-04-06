const initialVirtualAccRed = {
    va: {}
}
export const FILL_VIRTUAL_ACCOUNT = "FILL_VIRTUAL_ACCOUNT"
export default function virtualAccountReducer(state = initialVirtualAccRed, action) {
    switch (action.type) {
        case FILL_VIRTUAL_ACCOUNT:
            return {
                ...state,
                va: action.value
            }
        default:
            return state;
    }
}