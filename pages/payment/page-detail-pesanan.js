// #1
import React, { useEffect } from "react";
import { Container, Grid, Stack } from "@mui/material";
import Contain from "../../component/Container";
import styles from '../../styles/PageEkstraBagasi.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import Button from '@mui/material/Button';
import Content from "../../component/Content";
import { Box } from "@mui/system";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { AppBar } from "../../component/AppBar";
import Link from "next/link"
import withAuth from "../../component/withAuth";
import { useDispatch, useSelector } from "react-redux";
import useCreateExtraBaggage from "./HookOrder/useCreateExtraBaggage";
import useCreateLeftBaggage from "./HookOrder/useCreateLeftBaggage";
import { DOCUMENT_DELIVERY, EXTRA_BAGGAGE, LEFT_BAGGAGE } from "../../helper/const";
import Loading from "../../component/Loading";
import FlashMessage from "../../component/FlashMessage";
import { useRouter } from "next/router";
import { useGet } from "../../helper/request";
import { FILL_PAYMENT_SUMMARY } from "../../reducer/paymentSummaryReducer";
import { general_style } from "../../component/general_style";
import itemOrderLeftBaggage from "../../reducer/itemOrderLeftBaggage";
function PageDetailPesanan() {
    const route = useRouter()
    const dispatch = useDispatch()
    const {
        customerReducer: {
            shipper_full_zone: {
                province, city, district, name, postal_code
            },
            recipient_full_zone
        },
        deliveryReducer: {
            type
        },
        courierReducer: {
            selected_courier: {
                data
            }
        },
        dataReceiver: {
            gender_receiver, name_receiver, phone_receiver, address_receiver
        },
        dataShipper: {
            gender_shipper, name_shipper, phone_shipper, address_shipper
        },
        itemOrderDocument,
        multilingual: {
            words
        },
        zoneShipper: {
            full_zone_shipper: fzs
        },
        zoneRecipient: {
            full_zone_recipient: fzr
        }
    } = useSelector(s => s)

    const [extra_baggage] = useCreateExtraBaggage()
    const [left_baggage] = useCreateLeftBaggage()
    const [fetch_summary_payment, res_sumarry_payment] = useGet()
    useEffect(() => {
        if (extra_baggage.response.success) {
            // console.log("extra_baggage", extra_baggage)
            fetch_payment_summary()
            // route.push("page-ringkasan-pembayaran")
        }
    }, [extra_baggage.response.success])

    useEffect(() => {
        if (res_sumarry_payment.success) {
            // console.log("res_sumarry_payment", res_sumarry_payment)
            dispatch({
                type: FILL_PAYMENT_SUMMARY,
                value: res_sumarry_payment.success_res.data
            })
            route.push("page-ringkasan-pembayaran")
        }
    }, [res_sumarry_payment.success])
    function fetch_payment_summary() {
        // console.log("extra_baggage", extra_baggage.response.success_res.data.order_id)
        fetch_summary_payment({}, `extra-baggage/detail-order/${extra_baggage.response.success_res.data.order_id}`)
    }

    function create_order() {
        return () => {
            if (type === EXTRA_BAGGAGE) {
                extra_baggage.create()
            } else if (type === LEFT_BAGGAGE) {
                left_baggage.create()
                console.log("aa")
            }
        }
    }
    // console.log("recipient", recipient)
    // page-pilihan-pembayaran

    // souvenir
    // Item, Berat, Deskripsi, Pengiriman

    // document delivery
    // Smart Box, No. Smart Box, Item, Berat, Deskripsi, Pengiriman

    // Extra Baggage & left baggage
    // Item, Berat, Deskripsi, Pengiriman

    function render_comp() {
        return (<span>a</span>)
    }
    return (
        <Contain>
            <Header>
                <AppBar title={words.order_details} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack direction={"row"}>
                    <Box sx={{ display: 'flex' }}>
                        <Stack>
                            <LocationOnIcon sx={{ color: "#0065AF" }} />
                            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                                <Box sx={{ width: '1px', borderRightWidth: '1px', borderRightStyle: 'dashed', borderRightColor: 'rgba(0, 0, 0, 0.2)' }} />
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ marginBottom: '40px', marginLeft: '29px' }}>
                        <Stack>
                            <span style={general_style.heading_dark_bold}>{words.shipper}</span>
                            <span style={general_style.heading_dark_bold}>{gender_shipper.value}. {name_shipper.value}</span>
                            <span style={general_style.heading_light}>{phone_shipper.value}</span>
                            <span style={general_style.heading_light}>{address_shipper.value}</span>
                            <span style={general_style.heading_light}>{`${fzs.province}, ${fzs.city}, ${fzs.district}, ${fzs.name}, ${fzs.postal_code}`}</span>
                        </Stack>
                    </Box>
                </Stack>
                <Stack direction={'row'}>
                    <Box>
                        <LocationOnIcon sx={{ color: "#E84A25" }} />
                    </Box>
                    <Stack sx={{ marginBottom: '40px', marginLeft: '29px' }}>
                        <span style={general_style.heading_dark_bold}>{words.recipient}</span>
                        <span style={general_style.heading_dark_bold}>{gender_receiver.value}. {name_receiver.value}</span>

                        <span style={general_style.heading_light}>{phone_receiver.value}</span>
                        <span style={general_style.heading_light}>{address_receiver.value}</span>
                        <span style={general_style.heading_light}>{`${fzr.province}, ${fzr.city}, ${fzr.district}, ${fzr.name}, ${fzr.postal_code}`}</span>
                    </Stack>
                </Stack>
                <Stack direction={'row'}>
                    <Box>
                        <BusinessCenterTwoToneIcon sx={{ color: "#E84A25" }} />
                    </Box>
                    <Stack sx={{ marginLeft: '29px' }}>
                        <span className={styles.text_label_detail_pesanan}>{type}</span>
                        <span className={styles.text_label_detail_pesanan}>{gender_shipper.value}. {name_shipper.value}</span>
                        {/* {render_comp} */}
                        {
                            type === EXTRA_BAGGAGE
                            &&
                            <ItemOrderExtraBaggage />
                        }
                        {
                            type === LEFT_BAGGAGE
                            &&
                            <ItemOrderLeftBaggage />
                        }
                        {
                            type === DOCUMENT_DELIVERY
                            &&
                            <ItemOrderDocument />
                        }
                        {/* <span className={styles.text_desc}>0812 1234 1234</span>
                        <span className={styles.text_desc}>Dipowinatan 303, Keparakan, Mergangsan, 55152</span> */}
                    </Stack>
                </Stack>
            </Content>
            <Footer>
                <Stack sx={{ flex: 1, padding: '16px' }} direction={'row'}>
                    <Box sx={{ flex: 1 }}>
                        <Stack>
                            <span style={general_style.heading_dark_bold}>{words.total_price}</span>
                            <span style={style.nominal}>Rp {data.rates}</span>
                        </Stack>
                    </Box>
                    <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Button sx={general_style.primary_button} onClick={create_order()} fullWidth variant="contained">{words.pay}</Button>
                    </Box>
                </Stack>
            </Footer>
            <FlashMessage arg={extra_baggage.response} />
            <Loading loading={extra_baggage.response.loading} />
        </Contain>
    )
}
function ItemOrderLeftBaggage() {
    const { itemOrderLeftBaggage: item } = useSelector(s => s)
    return (
        <Stack>
            {
                Object.keys(item).map((key, index) => {
                    console.log("===> ", item[key])
                    return (
                        <Stack key={index} direction={'row'}>
                            <Box sx={{ width: 110 }}>
                                <span style={general_style.heading_light}>{item[key].label}</span>
                            </Box>
                            <Box sx={{ width: 10 }}>
                                <span style={general_style.heading_light}>: </span>
                            </Box>
                            <Box>
                                <span style={general_style.heading_light}>{item[key].value}</span>
                            </Box>
                        </Stack>

                    )
                })
            }
        </Stack>
    )

}
function ItemOrderExtraBaggage() {
    const { itemOrderExtraBaggage: item } = useSelector(s => s)
    return (
        <Stack>
            {
                Object.keys(item).map((key, index) => {
                    console.log("===> ", item[key])
                    return (
                        <Stack key={index} direction={'row'}>
                            <Box sx={{ width: 110 }}>
                                <span style={general_style.heading_light}>{item[key].label}</span>
                            </Box>
                            <Box sx={{ width: 10 }}>
                                <span style={general_style.heading_light}>: </span>
                            </Box>
                            <Box>
                                <span style={general_style.heading_light}>{item[key].value}</span>
                            </Box>
                        </Stack>

                    )
                })
            }
        </Stack>
    )

}
function ItemOrderDocument() {
    const { itemOrderDocument: item } = useSelector(s => s)
    return (
        <Stack>
            {
                Object.keys(item).map((key, index) => {
                    console.log("===> ", item[key])
                    return (
                        <Stack key={index} direction={'row'}>
                            <Box sx={{ width: 110 }}>
                                <span style={general_style.heading_light}>{item[key].label}</span>
                            </Box>
                            <Box sx={{ width: 10 }}>
                                <span style={general_style.heading_light}>: </span>
                            </Box>
                            <Box>
                                <span style={general_style.heading_light}>{item[key].value}</span>
                            </Box>
                        </Stack>

                    )
                })
            }
        </Stack>
    )
}

export default withAuth(PageDetailPesanan)

const style = {
    nominal: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '17.5px',
        color: "#0065AF"
    }
}