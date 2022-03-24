import { isEmpty } from "../helper/func";

const initialPaketReducer = {
    weight: {
        value: "",
        error: false,
        error_message: ""
    },
    quantity: {
        value: "",
        error: false,
        error_message: ""
    },
    description: {
        value: "",
        error: false,
        error_message: ""
    }
}

export const FILL_WEIGHT_PAKET = "FILL_WEIGHT_PAKET";
export const FILL_QUANTITY_PAKET = "FILL_QUANTITY_PAKET";
export const FILL_DESCRIPTION_PAKET = "FILL_DESCRIPTION_PAKET";

export const FILL_ERRORS_PAKET = "FILL_ERRORS_PAKET"

export default function paketReducer(state = initialPaketReducer, action) {
    switch (action.type) {
        case FILL_ERRORS_PAKET:
            const err_paket = { ...state }
            Object.keys(err_paket).map((key, index) => {
                if (key in action.errors) {
                    err_paket[key].error = true,
                        err_paket[key].error_message = action.errors[key][0]
                }
            })
            return err_paket
        case FILL_WEIGHT_PAKET:
            return {
                ...state,
                weight: {
                    ...state.weight,
                    value: action.value,
                    error: isEmpty(action.value) ? true : false
                }
            }
        case FILL_QUANTITY_PAKET:
            return {
                ...state,
                quantity: {
                    ...state.quantity,
                    value: action.value,
                    error: isEmpty(action.value) ? true : false
                }
            }
        case FILL_DESCRIPTION_PAKET:
            return {
                ...state,
                description: {
                    ...state.description,
                    value: action.value,
                    error: isEmpty(action.value) ? true : false
                }
            }
        default:
            return state;
    }
}