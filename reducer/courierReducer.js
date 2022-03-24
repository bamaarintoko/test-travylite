export const initialCourierRed = {
    selected_courier: {
        value: "",
        data: {}
    },
    couriers: []
}

export const FILL_COURIERS = "FILL_COURIERS";
export const SELECTED_COURIER = "SELECTED_COURIER"
export function courierReducer(state = initialCourierRed, action) {
    switch (action.type) {
        case FILL_COURIERS:
            return {
                ...state,
                couriers: action.couriers
            }
        case SELECTED_COURIER:
            return {
                ...state,
                selected_courier: {
                    ...state.selected_courier,
                    value: action.value,
                    data: action.data
                }
            }
        default:
            return state;
    }
}