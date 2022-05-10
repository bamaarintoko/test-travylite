import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AppBar } from "../../../component/AppBar";
import BoxShadow from "../../../component/BoxShadow";
import { general_style } from "../../../component/general_style";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import styles from "../../../styles/General.module.css"
import Link from "next/link"
import withAuth from "../../../component/withAuth";
import { useRouter } from "next/router";
import useGetBoothTravylite from "../../../custom_hook/useGetBoothTravylite";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { FILL_SELECTED_BOOTH } from "../../../reducer/boothTravyliteReducer"
import BoothTravylite from "../../../component/BoothTravylite";
import { usePostData } from "../../../helper/request";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import Loading from "../../../component/Loading";
function PageDropOff() {
    const route = useRouter()
    const dispatch = useDispatch()
    const { boothTravyliteReducer: { selected_booth } } = useSelector(s => s)

    const [func_validate, validate_res] = usePostData("left-baggage/step-drop-off")
    const [msg] = useBeautyAlert()
    useEffect(() => {
        if (validate_res.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(validate_res.success_res.message)
            route.push("page-detail-penitipan-bagasi")
        }

        if (validate_res.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(validate_res.error_res.data.message)
            // console.log("validate_res : ", validate_res)
        }
    }, [validate_res.success, validate_res.failed])

    function on_validate() {
        return () => {
            let par = {
                port_id: selected_booth.id
            }
            func_validate(par)
            console.log("par : ", par)
        }
    }

    // page-detail-penitipan-bagasi
    return (
        <Contain>
            <Header>
                <AppBar title={"Drop-Off Detail"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <BoothTravylite />
            </Content>
            {msg.alert}
            <Loading loading={validate_res.loading} />
            <Footer style={{ padding: 16 }}>
                <Button onClick={on_validate()} sx={general_style.primary_button} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDropOff)