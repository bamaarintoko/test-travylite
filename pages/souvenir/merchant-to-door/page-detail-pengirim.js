// import { AppBar } from "@mui/material";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import FormShipper from "../../../component/FormShipper";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import RegionShipper from "../../../component/RegionShipper";
import useInput from "../../../component/useInput";
import useInputSelect from "../../../component/useInputSelect";
import useTextArea from "../../../component/useTextArea";
import withAuth from "../../../component/withAuth";
import { Divider, Label } from "../../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPengirim() {
    const route = useRouter()
    const [gelar_value, gelar_select, setDataGelar] = useInputSelect()
    const [kelurahan_value, kelurahan_select] = useInputSelect()
    const [full_name_value, full_name_input] = useInput()
    const [email_value, email_input] = useInput()
    const [alamat_value, alamat_input] = useTextArea();
    const [email_konfirmasi_value, email_konfirmasi_input] = useInput()
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content>
                <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: 40, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>Merchant to Door</span>
                    </Box>
                </Stack>
                <Stack spacing={0} sx={{padding:'16px'}}>
                    <FormShipper/>
                    <Divider/>
                    <RegionShipper/>
                    <Divider/>
                    <Divider/>
                    <Divider/>
                </Stack>
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button sx={{ backgroundColor: '#0065AF', borderRadius: '16px' }} onClick={() => route.push("page-detail-penerima")} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPengirim)