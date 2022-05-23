import { useSelector } from "react-redux"

export default function useCreateLeftBaggage() {
    const {
        dataShipper: {
            gender_shipper,
            name_shipper,
            phone_shipper,
            email_shipper,
            email_confirimation_shipper,
            address_shipper
        },
        formLeftBaggageDetailLuggage: {
            weight, quantity, description
        },
        courierReducer: {
            selected_courier: {
                data
            }
        },
        boothTravyliteReducer: {
            selected_booth: sb
        },
        customerReducer: {
            shipper_full_zone,
            shipper_zone: {
                province_shipper, city_shipper, district_shipper, subdistrict_shipper, district_code_shipper
            }
        }
    } = useSelector(s => s)
    let par = {
        gender_shipper: gender_shipper.value,
        name_shipper: name_shipper.value,
        email_shipper: email_shipper.value,
        phone_shipper: phone_shipper.value,
        address_shipper: address_shipper.value,
        date_pickup: "",
        weight: weight.value,
        weight_unit: "Kg",
        quantity: quantity.value,
        description: description.value,
        duration: data.etd,
        shipping_costs: data.rates,
        port_id: sb.id,
        subdistrict_shipper:subdistrict_shipper.value,
        district_shipper: district_shipper.value,
        postalcode_shipper: shipper_full_zone.postal_code,
        province_id: "",
        city_id: "",
        district_id: "",
        subdistrict_id: "",
        duration: "",
        district_code_port: "",
        address_port: "",
        port_name: "",
        //insurance_fee_text:
        //subtotal:
        //subtotal_text:
        //courier:
        service_code: "",
        service_name: "",
        declared_value: "",
        use_insurance: "",
    }

    function create() {
        console.log("par", par)
    }
    const left_baggage = {
        create
    }
    return [left_baggage]
}
