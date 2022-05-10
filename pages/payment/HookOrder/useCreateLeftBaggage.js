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
            selected_booth
        }
    } = useSelector(s => s)
    let par = {
        gender_shipper: gender_shipper.value,
        name_shipper: name_shipper.value,
        email_shipper: email_shipper.value,
        phone_shipper: phone_shipper.value,
        address_shipper: address_shipper.value,
        free_wrapping: "",
        length: "",
        width: "",
        weight: weight.value,
        weight_unit: "Kg",
        height: "",
        quantity: quantity.value,
        description: description.value,
        type: "",
        duration: data?.etd ?? '',
        shipping_costs: data?.rates ??'',
        port_id: "",
        subdistrict_shipper: "",
        district_shipper: "",
        postalcode_shipper: "",
        province_id: "",
        city_id: "",
        district_id: "",
        subdistrict_id: "",
    }

    function create_order() {
        return () => {
            console.log("par", par)
        }
    }
    const left_baggage = {
        create_order
    }
    return [left_baggage]
}
