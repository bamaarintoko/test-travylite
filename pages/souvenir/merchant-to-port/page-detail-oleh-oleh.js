import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack } from "@mui/material";
import useInputNumber from "../../../component/useInputNumber";
import useTextArea from "../../../component/useTextArea";
import { general_style } from "../../../component/general_style";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
export default function () {

    const [berat_value, berat_input] = useInputNumber()
    const [jumlah_value, jumlah_input] = useInputNumber()
    const [deskripsi_value, deskripsi_input] = useTextArea()

    const route = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Oleh-Oleh"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: 40, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>Merchant to Port</span>
                    </Box>
                </Stack>
                <Stack spacing={2} sx={{ padding: '16px' }}>
                    <Stack direction="row" spacing={2}>
                        <Stack sx={{ display: 'flex', flex: 1 }}>
                            <span style={general_style.heading_dark_bold}>Berat</span>
                            {berat_input}
                        </Stack>
                        <Stack sx={{ display: 'flex', flex: 1 }}>
                            <span style={general_style.heading_dark_bold}>Jumlah</span>
                            {jumlah_input}
                        </Stack>
                    </Stack>
                    <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                    {deskripsi_input}
                </Stack>
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={() => route.push("/kurir/page-pilihan-pengiriman")} startIcon={<AddIcon />} fullWidth sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }} variant="contained">Tambahkan</Button>
            </Footer>
        </Contain>
    )
}