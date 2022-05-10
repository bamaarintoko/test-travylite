const initial_data = {
    item: {
        label: "Item",
        value: ""
    },
    weight: {
        label: "Berat",
        value: ""
    },
    description: {
        label: "Deskripsi",
        value: ""
    },
    delivery: {
        label: "Pengiriman",
        value: ""
    }
}

export const FILL_ITEM_ORDER_EXTRA_BAGGAGE = "FILL_ITEM_ORDER_EXTRA_BAGGAGE"

export default function itemOrderExtraBaggage(state = initial_data, action) {
    switch (action.type) {
        case FILL_ITEM_ORDER_EXTRA_BAGGAGE:
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    value: action.value
                }
            }
        default:
            return state;
    }

}