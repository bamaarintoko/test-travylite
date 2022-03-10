import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import useInputNumber from "../../component/useInputNumber";
import useTextArea from "../../component/useTextArea";
import { useRouter } from 'next/router'
import withAuth from "../../component/withAuth";

function PageDetailPaket() {
    const [berat_value, berat_input] = useInputNumber()
    const [jumlah_value, jumlah_input] = useInputNumber()
    const [deskripsi_value, deskripsi_input] = useTextArea()

    const router = useRouter();

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Paket"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Berat</span>
                                {berat_input}
                            </Stack>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Jumlah</span>
                                {jumlah_input}
                            </Stack>
                        </Stack>
                        <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                        {deskripsi_input}
                    </Stack>
                </Grid>
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={() => router.push("page-detail-penerima")} fullWidth variant="contained">Lanjutkan</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPaket)