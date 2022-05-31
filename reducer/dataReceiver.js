import { is_dev } from "../helper/const"

// export const dev = process.env.NODE_ENV === `development`;
const initialDataReceiver = {
    gender_receiver: {
        value: "mr",
        error: false,
        error_message: ""
    },
    name_receiver: {
        // value: "",
        value: is_dev ? "John Doe" : "",
        error: false,
        error_message: ""
    },
    phone_receiver: {
        // value: "",
        value: is_dev ? "123123123123" : "",
        error: false,
        error_message: ""
    },
    address_receiver: {
        // value: "",
        value: is_dev ? "lorem ipsum dolor sit amet" : "",
        error: false,
        error_message: ""
    },
    province_receiver: { // propinsi id
        value: "",
        error: false,
        error_message: ""
    },
    city_receiver: { // kabupaten / kota id
        value: "",
        error: false,
        error_message: ""
    },
    district_receiver: { // kecamatan id
        value: "",
        error: false,
        error_message: ""
    },
    subdistrict_receiver: { // kelurahan id
        value: "",
        error: false,
        error_message: ""
    },
    district_code_receiver: {
        value: "",
        error: false,
        error_message: ""
    },
    postalcode_receiver: {
        value: "",
        error: false,
        error_message: ""
    }
}

export const UPDATE_VALUE_RECEIVER = "UPDATE_VALUE_RECEIVER"
export const UPDATE_ERROR_RECEIVER = "UPDATE_ERROR_RECEIVER"

export default function dataReceiver(state = initialDataReceiver, action) {
    switch (action.type) {
        case UPDATE_VALUE_RECEIVER:
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value
                }
            }
        case UPDATE_ERROR_RECEIVER:
            const obj = { ...state }
            Object.keys(obj).map((key) => {
                if (key in action.errors) {
                    obj[key].error = true
                    obj[key].error_message = action.errors[key][0]
                }
            })
        default:
            return state;
    }
}