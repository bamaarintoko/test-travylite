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
function PageDropOff() {
    const route = useRouter()
    const dispatch = useDispatch()
    return (
        <Contain>
            <Header>
                <AppBar title={"Drop-Off Detail"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <BoothTravylite />
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button onClick={() => route.push('page-detail-penitipan-bagasi')} sx={general_style.primary_button} onClick={() => route.push("page-detail-penitipan-bagasi")} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDropOff)