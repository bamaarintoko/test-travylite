const initialAuthReducer = {
    access_token: null,
    token_type: null
}

export const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN";
export const DESTROY_ACCESS_TOKEN = "DESTROY_ACCESS_TOKEN";

export function authReducer(state = initialAuthReducer, action) {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN:
            return {
                access_token: action.access_token,
                token_type: action.token_type
            }
        case DESTROY_ACCESS_TOKEN:
            return {
                access_token: null,
                token_type: null
            }
        default:
            return state;
    }
}
const initialFormRegisterRed = {
    email: {
        value: "",
        error: false,
        error_message: ""
    },
    name: {
        value: "",
        error: false,
        error_message: ""
    },
    password: {
        value: "",
        error: false,
        error_message: ""
    },
    password_confirmation: {
        value: "",
        error: false,
        error_message: ""
    }
}

export const FILL_FORM_REGISTER = "FILL_FORM_REGISTER"

export function formRegisterReducer(state = initialFormRegisterRed, action) {
    switch (action.type) {
        case FILL_FORM_REGISTER:
            const obj = { ...state }
            Object.keys(obj).map((key) => {
                console.log("key : ", key)
                if (key in action.data) {
                    obj[key].error = true
                    obj[key].error_message = action.data[key][0]
                } else {
                    obj[key].error = false
                    obj[key].error_message = ""
                }
            })
            return obj;
        default:
            return state;
    }
}

const initialFormLoginRed = {
    email: {
        value: "",
        error: false,
        error_message: ""
    },
    password: {
        value: "",
        error: false,
        error_message: ""
    }
}

export const FILL_FORM_LOGIN = "FILL_FORM_LOGIN"

export function formLoginReducer(state = initialFormLoginRed, action) {
    switch (action.type) {
        case FILL_FORM_LOGIN:
            const obj = { ...state }
            Object.keys(obj).map((key) => {
                if (key in action.data) {
                    obj[key].error = true
                    obj[key].error_message = action.data[key][0]
                } else {
                    obj[key].error = false
                    obj[key].error_message = ""
                }
            })
        default:
            return state;
    }
}