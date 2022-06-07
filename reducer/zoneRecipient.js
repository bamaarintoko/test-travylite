const initialZoneRecipient = {
    provinces: [], // array propinsi
    districts: [], // array kabupaten / kota
    subdistricts: [], // array kecamatan
    villages: [], // array kelurahan,
    full_zone_recipient: {}
}

export const FILL_RECIPIENT_ZONE = "FILL_RECIPIENT_ZONE"
export const CLEAR_RECIPIENT_ZONE = "CLEAR_RECIPIENT_ZONE"
export const FILL_RECIPIENT_FULL_ZONE = "FILL_RECIPIENT_FULL_ZONE"

export default function zoneRecipient(state = initialZoneRecipient, action) {
    switch (action.type) {
        case FILL_RECIPIENT_FULL_ZONE:
            return {
                ...state,
                full_zone_recipient:action.value
            }
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