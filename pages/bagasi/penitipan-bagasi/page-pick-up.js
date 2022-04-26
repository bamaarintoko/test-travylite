import { Button, Grid, Stack } from "@mui/material";
import React from "react";
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
function PagePickUp() {
    const route = useRouter()
    const [alamat] = useGeneralInput(true);
    const [detail_lokasi] = useGeneralInput()
    const [pengirim] = useGeneralInput()
    const [nomor_telepon] = useGeneralInput()
    const [pickup_date] = useDateInput()
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
                        {alamat.input}
                        <Divider />
                        <Label title={"Detail Lokasi"} />
                        {detail_lokasi.input}
                        <Divider />
                        <Label title={"Pengirim"} />
                        {pengirim.input}
                        <Divider />
                        <Label title={"Nomor Telepon"} />
                        {nomor_telepon.input}
                        <Divider />
                        <Label title={"Hari dan Tanggal Pick-Up"} />
                        {pickup_date.input}
                        <Divider />
                    </Stack>
                </Grid>
            </Content>
            <Footer style={{ padding: 16 }}>

                <Button onClick={() => route.push("page-drop-off")} sx={general_style.primary_button} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PagePickUp)