import { useSelector } from "react-redux"

export default function useCreateSmartBox() {
    const {
        dataShipper: {
            gender_shipper,
            name_shipper,
            phone_shipper,
            email_shipper,
            email_confirimation_shipper,
            address_shipper
        },
        dataReceiver: {
            address_receiver,
            gender_receiver,
            name_receiver,
            phone_receiver
        },
        formLeftBaggageDetailLuggage: {
            weight, quantity, description
        },
        courierReducer: {
            selected_courier: {
                data
            }
        },
    } = useSelector(s => s)
    let par = {
        gender_receiver: gender_receiver.value,
        name_receiver: name_receiver.value,
        email_receiver: "",
        phone_receiver: phone_receiver.value,
        address_receiver: address_receiver.value,
        gender_shipper: gender_shipper.value,
        name_shipper: name_shipper.value,
        email_shipper: email_shipper.value,
        phone_shipper: phone_shipper.value,
        address_shipper: address_shipper.value,
        weight: weight.value,
        quantity: quantity.value,
        description: description.value,
        subdistrict_receiver: "",
        district_receiver: "",
        postalcode_receiver: "",
        subdistrict_shipper: "",
        district_shipper: "",
        postalcode_shipper: "",
        duration: data?.etd ?? '',
        shipping_costs: "",
        province_receiver: "",
        city_receiver: "",
        province_shipper: "",
        city_shipper: "",
        district_code_shipper: "",
        district_code_receiver: "",
    }
}