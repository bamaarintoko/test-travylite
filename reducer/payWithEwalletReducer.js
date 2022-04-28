const initialData = {
    e_wallet: {}
}

export const FILL_E_WALLET = "FILL_E_WALLET"

export default function payWithEwalletReducer(state = initialData, action) {
    switch (action.type) {
        case FILL_E_WALLET:
            return {
                ...state,
                e_wallet: action.value
            }
        default:
            return state;
    }
}