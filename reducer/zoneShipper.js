const initialZoneShipper = {
    provinces: [],
    districts: [],
    subdistricts: [],
    villages: []
}

export const FILL_SHIPPER_ZONE = "FILL_SHIPPER_ZONE"
export const CLEAR_SHIPPER_ZONE = "CLEAR_SHIPPER_ZONE"

export default function zoneShipper(state = initialZoneShipper, action) {
    switch (action.type) {
        case FILL_SHIPPER_ZONE:
            return {
                ...state,
                [action.field]: action.value
            }
        case CLEAR_SHIPPER_ZONE:
            const obj = { ...state }
            Object.keys(obj).map((key) => {
                if (key in action.clear) {
                    obj[key] = []
                }
            })
            return obj;
        default:
            return state;
    }
}