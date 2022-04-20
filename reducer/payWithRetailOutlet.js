const initialData = {
    retail_outlet: {

    }
}

export const FILL_RETAIL_OUTLET = "FILL_RETAIL_OUTLET"

export default function payWithRetailOutlet(state = initialData, action) {
    switch (action.type) {
        case FILL_RETAIL_OUTLET:
            return {
                ...state,
                retail_outlet: action.value
            }
        default:
            return state;
    }
}