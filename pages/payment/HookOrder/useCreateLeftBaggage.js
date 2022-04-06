export default function useCreateLeftBaggage() {

    let par = {
        gender_shipper: "",
        name_shipper: "",
        email_shipper: "",
        phone_shipper: "",
        address_shipper: "",
        free_wrapping: "",
        length: "",
        width: "",
        weight: "",
        weight_unit: "",
        height: "",
        quantity: "",
        description: "",
        type: "",
        duration: "",
        shipping_costs: "",
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
