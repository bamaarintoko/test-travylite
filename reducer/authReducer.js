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