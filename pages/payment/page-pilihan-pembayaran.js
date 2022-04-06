
import { Grid, Stack } from "@mui/material";
import Image from 'next/image'

import React, { useEffect, useState } from "react";
import Contain from "../../component/Container";
import styles from '../../styles/PageEkstraBagasi.module.css';
import { Box, flexbox } from "@mui/system";
import Header from "../../component/Header";
import Content from "../../component/Content";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AppBar } from "../../component/AppBar";
import Link from "next/link"
import withAuth from "../../component/withAuth";
import { general_style } from "../../component/general_style";
import { useGet } from "../../helper/request";
import Loading from "../../component/Loading";
import { useDispatch, useSelector } from "react-redux";
import { FILL_PAYMENT_METHOD } from "../../reducer/paymentMethodReducer";
import useCreateExtraBaggage from "./HookOrder/useCreateExtraBaggage";
import { EXTRA_BAGGAGE } from "../../helper/const";
import FlashMessage from "../../component/FlashMessage";
import { useRouter } from "next/router";
function PagePilihanPembayaran() {
    const dispatch = useDispatch()
    const route = useRouter()
    const {
        paymentMethodReducer: {
            method
        },
        deliveryReducer: {
            type
        }
    } = useSelector(s => s)
    const [payment_methods, setPaymentMethods] = useState([])
    const [func_fetch_payment_method, res_payment_method] = useGet()

    const [extra_baggage] = useCreateExtraBaggage()

    useEffect(() => {
        fetch_payment_method()
    }, [])

    useEffect(() => {
        if (res_payment_method.success) {
            setPaymentMethods(res_payment_method.success_res.payment_methods)
            console.log("res_payment_method ==> ", res_payment_method)
        }
    }, [res_payment_method.success])

    // useEffect(() => {
    //     const lng = Object.keys(method).length
    //     console.log("lng", lng)
    //     if (lng > 0) {
    //         // create_order()
            
    //     }
    // }, [method])

    // useEffect(() => {
    //     if (extra_baggage.response.failed) {
    //         console.log("extra_baggage.response", extra_baggage.response)
    //     }
    // }, [extra_baggage.response])

    function fetch_payment_method() {
        func_fetch_payment_method({}, "payment/payment-method")
    }
    function choose_pament(payment) {
        return () => {
            dispatch({
                type: FILL_PAYMENT_METHOD,
                value: payment
            })
            route.back()
        }
    }
    // function create_order() {
    //     if (type === EXTRA_BAGGAGE) {
    //         extra_baggage.create()
    //         console.log("===>")
    //     }
    // }
    //page-ringkasan-pembayaran
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilihan Pembayaran"} />
            </Header>
            <Content style={{ padding: 16 }}>
                {
                    payment_methods.map((x, y) => {
                        return (
                            <Box key={y}>
                                <Box sx={{ height: '50px', alignItems: 'center', display: 'flex' }}>
                                    <span style={general_style.heading_dark_bold}>{x.group}</span>
                                </Box>
                                {
                                    x.methods.map((i, j) => {
                                        return (
                                            <Box key={j} onClick={choose_pament(i)}>
                                                <Stack direction={"row"} sx={{ height: '76px', alignItems: 'center', borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: "#E0E0E0" }}>
                                                    <Box component="img" sx={{
                                                        width: '100%',
                                                        maxWidth: '50px',
                                                        height: 'auto'
                                                    }} src={i.logo}>
                                                        {/* <Image /> */}
                                                        {/* <img src={i.logo} style={{ height: '40', width: '40' }} /> */}
                                                    </Box>
                                                    <Box sx={{ flex: 1, marginLeft: '16px' }}>
                                                        <span style={general_style.heading_dark}>{i.name}</span>
                                                    </Box>
                                                    <Box>
                                                        <KeyboardArrowRightIcon />
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        )
                    })
                }
            </Content>
            <FlashMessage arg={extra_baggage.response} />
            <Loading loading={res_payment_method.loading || extra_baggage.response.loading} />
        </Contain>
    )
}

const paymentArr = [
    {
        label: "E-Wallet",
        data: [
            {
                image: "",
                label: "OVO"
            },
            {
                image: "",
                label: "Shopee Pay"
            },
            {
                image: "",
                label: "Dana"
            },

        ]
    },
    {
        label: "Transfer Antar Bank",
        data: [
            {
                image: "",
                label: "Transfer Mandiri"
            },
            {
                image: "",
                label: "Transfer BCA"
            },
            {
                image: "",
                label: "Transfer BRI"
            },
            {
                image: "",
                label: "Transfer BNI"
            },
        ]
    },
]

export default withAuth(PagePilihanPembayaran)