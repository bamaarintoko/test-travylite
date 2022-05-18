import React, { useEffect, useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
// import Contain from "../../component/Container";
// import { AppBar } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import styles from '../../styles/PageEkstraBagasi.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Radio from '@mui/material/Radio';
import { Box, style } from "@mui/system";
import Contain from "../../component/Container";
import Header from "../../component/Header";
import Content from "../../component/Content";
import { AppBar } from "../../component/AppBar";
import Link from "next/link"
import Footer from "../../component/Footer";
import withAuth from "../../component/withAuth"
import { useDispatch, useSelector } from "react-redux";
import { useGet, usePost } from "../../helper/request";
import { FILL_COURIERS, SELECTED_COURIER } from "../../reducer/courierReducer";
import { general_style } from "../../component/general_style";
import { useRouter } from "next/router";
import FlashMassage from "../../component/FlashMessage";
import Loading from "../../component/Loading";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { EXTRA_BAGGAGE, LEFT_BAGGAGE } from "../../helper/const";
import { FILL_ITEM_ORDER_EXTRA_BAGGAGE } from "../../reducer/itemOrderExtraBaggage";
import { FILL_ITEM_ORDER_LEFT_BAGGAGE } from "../../reducer/itemOrderLeftBaggage";
let kurirArr = [
    {
        label: "Kurir 1",
        data: [
            {
                label: "Same Day",
                desc: "Solusi pengiriman paling cepat. Kirim dan terima dalam 8 jam",
                price: 15000
            },
            {
                label: "Next Day",
                desc: "Layanan cepat barang sampai sehari setelah di Pick-Up",
                price: 13000
            },
            {
                label: "Regular",
                desc: "Layanan cepat barang sampai sehari setelah di Pick-Up",
                price: 10000
            }
        ],

    },
    {
        label: "Kurir 2",
        data: []

    },
    {
        label: "Kurir 3",
        data: []
    }
]

function PagePilihanPengiriman() {
    const dispatch = useDispatch()
    const route = useRouter()
    const { courierReducer: { couriers, selected_courier } } = useSelector(s => s)
    const {
        customerReducer: {
            recipient_zone: { district_code_receiver },
            shipper_zone: { district_code_shipper }
        },
        formExtraBaggageDetailLuggage: { weight: eb_weight, description: eb_desc, quantity: eb_qty },
        formLeftBaggageDetailLuggage: { weight: lb_weight, quantity: lb_qty, description: lb_desc },
        deliveryReducer: dr,
        generalPackage: gp,
        boothTravyliteReducer: { selected_booth: { district_code_port } }
    } = useSelector(s => s)

    const [func_validate, res_validate] = usePost()
    const [funt_fetch_courier, res_fetch_courier] = useGet()

    const [selectedValue, setSelectedValue] = useState('');



    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // console.log("event", event.target)
        const desc = couriers.filter(val => val.product_code === event.target.value);
        console.log("desc", desc[0])
        dispatch({
            type: SELECTED_COURIER,
            value: event.target.value,
            data: desc[0]
        })
    };

    function on_validate() {
        // function to validate courier
        return () => {
            let par = {
                duration: selected_courier.data.etd,
                shipping_costs: selected_courier.data.rates
            }
            func_validate(par, "extra-baggage/step-courier")
            console.log("par", par)
        }
    }

    function fill_item_order_extra_baggage() {
        // function to fill in item details which is useful for displaying data on order details page
        dispatch({
            type: FILL_ITEM_ORDER_EXTRA_BAGGAGE,
            name: 'delivery',
            value: selected_courier.data.product_name
        })
        dispatch({
            type: FILL_ITEM_ORDER_EXTRA_BAGGAGE,
            name: 'weight',
            value: eb_weight.value
        })
        dispatch({
            type: FILL_ITEM_ORDER_EXTRA_BAGGAGE,
            name: 'description',
            value: eb_desc.value
        })
        dispatch({
            type: FILL_ITEM_ORDER_EXTRA_BAGGAGE,
            name: 'item',
            value: eb_qty.value
        })
    }

    function fill_item_order_left_baggage() {
        // function to fill in item details which is useful for displaying data on order details page
        dispatch({
            type: FILL_ITEM_ORDER_LEFT_BAGGAGE,
            name: 'delivery',
            value: selected_courier.data.product_name
        })
        dispatch({
            type: FILL_ITEM_ORDER_LEFT_BAGGAGE,
            name: 'weight',
            value: lb_weight.value
        })
        dispatch({
            type: FILL_ITEM_ORDER_LEFT_BAGGAGE,
            name: 'description',
            value: lb_desc.value
        })
        dispatch({
            type: FILL_ITEM_ORDER_LEFT_BAGGAGE,
            name: 'item',
            value: lb_qty.value
        })
    }

    useEffect(() => {
        if (res_validate.success) {
            if (dr.type === EXTRA_BAGGAGE) {
                fill_item_order_extra_baggage()
            } else if (dr.type === LEFT_BAGGAGE) {
                fill_item_order_left_baggage()
            }
            route.push("/payment/page-detail-pesanan")
        }
    }, [res_validate.success])

    useEffect(() => {
        if (res_fetch_courier.success) {
            console.log("res_fetch_courier", res_fetch_courier)
            dispatch({
                type: FILL_COURIERS,
                couriers: res_fetch_courier?.success_res?.data?.services ?? []
            })
        }
    }, [res_fetch_courier.success])

    useEffect(() => {
        console.log("res_fetch_courier", res_fetch_courier)
    }, [res_fetch_courier.failed])

    useEffect(() => {
        let origin = '0';
        let destination = '0';

        // conditions to check what services are being used

        if (dr.type === EXTRA_BAGGAGE) {
            origin = district_code_shipper?.value ?? 0
            destination = district_code_receiver?.value ?? 0
        } else if (dr.type === LEFT_BAGGAGE) {
            origin = district_code_shipper?.value ?? 0;
            destination = district_code_port;
        }
        // let weight = weight.value
        funt_fetch_courier({}, `courier/${origin}/${destination}/${gp.weight}`)
    }, [])
    console.log("couriers", couriers.length)
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilihan Pengiriman"} />
            </Header>
            <Content>
                {
                    res_fetch_courier.loading
                    &&
                    <Box>
                        <Stack spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', height: '300px' }}>
                            <span style={{ fontSize: '12px', fontFamily: 'Roboto' }}>Sedang mengambil data pengiriman.</span>
                        </Stack>
                    </Box>
                }
                {
                    res_fetch_courier.failed
                    &&
                    <Box>
                        <Stack spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', height: '300px' }}>
                            <WarningRoundedIcon sx={{ color: "#bf360c", fontSize: "64px" }} />
                            <span style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: 'bold', color: "#bf360c" }}>Network Error!</span>
                            <span style={{ fontSize: '12px', fontFamily: 'Roboto' }}>Gagal mengambil data pengiriman</span>
                        </Stack>
                    </Box>
                }
                {
                    res_fetch_courier.success
                    &&
                    <Stack sx={{ padding: '16px' }}>
                        {
                            couriers?.length > 0 ?? 0
                                ?
                                couriers.map((x, y) => {
                                    return (
                                        <Box key={y}>
                                            <Stack direction={"row"}>
                                                <Box sx={{ width: '50', display: 'flex' }}>
                                                    <Radio
                                                        checked={selected_courier.value === x.product_code}
                                                        onChange={handleChange}
                                                        value={x.product_code}
                                                        name="radio-buttons"
                                                        inputProps={{ data: x }}
                                                    />
                                                </Box>
                                                <Box sx={{ flex: 2.5 }}>
                                                    <Stack>
                                                        <span style={general_style.heading_dark_bold}>{x.product_name}</span>
                                                        <span style={general_style.body_dark_bold}>{x.etd}</span>
                                                    </Stack>
                                                </Box>
                                                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                                    <span style={general_style.heading_dark_bold}>Rp {x.rates}</span>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    )
                                }) : <Stack sx={{ height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box>
                                        <span style={general_style.heading_dark_bold}>Tidak ada data kurir</span>
                                    </Box>
                                </Stack>
                        }

                    </Stack>
                }

            </Content>
            <Footer style={{ padding: 16 }}>
                {/* <Button */}
                <Button
                    disabled={res_fetch_courier.failed || res_fetch_courier.loading}
                    onClick={on_validate()}
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    fullWidth
                    variant="contained">Tambahkan</Button>
                {/* <Link href={"/payment/page-detail-pesanan"}>
                    <Button fullWidth variant="contained">Tambahkan</Button>
                </Link> */}
            </Footer>
            <FlashMassage arg={res_validate} />
            <Loading loading={res_validate.loading || res_fetch_courier.loading} />
        </Contain>
    )
}

export default withAuth(PagePilihanPengiriman)