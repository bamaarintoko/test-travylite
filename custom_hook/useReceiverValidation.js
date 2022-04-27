import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostData } from "../helper/request";
import { FILL_ERROR_RECIPIENT, UPDATE_ERROR_RECEIVER } from "../reducer/customerReducer";

export default function useReceiverValidation(endpoint="extra-baggage/step-detail-receiver") {
    const dispatch = useDispatch()
    const {
        dataReceiver: {
            address_receiver,
            gender_receiver,
            name_receiver,
            phone_receiver
        },
        customerReducer: {
            recipient_zone: {
                city_receiver,
                district_code_receiver,
                district_receiver,
                province_receiver,
                subdistrict_receiver
            }
        }
    } = useSelector(s => s)

    const [receiver_validate, receiver_response] = usePostData(endpoint)

    useEffect(() => {
        if (receiver_response.failed) {
            dispatch({
                type: FILL_ERROR_RECIPIENT,
                errors: receiver_response.error_res.data.errors
            })
            dispatch({
                type: UPDATE_ERROR_RECEIVER,
                errors: receiver_response.error_res.data.errors
            })
        }
    }, [receiver_response.failed, receiver_response.success])

    function on_validate() {
        let par = {
            gender_receiver: gender_receiver.value,
            name_receiver: name_receiver.value,
            phone_receiver: phone_receiver.value,
            address_receiver: address_receiver.value,
            province_receiver: province_receiver.value,
            city_receiver: city_receiver.value,
            district_receiver: district_receiver.value,
            subdistrict_receiver: subdistrict_receiver.value,
            district_code_receiver: district_code_receiver.value
        }
        receiver_validate(par)
        console.log("par : ", par)
    }

    let args = {
        on_validate,
        loading: receiver_response.loading,
        success: receiver_response.success,
        failed: receiver_response.failed,
        error_response: receiver_response.error_res.data,
        success_response: receiver_response.success_res
    }

    return [args]
}