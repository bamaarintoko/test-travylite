
const initialZoneRecipient = {
    provinces: [], // array propinsi
    districts: [], // array kabupaten / kota
    subdistricts: [], // array kecamatan
    villages: [] // array kelurahan
}

export const FILL_RECIPIENT_ZONE = "FILL_RECIPIENT_ZONE"
export const CLEAR_RECIPIENT_ZONE = "CLEAR_RECIPIENT_ZONE"

export function zoneRecipient(state = initialZoneRecipient, action) {
    switch (action.type) {
        case FILL_RECIPIENT_ZONE:
            return {
                ...state,
                [action.field]: action.value
            }
        case CLEAR_RECIPIENT_ZONE:
            const obj = { ...state }
            Object.keys(obj).map((key) => {
                // console.log('action.clear : ', action.clear)
                if (key in action.clear) {
                    // console.log("key : ", key)
                    obj[key] = []
                }
            })
            return obj
        default:
            return state;
    }
}

const initialZoneShipper = {
    provinces: [],
    districts: [],
    subdistricts: [],
    villages: []
}

export const SHIPPER_ZONE = "SHIPPER_ZONE"
export const SHIPPER_PROVINCES = "SHIPPER_PROVINCES"
export const SHIPPER_DISTRICTS = "SHIPPER_DISTRICTS"
export const SHIPPER_SUBDISTRICTS = "SHIPPER_SUBDISTRICTS"
export const SHIPPER_VILLAGES = "SHIPPER_VILLAGES"

export const FILL_SHIPPER_ZONE = "FILL_SHIPPER_ZONE"
export const CLEAR_SHIPPER_ZONE = "CLEAR_SHIPPER_ZONE"

export function zoneShipper(state = initialZoneShipper, action) {
    switch (action.type) {
        case `SET_${SHIPPER_ZONE}`:
            return {
                provinces: action.provinces,
                districts: action.districts,
                subdistricts: action.subdistricts,
                villages: action.villages
            }
        case SHIPPER_PROVINCES:
            return {
                ...state,
                provinces: action.provinces
            }
        case SHIPPER_DISTRICTS:
            return {
                ...state,
                districts: action.districts
            }
        case SHIPPER_SUBDISTRICTS:
            return {
                ...state,
                subdistricts: action.subdistricts
            }
        case SHIPPER_VILLAGES:
            return {
                ...state,
                villages: action.villages
            }
        default:
            return state;
    }
}