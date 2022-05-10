const initialData = {
    weight: {
        value: '',
        error: false,
        error_message: ''
    },
    quantity: {
        value: '',
        error: false,
        error_message: ''
    },
    description: {
        value: '',
        error: false,
        error_message: ''
    }
}
export const FILL_FORM_DETAIL_LUGGAGE = "FILL_FORM_DETAIL_LUGGAGE"
export const FILL_FORM_DETAIL_LUGGAGE_ERROR = "FILL_FORM_DETAIL_LUGGAGE_ERROR"

export default function formLeftBaggageDetailLuggage(state = initialData, action) {
    switch (action.type) {
        case FILL_FORM_DETAIL_LUGGAGE_ERROR:
            const form = { ...state }
            Object.keys(form).map((key) => {
                if (key in action.errors) {
                    form[key].error = true
                    form[key].error_message = action.errors[key][0]
                } else {
                    form[key].error = false
                    form[key].error_message = ""
                }
            })
            return form;
        case FILL_FORM_DETAIL_LUGGAGE:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    value: action.value,
                    error: "",
                    error_message: ""
                }

            }
        default:
            return state;
    }
}