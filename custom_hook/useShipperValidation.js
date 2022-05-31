import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostData } from "../helper/request";
import { UPDATE_ERROR_SHIPPER } from "../reducer/dataShipper";

export default function useShipperValidation(endpoint="") {
    const dispatch = useDispatch()
    const {
        dataShipper: {
            gender_shipper, name_shipper, phone_shipper, email_shipper, email_confirmation_shipper, address_shipper,province_shipper, city_shipper, district_shipper, subdistrict_shipper,district_code_shipper
        },
    } = useSelector(s => s)

    const [shipper_validate, shipper_response] = usePostData(endpoint)

    useEffect(() => {
        if (shipper_response.failed) {
            dispatch({
                type: UPDATE_ERROR_SHIPPER,
                errors: shipper_response.error_res.data.errors
            })
            // console.log("shipper_response : ", shipper_response)
        }
    }, [shipper_response.failed, shipper_response.success])

    function on_validate() {
        let par = {
            gender_shipper: gender_shipper.value,
            name_shipper: name_shipper.value,
            email_shipper: email_shipper.value,
            phone_shipper: phone_shipper.value,
            address_shipper: address_shipper.value,
            province_shipper: province_shipper.value,
            city_shipper: city_shipper.value,
            district_shipper: district_shipper.value,
            subdistrict_shipper: subdistrict_shipper.value,
            district_code_shipper: district_code_shipper.value
        }
        shipper_validate(par)
        // console.log("par : ", par)
    }
    let args = {
        on_validate,
        loading: shipper_response.loading,
        success: shipper_response.success,
        failed: shipper_response.failed,
        error_response: shipper_response.error_res.data,
        success_response: shipper_response.success_res
    }
    return [args]
}
