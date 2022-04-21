const initiailCaptcha = {
    valid: false
}

export const FILL_CAPTCHA = "FILL_CAPTCHA"

export default function captchaReducer(state = initiailCaptcha, action) {
    switch (action.type) {
        case FILL_CAPTCHA:
            return {
                ...state,
                valid: action.value
            }
        default:
            return state;
    }
}