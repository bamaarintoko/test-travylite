
const initialZoneRecipient = {
    provinces: [],
    districts: [],
    subdistricts: [],
    villages: []
}

export const RECIPIENT_ZONE = "RECIPIENT_ZONE"
export const RECIPIENT_PROVINCES = "RECIPIENT_PROVINCES";
export const RECIPIENT_DISTRICTS = "RECIPIENT_DISTRICTS";
export const RECIPIENT_SUBDISTRICTS = "RECIPIENT_SUB_DISTRICTS";
export const RECIPIENT_VILLAGES = "RECIPIENT_VILLAGES";

export function zoneRecipient(state = initialZoneRecipient, action) {
    switch (action.type) {
        case `SET_${RECIPIENT_ZONE}`:
            return {
                ...state,
                provinces: action.provinces,
                districts: action.districts,
                subdistricts: action.subdistricts,
                villages: action.villages
            }
        case RECIPIENT_PROVINCES:
            return {
                ...state,
                provinces: action.provinces
            }
        case RECIPIENT_DISTRICTS:
            return {
                ...state,
                districts: action.districts
            }
        case RECIPIENT_SUBDISTRICTS:
            return {
                ...state,
                subdistricts: action.subdistricts
            }
        case RECIPIENT_VILLAGES:
            return {
                ...state,
                villages: action.villages
            }
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