// #2
import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import styles from '../../styles/PageEkstraBagasi.module.css';
import Link from "next/link"
import withAuth from "../../component/withAuth";
import { Box } from "@mui/system";
import { general_style } from "../../component/general_style";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useGet, usePostData } from "../../helper/request";
import Loading from "../../component/Loading";
import FlashMessage from "../../component/FlashMessage";
import { FILL_VIRTUAL_ACCOUNT } from "../../reducer/virtualAccountReducer";
import { CREDIT_CARD, DANA, EWALLET, LINKAJA, RETAIL_OUTLET, VIRTUAL_ACCOUNT } from "../../helper/const";
import { FILL_CREDIT_CARD } from "../../reducer/creditCardReducer";
import { FILL_RETAIL_OUTLET } from "../../reducer/payWithRetailOutlet"
import { FILL_E_WALLET } from "../../reducer/payWithEwalletReducer";
function PageRingkasanPembayaran() {
    const route = useRouter()
    const dispatch = useDispatch()
    const {
        payWithCreditCardReducer: { value },
        paymentSummaryReducer: { data },
        paymentMethodReducer: { method, group }
    } = useSelector(s => s)
    //page-detail-invoice
    const [func_create_payment, res_create_payment] = usePostData("payment/create-payment")
    const [func_payment_detail, res_payment_detail] = useGet()
    useEffect(() => {
        // console.log(Object.keys(method).length)
        if (res_create_payment.success) {
            // console.log("==> ", res_create_payment)
            if (group === VIRTUAL_ACCOUNT) {
                fetch_payment_detail()
            } else if (group === CREDIT_CARD) {
                dispatch({
                    type: FILL_CREDIT_CARD,
                    value: res_create_payment.success_res
                })
                route.push("paywithcc/page-credit-card")
            } else if (group === RETAIL_OUTLET) {
                dispatch({
                    type: FILL_RETAIL_OUTLET,
                    value: res_create_payment.success_res.data
                })
                route.push("paywithretailoutlet/page-retail-outlet")
            } else if (group === EWALLET) {
                if (method.code === LINKAJA || method.code === DANA) {
                    dispatch({
                        type: FILL_E_WALLET,
                        value: res_create_payment.success_res.data
                    })
                    route.push("paywithewallet/page-ewallet")
                }
            }
            res_create_payment.setSuccess(false)
        }
    }, [res_create_payment])

    useEffect(() => {
        if (res_payment_detail.success) {
            // console.log("res_payment_detail", res_payment_detail)
            if (group === VIRTUAL_ACCOUNT) {
                dispatch({
                    type: FILL_VIRTUAL_ACCOUNT,
                    value: res_payment_detail.success_res
                })
                route.push("paywithva/page-virtual-account")
            }
            res_payment_detail.setSuccess(false)
        }
    }, [res_payment_detail])

    function create_payment() {
        return () => {
            if (method.code === "OVO") {
                route.push("paywithewallet/page-phone-number")
            } else {
                let par = {
                    orderId: data.order_id,
                    name: group,
                    code: method.code,
                    transaction_fee: method.payment.transaction_fee,
                    tax_amount: method.payment.tax_amount

                }
                func_create_payment(par)
                console.log("par ", par)
            }
        }
    }

    function fetch_payment_detail() {
        func_payment_detail({}, `payment/${data.order_id}`)
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Ringkasan Pembayaran"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 137 }}>
                    <Stack sx={{ alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 500, color: "#323232" }}>Total Harga</span>
                        {
                            Object.keys(method).length !== 0
                                ?
                                <span style={{ fontFamily: 'Roboto', fontSize: 34, fontWeight: 'bold', color: "#0065AF" }}>{method.payment.total_amount}</span>

                                :
                                <span style={{ fontFamily: 'Roboto', fontSize: 34, fontWeight: 'bold', color: "#0065AF" }}>{data.subtotal}</span>
                        }
                    </Stack>
                </Box>
                <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px' }}>
                    <Stack>
                        {
                            Object.keys(method).length === 0
                                ?
                                <Box sx={{ padding: '16px' }} onClick={() => route.push("page-pilihan-pembayaran")}>
                                    <Stack>
                                        <span style={general_style.heading_dark_bold}>Metode Pembayaran</span>
                                        <span style={general_style.heading_dark}>-- pilih methode pembayaran --</span>
                                    </Stack>
                                </Box>
                                :
                                <Box sx={{ padding: '16px' }}>
                                    <Stack>
                                        <span style={general_style.heading_dark_bold}>Metode Pembayaran</span>

                                        <Stack direction={'row'}>
                                            <Box sx={{ flex: 1 }}>
                                                <span style={general_style.heading_dark}>{method.name}</span>
                                            </Box>
                                            <Box onClick={() => route.push("page-pilihan-pembayaran")}>
                                                <span style={general_style.heading_dark_bold}>Ganti</span>
                                            </Box>
                                        </Stack>
                                    </Stack>

                                </Box>
                        }
                        <Box sx={{ height: "1px", background: 'rgba(0, 0, 0, 0.1)' }} />
                        <Box sx={{ padding: '16px' }}>
                            <Stack spacing={2}>
                                {
                                    data.courier_costs.map((x, y) => {
                                        return (
                                            <Menu key={y} label={x.text} val={x.value} />
                                        )
                                    })


                                }
                                {
                                    Object.keys(method).length !== 0
                                    &&
                                    <>
                                        <Menu label={"tax_amount"} val={method.payment.tax_amount} />
                                        <Menu label={"transaction_fee"} val={method.payment.transaction_fee} />
                                    </>
                                }
                            </Stack>
                        </Box>
                        {/* <div style={{ height: 112, flexDirection: 'column', display: 'flex', justifyContent: 'space-between', padding: 16 }}>

                        </div> */}
                        <div style={{ height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
                        <Box sx={{ padding: '16px' }}>
                            <Stack direction={'row'}>
                                <Box sx={{ flex: 1 }}>
                                    <span style={general_style.heading_dark_bold}>Total</span>
                                </Box>
                                <Box>
                                    {
                                        Object.keys(method).length !== 0
                                            ?
                                            <span style={general_style.heading_dark_bold}>{method.payment.total_amount}</span>

                                            :
                                            <span style={general_style.heading_dark_bold}>{data.subtotal}</span>
                                    }
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>

                {/* <Box dangerouslySetInnerHTML={{ __html: value }} /> */}
                {/* <div dangerouslySetInnerHTML={{ __HTML: 'First &middot; Second' }} /> */}
            </Content>
            <FlashMessage arg={res_create_payment} />
            <Footer>
                <Box sx={{ padding: '16px', flex: 1 }}>
                    <Button disabled={Object.keys(method).length === 0} onClick={create_payment()} sx={general_style.primary_button} fullWidth variant="contained">Bayar</Button>
                </Box>
            </Footer>
            <Loading loading={res_create_payment.loading} />
        </Contain>
    )
}

const Menu = ({ label = "label", val = "val" }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 2 }}>
                <span style={style.text}>{label}</span>
            </div>
            {/* <div>
                <span style={style.text}>Rp</span>
            </div> */}
            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                <span style={style.text}>{val}</span>
            </div>
        </div>
    )
}

const style = {
    text: {
        fontFamily: 'Roboto', fontSize: 14, color: 'rgba(0, 0, 0, 0.5)'
    }
}

export default withAuth(PageRingkasanPembayaran)