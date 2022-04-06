const initialPaymentMethod = {
    method: {

    }
}

export const FILL_PAYMENT_METHOD = "FILL_PAYMENT_METHOD"

export function paymentMethodReducer(state = initialPaymentMethod, action) {
    switch (action.type) {
        case FILL_PAYMENT_METHOD:
            return {
                ...state,
                method: action.value
            }
        default:
            return state
    }
}