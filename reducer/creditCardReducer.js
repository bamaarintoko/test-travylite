const initialData = {
    value: {

    }
}

export const FILL_CREDIT_CARD = "FILL_CREDIT_CARD"
export default function payWithCreditCardReducer(state = initialData, action) {
    switch (action.type) {
        case FILL_CREDIT_CARD:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

