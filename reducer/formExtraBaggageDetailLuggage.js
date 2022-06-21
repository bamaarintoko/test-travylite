import { dev } from "./customerReducer"

const initialDetailBagasiRed = {
    free_wrapping: {
        value: dev ? 'yes' : '',
        error: false,
        error_message: ""
    },
    use_insurance: {
        value: dev ? 'yes' : '',
        error: false,
        error_message: ''
    },
    declared_value: {
        value: '',
        error: false,
        error_message: ''
    },
    length: {
        value: dev ? 50 : '',
        error: false,
        error_message: ""
    },
    width: {
        value: dev ? 50 : '',
        error: false,
        error_message: ""
    },
    height: {
        value: dev ? 50 : '',
        error: false,
        error_message: ""
    },
    weight: {
        value: dev ? 1000 : '',
        error: false,
        error_message: ""
    },
    quantity: {
        value: dev ? 1 : '',
        error: false,
        error_message: ""
    },
    description: {
        value: dev ? 'lorem ipsum dolor sit amet' : '',
        error: false,
        error_message: ""
    }
}

export const FILL_FREE_WRAPPING = "FILL_FREE_WRAPPING"
export const FILL_LENGTH = "FILL_LENGTH"
export const FILL_WIDTH = "FILL_WIDTH"
export const FILL_HEIGHT = "FILL_HEIGHT"
export const FILL_WEIGHT = "FILL_WEIGHT"
export const FILL_QUANTITY = "FILL_QUANTITY"
export const FILL_DESCRIPTION = "FILL_DESCRIPTION"

export const FILL_ERROR = "FILL_ERROR"
export const REMOVE_ERROR = "REMOVE_ERROR"

export const UPDATE_VALUE_EXTRA_BAGGAGE_DETAIL_LUGGAGE = "UPDATE_VALUE_EXTRA_BAGGAGE_DETAIL_LUGGAGE"
export const UPDATE_ERROR_EXTRA_BAGGAGE_DETAIL_LUGGAGE = "UPDATE_ERROR_EXTRA_BAGGAGE_DETAIL_LUGGAGE"
export default function formExtraBaggageDetailLuggage(state = initialDetailBagasiRed, action) {
    switch (action.type) {
        case FILL_ERROR:
            const form = { ...state }
            Object.keys(form).map((key, index) => {
                if (key in action.errors) {
                    console.log("true", action.errors[key])
                    form[key].error = true
                    form[key].error_message = action.errors[key][0]
                } else {
                    form[key].error = false
                    form[key].error_message = ""
                    console.log("false", key)
                }
            })
            return form
        case UPDATE_VALUE_EXTRA_BAGGAGE_DETAIL_LUGGAGE:
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value
                }
            }
        case FILL_FREE_WRAPPING:
            return {
                ...state,
                free_wrapping: {
                    ...state.free_wrapping,
                    value: action.free_wrapping,
                    error: action.free_wrapping === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_LENGTH:
            return {
                ...state,
                length: {
                    ...state.length,
                    value: action.length,
                    error: action.length === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_WIDTH:
            return {
                ...state,
                width: {
                    ...state.width,
                    value: action.width,
                    error: action.error === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_HEIGHT:
            return {
                ...state,
                height: {
                    ...state.height,
                    value: action.height,
                    error: action.height === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_WEIGHT:
            return {
                ...state,
                weight: {
                    ...state.weight,
                    value: action.weight,
                    error: action.weight === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_QUANTITY:
            return {
                ...state,
                quantity: {
                    ...state.quantity,
                    value: action.quantity,
                    error: action.quantity === "" ? true : false,
                    error_message: ""
                }
            }
        case FILL_DESCRIPTION:
            return {
                ...state,
                description: {
                    ...state.description,
                    value: action.description,
                    error: action.description === "" ? true : false,
                    error_message: ""
                }
            }
        default:
            return state;
    }
}