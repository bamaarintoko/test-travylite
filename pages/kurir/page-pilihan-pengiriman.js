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
        detailBagasiReducer: { weight }
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
        return () => {
            let par = {
                duration: selected_courier.data.etd,
                shipping_costs: selected_courier.data.rates
            }
            func_validate(par, "extra-baggage/step-courier")
            console.log("par", par)
        }
    }

    useEffect(() => {
        if (res_validate.success) {
            route.push("/payment/page-detail-pesanan")
        }
    }, [res_validate.success])

    useEffect(() => {
        if (res_fetch_courier.success) {
            console.log("res_fetch_courier", res_fetch_courier)
            dispatch({
                type: FILL_COURIERS,
                couriers: res_fetch_courier.success_res.data.services
            })
        }
    }, [res_fetch_courier.success])

    useEffect(() => {
        console.log("res_fetch_courier", res_fetch_courier)
    }, [res_fetch_courier.failed])

    useEffect(() => {
        let origin = district_code_shipper?.value ?? 0
        let destinataion = district_code_receiver?.value ?? 0
        // let weight = weight.value
        funt_fetch_courier({}, `extra-baggage/list-courier/${origin}/${destinataion}/${weight?.value ?? 0}`)
    }, [])
    console.log("couriers", couriers.length)
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilihan Pengiriman"} />
            </Header>
            <Content>
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
                            couriers.length > 0
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