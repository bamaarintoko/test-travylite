import { useSelector } from "react-redux"
import { usePostData } from "../../../helper/request"

export default function useCreateExtraBaggage() {
    const {
        dataShipper:{
            gender_shipper, name_shipper, phone_shipper, email_shipper, email_confirimation_shipper, address_shipper
        },
        paymentMethodReducer: {
            method
        },
        courierReducer: {
            selected_courier: {
                data
            }
        },
        deliveryReducer: {
            type
        },
        customerReducer: {
            recipient_full_zone,
            shipper_full_zone,
            recipient: {
                address_receiver, gender_receiver, name_receiver, phone_receiver
            },
            recipient_zone: {
                province_receiver, city_receiver, district_receiver, subdistrict_receiver, district_code_receiver
            },
            shipper_zone: {
                province_shipper, city_shipper, district_shipper, subdistrict_shipper, district_code_shipper
            }
        },
        formExtraBaggageDetailLuggage: {
            description, free_wrapping, height, length, quantity, weight, width
        }

    } = useSelector(s => s)

    const [create_order, response] = usePostData("extra-baggage")

    let par = {
        gender_receiver: gender_receiver.value,
        name_receiver: name_receiver.value,
        phone_receiver: phone_receiver.value,
        address_receiver: address_receiver.value,
        gender_shipper: gender_shipper.value,
        name_shipper: name_shipper.value,
        email_shipper: email_shipper.value,
        phone_shipper: phone_shipper.value,
        address_shipper: address_shipper.value,
        free_wrapping: free_wrapping.value,
        length: length.value,
        width: width.value,
        weight: weight.value,
        weight_unit: "G",
        height: height.value,
        quantity: quantity.value,
        description: description.value,
        type: type,
        subdistrict_receiver: subdistrict_receiver.value,
        district_receiver: district_receiver.value,
        postalcode_receiver: recipient_full_zone.postal_code,
        subdistrict_shipper: subdistrict_shipper.value,
        district_shipper: district_shipper.value,
        postalcode_shipper: shipper_full_zone.postal_code,
        duration: data?.etd ?? '1-2 day',
        shipping_costs: data?.rates ?? 20000,
        province_receiver: province_receiver.value,
        city_receiver: city_receiver.value,
        province_shipper: province_shipper.value,
        city_shipper: city_shipper.value,
        district_code_shipper: district_code_shipper.value,
        district_code_receiver: district_code_receiver.value,
        // channel_code: method.code,
        service_code: data?.product_code ?? 'REG',
        service_name: data?.product_name ?? 'Regular',
        use_insurance: 'no',
        declared_value: data?.rates ?? 1200000
    }

    function create() {
        // return () => {
        console.log("par", par)
        create_order(par)
        // }
    }
    const extra_baggage = {
        create,
        response
    }
    return [extra_baggage]
}