const initial_data = {
    quantity: 0,
    weight: 0,
    metrix: "",
    desc: ""
}

export const FILL_GENERAL_PACKAGE = "FILL_GENERAL_PACKAGE"

export default function generalPackage(state = initial_data, action) {
    switch (action.type) {
        case FILL_GENERAL_PACKAGE:
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state;
    }
}