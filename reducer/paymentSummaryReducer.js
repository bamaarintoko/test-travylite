const initialPaymentSummary = {
    data: {}
}

export const FILL_PAYMENT_SUMMARY = "FILL_PAYMENT_SUMMARY"

export default function paymentSummaryReducer(state = initialPaymentSummary, action) {
    switch (action.type) {
        case FILL_PAYMENT_SUMMARY:
            return {
                ...state,
                data: action.value
            }
        default:
            return state;
    }
}