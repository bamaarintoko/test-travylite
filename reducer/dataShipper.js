import { is_dev } from "../helper/const"

export const UPDATE_VALUE_SHIPPER = "UPDATE_VALUE_SHIPPER"
export const UPDATE_ERROR_SHIPPER = "UPDATE_ERROR_SHIPPER"
export default function dataShipper(state = initialDataShipper, action) {
    switch (action.type) {
        case UPDATE_VALUE_SHIPPER:
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value
                }
            }
        case UPDATE_ERROR_SHIPPER:
            const obj = { ...state }

            Object.keys(obj).map((key) => {
                if (key in action.errors) {
                    obj[key].error = true
                    obj[key].error_message = action.errors[key][0]
                }
            })
            return obj;
        default:
            return state
    }
}

const initialDataShipper = {
    gender_shipper: {
        value: "mr",
        error: false,
        error_message: ""
    },
    name_shipper: {
        value: is_dev ? "Jane Doe" : "",
        error: false,
        error_message: ""
    },
    email_shipper: {
        value: is_dev ? "jane@mail.com" : "",
        error: false,
        error_message: ""
    },
    email_confirimation_shipper: {
        value: is_dev ? "jane@mail.com" : "",
        error: false,
        error_message: ""
    },
    phone_shipper: {
        value: is_dev ? "085645789090" : "",
        error: false,
        error_message: ""
    },
    address_shipper: {
        value: is_dev ? "lorem ipsum dolor sit amet" : "",
        error: false,
        error_message: ""
    },
    province_shipper: {
        value: '',
        error: false,
        error_message: ''
    },
    city_shipper: {
        value: '',
        error: false,
        error_message: ''
    },
    district_shipper: {
        value: '',
        error: false,
        error_message: ''
    },
    subdistrict_shipper: {
        value: '',
        error: false,
        error_message: ''
    },
    district_code_shipper: {
        value: '',
        error: false,
        error_message: ''
    },
    postalcode_shipper: {
        value: '',
        error: false,
        error_message: ''
    }

}