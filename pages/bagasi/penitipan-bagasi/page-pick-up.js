import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import useInput from "../../../component/useInput";
import useTextArea from "../../../component/useTextArea";
import { Divider, Label } from "../ekstra-bagasi/page-detail-pengirim";
import withAuth from "../../../component/withAuth";

import Link from "next/link"
import { general_style } from "../../../component/general_style";
import useGeneralInput from "../../../custom_hook/useGeneralInput";
import useGeneralDateInput from "../../../custom_hook/useGeneralDateInput";
import useDateInput from "../../../component/useDateInput";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ADDRESS_PICKUP, FILL_, FILL_FORM } from "../../../reducer/formLeftBaggagePickUp";
import moment from "moment";
import { usePostData } from "../../../helper/request";
import Loading from "../../../component/Loading";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";

function PagePickUp() {
    const {
        formLeftBaggagePickUp: {
            address_pickup,
            date_pickup,
            location_pickup,
            name_pickup,
            phone_pickup
        }
    } = useSelector(s => s)

    const route = useRouter()
    const dispatch = useDispatch()

    const [func_validate, validate_res] = usePostData("left-baggage/step-pickup")
    const [msg] = useBeautyAlert()
    const [_address_pickup] = useGeneralInput(true);
    const [_location_pickup] = useGeneralInput()
    const [_name_pickup] = useGeneralInput()
    const [_phone_pickup] = useGeneralInput()
    const [_date_pickup] = useDateInput()
    // page-drop-off

    useEffect(() => {
        _address_pickup.setValue(address_pickup.value)
        _location_pickup.setValue(location_pickup.value)
        _name_pickup.setValue(name_pickup.value)
        _phone_pickup.setValue(phone_pickup.value)
        _date_pickup.setValue(date_pickup.value)
    }, [])
    useEffect(() => {
        dispatch({
            type: FILL_FORM,
            name: 'address_pickup',
            value: _address_pickup.value
        })
        dispatch({
            type: FILL_FORM,
            name: 'location_pickup',
            value: _location_pickup.value
        })
        dispatch({
            type: FILL_FORM,
            name: 'name_pickup',
            value: _name_pickup.value
        })
        dispatch({
            type: FILL_FORM,
            name: 'phone_pickup',
            value: _phone_pickup.value
        })
        dispatch({
            type: FILL_FORM,
            name: 'date_pickup',
            value: _date_pickup.value
        })
        // console.log("date_pickup : ", moment(date_pickup.value).format('DD-MM-YYYY'))
    }, [_address_pickup.value, _location_pickup.value, _name_pickup.value, _phone_pickup.value, _date_pickup.value])

    useEffect(() => {
        if (validate_res.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            // msg.setMessage(validate_res.success_res.message)
        }
        if (validate_res.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(validate_res.success_res.message)
            console.log("validate_res : ", validate_res)
            route.push("page-drop-off")
        }
    }, [validate_res.success, validate_res.failed])

    function on_validate() {
        return () => {
            let par = {
                name_pickup: name_pickup.value,
                phone_pickup: phone_pickup.value,
                date_pickup: moment(date_pickup.value).format('DD-MM-YYYY'),
                address_pickup: address_pickup.value,
                location_pickup: location_pickup.value
            }
            func_validate(par)
            console.log("par : ", par)
        }
    }

    // page-drop-off
    return (
        <Contain>
            <Header>
                <AppBar title={"Pick Up"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={0}>
                        <span style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 14 }}>Tentukan pengambilan bagasi anda</span>
                        <Divider />
                        <Label title={"Alamat Lengkap"} />
                        {_address_pickup.input}
                        <Divider />
                        <Label title={"Detail Lokasi"} />
                        {_location_pickup.input}
                        <Divider />
                        <Label title={"Pengirim"} />
                        {_name_pickup.input}
                        <Divider />
                        <Label title={"Nomor Telepon"} />
                        {_phone_pickup.input}
                        <Divider />
                        <Label title={"Hari dan Tanggal Pick-Up"} />
                        {_date_pickup.input}
                        <Divider />
                    </Stack>
                </Grid>
            </Content>
            {msg.alert}
            <Loading loading={validate_res.loading} />
            <Footer style={{ padding: 16 }}>
                <Button onClick={on_validate()} sx={general_style.primary_button} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PagePickUp)