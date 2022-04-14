export const dev = process.env.NODE_ENV === `development`;
const initialCustomerReducer = {
    recipient_full_zone: {},
    recipient: {
        gender_receiver: {
            value: "mr",
            error: false,
            error_message: ""
        },
        name_receiver: {
            // value: "",
            value: dev ? "John Doe" : "",
            error: false,
            error_message: ""
        },
        phone_receiver: {
            // value: "",
            value: dev ? "123123123123" : "",
            error: false,
            error_message: ""
        },
        address_receiver: {
            // value: "",
            value: dev ? "lorem ipsum dolor sit amet" : "",
            error: false,
            error_message: ""
        },
    },
    recipient_zone: {
        province_receiver: {
            value: dev ? 33 : "",
            error: false,
            error_message: "",
            text: ""
        }, // province id
        city_receiver: {
            value: dev ? 481 : "",
            error: false,
            error_message: "",
            text: ""
        }, // district id
        district_receiver: {
            value: dev ? 7064 : "",
            error: false,
            error_message: "",
            text: ""
        }, // sub_district id
        subdistrict_receiver: {
            value: dev ? 82517 : "",
            error: false,
            error_message: "",
            text: ""
        }, // village id
        district_code_receiver: {
            value: dev ? '34.71.03' : "",
            error: false,
            error_message: ""
        }
        // province_recipient: "", // province id
        // city_recipient: "", // district id
        // district_recipient: "", // sub_district id
        // subdistrict_recipient: "", // village id
        // district_code_shipper: ""
    },
    shipper_full_zone: {},
    shipper: {
        gender_shipper: {
            value: "mr",
            error: false,
            error_message: ""
        },
        name_shipper: {
            value: dev ? "" : "",
            error: false,
            error_message: ""
        },
        email_shipper: {
            value: dev ? "" : "",
            error: false,
            error_message: ""
        },
        email_confirimation_shipper: {
            value: dev ? "jane@mail.com" : "",
            error: false,
            error_message: ""
        },
        phone_shipper: {
            value: dev ? "085645789090" : "",
            error: false,
            error_message: ""
        },
        address_shipper: {
            value: dev ? "lorem ipsum dolor sit amet" : "",
            error: false,
            error_message: ""
        }
        // gender_shipper: 'mr',
        // name_shipper: "",
        // email_shipper: "",
        // email_confirimation_shipper: "",
        // phone_shipper: "",
        // address_shipper: ""
    },
    shipper_zone: {
        province_shipper: {
            value: dev ? 33 : "",
            error: false,
            error_message: "",
        }, // province id
        city_shipper: {
            value: dev ? 481 : "",
            error: false,
            error_message: "",
        }, // district id
        district_shipper: {
            value: dev ? 7064 : "",
            error: false,
            error_message: "",
        }, // sub_district id
        subdistrict_shipper: {
            value: dev ? 82516 : "",
            error: false,
            error_message: "",
        }, // village id
        district_code_shipper: {
            value: dev ? '34.71.03' : "",
            error: false,
            error_message: "",
        },
        // province_shipper: "", // province id
        // city_shipper: "", // district id
        // district_shipper: "", // sub_district id
        // subdistrict_shipper: "", // village id
        // district_code_shipper: ""
    },

    recipient_ready: false,
    shipper_ready: false
}
export const SET_ZONE_RECIPIENT = "SET_ZONE_RECIPIENT"
export const FILL_RECIPIENT_FULL_ZONE = "FILL_RECIPIENT_FULL_ZONE";
export const SET_DATA_SHIPPER = "SET_DATA_SHIPPER"
export const SET_ZONE_SHIPPER = "SET_ZONE_SHIPPER"
export const FILL_SHIPPER_FULL_ZONE = "FILL_SHIPPER_FULL_ZONE"
export const FILL_ERROR_RECIPIENT = "FILL_ERROR_RECIPIENT"

export const FILL_GENDER_RECIPIENT = "FILL_GENDER_RECIPIENT"
export const FILL_NAME_RECIPIENT = "FILL_NAME_RECIPIENT"
export const FILL_PHONE_RECIPIENT = "FILL_PHONE_RECIPIENT"
export const FILL_ADDRESS_RECIPIENT = "FILL_ADDRESS_RECIPIENT"

export const FILL_ERROR_SHIPPER = "FILL_ERROR_SHIPPER"

export const FILL_GENDER_SHIPPER = "FILL_GENDER_SHIPPER"
export const FILL_NAME_SHIPPER = "FILL_NAME_SHIPPER"
export const FILL_EMAIL_SHIPPER = "FILL_EMAIL_SHIPPER"
export const FILL_EMAIL_CONFIRM_SHIPPER = "FILL_EMAIL_CONFIRM_SHIPPER"
export const FILL_PHONE_SHIPPER = "FILL_PHONE_SHIPPER"
export const FILL_ADDRESS_SHIPPER = "FILL_ADDRESS_SHIPPER"

// --------------------------------------------------------------------------- //
export const UPDATE_VALUE_SHIPPER_ZONE = "UPDATE_VALUE_SHIPPER_ZONE"
export const UPDATE_ERROR_SHIPPER_ZONE = "UPDATE_ERROR_SHIPPER_ZONE"

export function dataShipperZone(state = initialDataShipperZone, action) {
    switch (action.type) {

        default:
            return state;
    }
}

const initialDataShipperZone = {
    province_shipper: {
        value: dev ? 33 : "",
        error: false,
        error_message: "",
    }, // province id
    city_shipper: {
        value: dev ? 481 : "",
        error: false,
        error_message: "",
    }, // district id
    district_shipper: {
        value: dev ? 7064 : "",
        error: false,
        error_message: "",
    }, // sub_district id
    subdistrict_shipper: {
        value: dev ? 82516 : "",
        error: false,
        error_message: "",
    }, // village id
    district_code_shipper: {
        value: dev ? '34.71.03' : "",
        error: false,
        error_message: "",
    },
}
// --------------------------------------------------------------------------- //

// --------------------------------------------------------------------------- //
export const UPDATE_VALUE_SHIPPER = "UPDATE_VALUE_SHIPPER"
export const UPDATE_ERROR_SHIPPER = "UPDATE_ERROR_SHIPPER"
export function dataShipper(state = initialDataShipper, action) {
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
        value: dev ? "" : "",
        error: false,
        error_message: ""
    },
    email_shipper: {
        value: dev ? "" : "",
        error: false,
        error_message: ""
    },
    email_confirimation_shipper: {
        value: dev ? "jane@mail.com" : "",
        error: false,
        error_message: ""
    },
    phone_shipper: {
        value: dev ? "085645789090" : "",
        error: false,
        error_message: ""
    },
    address_shipper: {
        value: dev ? "lorem ipsum dolor sit amet" : "",
        error: false,
        error_message: ""
    }

}
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
export const UPDATE_VALUE_RECEIVER = "UPDATE_VALUE_RECEIVER"
export const UPDATE_ERROR_RECEIVER = "UPDATE_ERROR_RECEIVER"

export function dataReceiver(state = initialDataReceiver, action) {
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

const initialDataReceiver = {
    gender_receiver: {
        value: "mr",
        error: false,
        error_message: ""
    },
    name_receiver: {
        // value: "",
        value: dev ? "John Doe" : "",
        error: false,
        error_message: ""
    },
    phone_receiver: {
        // value: "",
        value: dev ? "123123123123" : "",
        error: false,
        error_message: ""
    },
    address_receiver: {
        // value: "",
        value: dev ? "lorem ipsum dolor sit amet" : "",
        error: false,
        error_message: ""
    },
}
// --------------------------------------------------------------------------- //
export function customerReducer(state = initialCustomerReducer, action) {
    switch (action.type) {
        case FILL_GENDER_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    gender_receiver: {
                        ...state.gender_receiver,
                        value: action.gender_recipient,
                        error: false,
                        error_message: ""
                    }
                }
            }
        case FILL_NAME_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    name_receiver: {
                        ...state.name_receiver,
                        value: action.name_recipient,
                        error: action.name_recipient === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_PHONE_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    phone_receiver: {
                        ...state.phone_receiver,
                        value: action.phone_recipient,
                        error: action.phone_recipient === "" ? true : false,
                        error_message: ""
                    },
                }
            }
        case FILL_ADDRESS_RECIPIENT:
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    address_receiver: {
                        ...state.address_receiver,
                        value: action.address_recipient,
                        error: action.address_recipient === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        // ----------------------------------------------------------------
        case FILL_ERROR_SHIPPER:
            const err_shipper = { ...state }
            Object.keys(err_shipper.shipper_zone).map((key, index) => {
                if (key in action.errors) {
                    err_shipper.shipper_zone[key].error = true
                    err_shipper.shipper_zone[key].error_message = action.errors[key][0]
                }
            })
            Object.keys(err_shipper.shipper).map((key, index) => {
                // ////console.log("key", key)
                if (key in action.errors) {
                    err_shipper.shipper[key].error = true
                    err_shipper.shipper[key].error_message = action.errors[key][0]
                }
            })
            return err_shipper;
        case FILL_ERROR_RECIPIENT:
            const err_recipient = { ...state }
            Object.keys(err_recipient.recipient_zone).map((key, index) => {
                //////console.log("key", key)
                if (key in action.errors) {
                    err_recipient.recipient_zone[key].error = true
                    err_recipient.recipient_zone[key].error_message = action.errors[key][0]

                }
            })
            Object.keys(err_recipient.recipient).map((key, index) => {
                ////console.log("key", key)
                if (key in action.errors) {
                    err_recipient.recipient[key].error = true
                    err_recipient.recipient[key].error_message = action.errors[key][0]

                }
            })
            ////console.log("err_recipient", err_recipient)
            return err_recipient;
        case FILL_RECIPIENT_FULL_ZONE:
            return {
                ...state,
                recipient_full_zone: action.value
            }
        case FILL_SHIPPER_FULL_ZONE:
            return {
                ...state,
                shipper_full_zone: action.value
            }
        case SET_ZONE_RECIPIENT:
            return {
                ...state,
                recipient_zone: {
                    ...state.recipient_zone,
                    province_receiver: {
                        ...state.province_receiver,
                        value: action.province_recipient,
                        error: action.province_recipient === "" ? true : false
                    },
                    city_receiver: {
                        ...state.city_receiver,
                        value: action.city_recipient,
                        error: action.city_recipient === "" ? true : false
                    },
                    district_receiver: {
                        ...state.district_receiver,
                        value: action.district_recipient,
                        error: action.district_recipient === "" ? true : false
                    },
                    subdistrict_receiver: {
                        ...state.subdistrict_receiver,
                        value: action.subdistrict_recipient,
                        error: action.subdistrict_recipient === "" ? true : false
                    },
                    district_code_receiver: {
                        ...state.district_code_receiver,
                        value: action.district_code_recipient,
                        error: action.district_code_recipient === "" ? true : false
                    }
                }

            }
        case SET_ZONE_SHIPPER:
            return {
                ...state,
                shipper_zone: {
                    ...state.shipper_zone,
                    province_shipper: {
                        ...state.province_shipper,
                        value: action.province_shipper,
                        error: action.province_shipper === "" ? true : false
                    },
                    city_shipper: {
                        ...state.city_shipper,
                        value: action.city_shipper,
                        error: action.city_shipper === "" ? true : false
                    },
                    district_shipper: {
                        ...state.district_shipper,
                        value: action.district_shipper,
                        error: action.district_shipper === "" ? true : false
                    },
                    subdistrict_shipper: {
                        ...state.subdistrict_shipper,
                        value: action.subdistrict_shipper,
                        error: action.subdistrict_shipper === "" ? true : false
                    },
                    district_code_shipper: {
                        ...state.district_code_shipper,
                        value: action.district_code_shipper,
                        error: action.district_code_shipper === "" ? true : false
                    }
                }
                // shipper_zone: {
                //     ...state.shipper_zone,
                //     province_shipper: action.province_shipper,
                //     city_shipper: action.city_shipper,
                //     district_shipper: action.district_shipper,
                //     subdistrict_shipper: action.subdistrict_shipper,
                //     district_code_shipper: action.district_code_shipper
                // }
            }
        case FILL_GENDER_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    gender_shipper: {
                        ...state.gender_shipper,
                        value: action.value,
                        error: false,
                        // error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_NAME_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    name_shipper: {
                        ...state.name_shipper,
                        value: action.value,
                        // error: false,
                        error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_EMAIL_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    email_shipper: {
                        ...state.email_shipper,
                        value: action.value,
                        // error: false,
                        error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_EMAIL_CONFIRM_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    email_confirimation_shipper: {
                        ...state.email_confirimation_shipper,
                        value: action.value,
                        // error: false,
                        error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_PHONE_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    phone_shipper: {
                        ...state.phone_shipper,
                        value: action.value,
                        // error: false,
                        error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        case FILL_ADDRESS_SHIPPER:
            return {
                ...state,
                shipper: {
                    ...state.shipper,
                    address_shipper: {
                        ...state.address_shipper,
                        value: action.value,
                        // error: false,
                        error: action.value === "" ? true : false,
                        error_message: ""
                    }
                }
            }
        // case SET_DATA_SHIPPER:
        //     const shipper = { ...state }
        //     shipper.shipper.gender_shipper = action.gender_shipper
        //     shipper.shipper.name_shipper = action.name_shipper
        //     shipper.shipper.email_shipper = action.email_shipper
        //     shipper.shipper.email_confirimation_shipper = action.email_confirimation_shipper
        //     shipper.shipper.phone_shipper = action.phone_shipper
        //     shipper.shipper.address_shipper = action.address_shipper
        //     return shipper
        default:
            return state;

    }


}