import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import useInputNumber from "../../../component/useInputNumber";
import useTextArea from "../../../component/useTextArea";
import styles from "../../../styles/General.module.css"
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import Link from "next/link"
import { general_style } from "../../../component/general_style";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../../component/withAuth";
import useGeneralInput from "../../../custom_hook/useGeneralInput";
import { FILL_FORM_DETAIL_LUGGAGE, FILL_FORM_DETAIL_LUGGAGE_ERROR } from "../../../reducer/formLeftBaggageDetailLuggage";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import { usePostData } from "../../../helper/request";
import Loading from "../../../component/Loading";
import { FILL_ITEM_ORDER_LEFT_BAGGAGE } from "../../../reducer/itemOrderLeftBaggage";
import { FILL_GENERAL_PACKAGE } from "../../../reducer/generalPackage";

function PageDetailPenitipanBagasi() {
    const route = useRouter()
    const dispatch = useDispatch()
    const [msg] = useBeautyAlert()
    const { formLeftBaggageDetailLuggage:
        {
            weight, quantity, description
        }
    } = useSelector((state) => state)
    const [func_validate, validate_res] = usePostData("left-baggage/step-detail-baggage")
    const [_weight] = useInputNumber()
    const [_quantity] = useInputNumber("")
    const [_description] = useGeneralInput(true)

    useEffect(() => {
        _weight.setError(weight.error)
        _quantity.setError(quantity.error)
        _description.setError(description.error)
        console.log("gzzzzzzz")
    }, [weight.error, quantity.error, description.error])

    useEffect(() => {
        if (validate_res.success) {
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'weight',
                value: weight.value * 1000
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'quantity',
                value: quantity.value
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'desc',
                value: description.value
            })
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(validate_res.success_res.message)
            route.push("/kurir/page-pilihan-pengiriman")
        }

        if (validate_res.failed) {
            dispatch({
                type: FILL_FORM_DETAIL_LUGGAGE_ERROR,
                errors: validate_res?.error_res?.data?.errors ?? {}
            })
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(validate_res.error_res.data.message)
            // console.log("validate_res : ", validate_res)
        }
    }, [validate_res.success, validate_res.failed])

    useEffect(() => {
        _weight.setValue(weight.value)
        _quantity.setValue(quantity.value)
        _description.setValue(description.value)
    }, [])

    useEffect(() => {
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'weight',
            value: _weight.value
        })
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'quantity',
            value: _quantity.value
        })
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'description',
            value: _description.value
        })
    }, [_weight.value, _quantity.value, _description.value])

    function on_validate() {
        return () => {
            let par = {
                weight: weight.value,
                quantity: quantity.value,
                description: description.value
            }
            func_validate(par)
            console.log("par : ", par)
        }
    }

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penitipan Bagasi"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Berat</span>
                                {_weight.input}
                            </Stack>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Jumlah</span>
                                {_quantity.input}
                            </Stack>
                        </Stack>
                        <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                        {_description.input}
                    </Stack>
                </Grid>
                <div style={{ height: 16 }} />
                <Grid item xs={12} md={12}>
                    <div style={{ height: 16 }} />
                    <div>
                        <span className={styles.text_normal_black}>Upload Foto Bagasi Anda</span>
                        <div style={{ height: 132, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AddAPhotoTwoToneIcon fontSize="large" sx={{ color: 'rgba(0, 0, 0, 0.3)' }} />
                        </div>
                    </div>
                </Grid>
            </Content>
            {msg.alert}
            <Loading loading={validate_res.loading} />
            <Footer style={{ padding: 16 }}>
                <Button sx={general_style.primary_button} onClick={on_validate()} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenitipanBagasi)