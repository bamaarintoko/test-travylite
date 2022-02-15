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
import Link from "next/link"
export default function PagePickUp() {
    const [alamat_value, alamat_input] = useTextArea();
    const [detail_lokasi_value, detail_lokasi_input] = useInput()
    const [pengirim_value, pengirim_input] = useInput()
    const [nomor_telepon_value, nomor_telepon_input] = useInput()
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
                        {alamat_input}
                        <Divider />
                        <Label title={"Detail Lokasi"} />
                        {detail_lokasi_input}
                        <Divider />
                        <Label title={"Pengirim"} />
                        {pengirim_input}
                        <Divider />
                        <Label title={"Nomor Telepon"} />
                        {nomor_telepon_input}
                        <Divider />
                    </Stack>
                </Grid>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Link href={"page-drop-off"}>

                    <Button fullWidth variant="contained">Konfirmasi</Button>
                </Link>
            </Footer>
        </Contain>
    )
}