const initialFeeReducer = {
    fee: {}
}

export const FILL_BANK_FEE = "FILL_BANK_FEE"
export const REMOVE_BANK_FEE = "REMOVE_BANK_FEE"

export default function bankFeeReducer(state = initialFeeReducer, action) {
    switch (action.type) {
        case FILL_BANK_FEE:
            return {
                ...state,
                fee: action.value
            }
        case REMOVE_BANK_FEE:
            return {
                ...state,
                fee: {}
            }
        default:
            return state
    }

}