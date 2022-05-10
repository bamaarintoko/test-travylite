const initial_data = {
    smartbox: {
        label: "Smart Box",
        value: ""
    },
    smartboxnumber: {
        label: "No. Smart Box",
        value: ""
    },
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

export const FILL_ITEM_ORDER_DOCUMENT = "FILL_ITEM_ORDER_DOCUMENT"

export default function itemOrderDocument(state = initial_data, action) {
    switch (action.type) {
        case FILL_ITEM_ORDER_DOCUMENT:
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