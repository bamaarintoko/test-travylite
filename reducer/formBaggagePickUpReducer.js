const form = {
    addres: {
        value: "",
        error: false,
        error_message: ""
    },
    location: {
        value: "",
        error: false,
        error_message: ""
    },
    shipper: {
        value: "",
        error: false,
        error_message: ""
    },
    phone_number: {
        value: "",
        error: false,
        error_message: ""
    }
}

export const FILL_BAGAGGE_PICK_UP = "FILL_BAGAGGE_PICK_UP"
export default function formBaggagePickUpReducer(state = form, action) {
    switch (action.type) {
        case FILL_BAGAGGE_PICK_UP:
            return {
                ...state
            }
        default:
            return state;
    }
}