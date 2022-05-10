// reducer for page ===> payment/page-detail-pesanan
// souvenir : item, berat, deskripsi, pengiriman
// document delivery : smart box, no smart box, item, berat, deskripsi, pengiriman
// extra baggage & left baggage : item, berat, deskripsi, pengiriman

const initial_data = {
    souvenir: {
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
    },
    document_delivery: {
        smarbox: {
            label: "",
            value: ""
        },
        smartboxnumber: {
            label: "",
            value: ""
        },
        item: {
            label: "",
            value: ""
        },
        weight: {
            label: "",
            value: ""
        },
        description: {
            label: "",
            value: ""
        },
        delivery: {
            label: "",
            value: ""
        }
    },
    extra_baggage: {
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
    },
    left_baggage: {
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
    },
    selected: ""
}

export const FILL_ORDER_DETAILS = "FILL_ORDER_DETAILS"
export const ORDER_SOUVENIR = "souvenir"
export const ORDER_DOCUMENT_DELIVERY = "document_delivery"
export const ORDER_EXTRA_BAGGAGE = "extra_baggage"
export const ORDER_LEFT_BAGGAGE = "left_baggage"

export default function orderDetails(state = initial_data, action) {
    switch (action.type) {
        case ORDER_EXTRA_BAGGAGE:
            return {
                ...state,
                extra_baggage:{
                    ...state.extra_baggage,
                    item:{
                        ...state.item,
                        

                    }
                }
                // item:{
                //     ...state.item
                // },
                selected: ORDER_EXTRA_BAGGAGE
            }
        default:
            return state;
    }
}