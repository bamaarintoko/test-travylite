const initialDeliveryRed = {
    type: ""
}

export const FILL_DELIVERY_TYPE = "FILL_DELIVERY_TYPE"
export const REMOVE_DELIVERY_TYPE = "REMOVE_DELIVERY_TYPE"

export function deliveryReducer(state = initialDeliveryRed, action) {
    switch (action.type) {
        case REMOVE_DELIVERY_TYPE:
            return {
                ...state,
                type: ""
            }
        case FILL_DELIVERY_TYPE:
            return {
                ...state,
                type: action.value
            }
        default:
            return state;
    }
}