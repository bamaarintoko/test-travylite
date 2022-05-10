const initialData = {
    name_pickup: {
        value: '',
        error: false,
        error_message: ''
    },
    phone_pickup: {
        value: '',
        error: false,
        error_message: ''
    },
    date_pickup: {
        value: '',
        error: false,
        error_message: ''
    },
    address_pickup: {
        value: '',
        error: false,
        error_message: ''
    },
    location_pickup: {
        value: '',
        error: false,
        error_message: ''
    }
}

export const FILL_FORM = "FILL_FORM"
// export const NAME_PICKUP = "NAME_PICKUP"
// export const PHONE_PICKUP = "PHONE_PICKUP"
// export const DATE_PICKUP = "DATE_PICKUP"
// export const ADDRESS_PICKUP = "ADDRESS_PICKUP"
// export const LOCATION_PICKUP = "LOCATION_PICKUP"

export default function formLeftBaggagePickUp(state = initialData, action) {
    switch (action.type) {
        case FILL_FORM:
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