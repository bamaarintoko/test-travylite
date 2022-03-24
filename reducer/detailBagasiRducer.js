const initialDetailBagasiRed = {
    free_wrapping: {
        value: '',
        error: false,
        error_message: ""
    },
    length: {
        value: '',
        error: false,
        error_message: ""
    },
    width: {
        value: '',
        error: false,
        error_message: ""
    },
    height: {
        value: '',
        error: false,
        error_message: ""
    },
    weight: {
        value: '',
        error: false,
        error_message: ""
    },
    quantity: {
        value: '',
        error: false,
        error_message: ""
    },
    description: {
        value: '',
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
export function detailBagasiReducer(state = initialDetailBagasiRed, action) {
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