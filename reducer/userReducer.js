const initialUserReducer = {
    user: null
}

export const UPDATE_USER = "UPDATE_USER"
export const DESTROY_USER = "DESTROY_USER"

export function userReducer(state = initialUserReducer,action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                user: action.user
            }
        case DESTROY_USER:
            return {
                user: null
            }
        default:
            return state;
    }
}