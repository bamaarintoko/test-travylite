import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import FormRecipient from "../../../component/FormRecipient";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import RegionRecipient from "../../../component/RegionRecipient";
import useInput from "../../../component/useInput";
import useInputSelect from "../../../component/useInputSelect";
import useTextArea from "../../../component/useTextArea";
import withAuth from "../../../component/withAuth";
import { Divider, Label } from "../../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPenerima() {
    const [gelar_value, gelar_select, setDataGelar] = useInputSelect()
    const [kelurahan_value, kelurahan_select] = useInputSelect()
    const [full_name_value, full_name_input] = useInput()
    const [email_value, email_input] = useInput()
    const [alamat_value, alamat_input] = useTextArea();
    const [email_konfirmasi_value, email_konfirmasi_input] = useInput()
    const route = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penerima"} />
            </Header>
            <Content>
                <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: 40, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>Merchant to Door</span>
                    </Box>
                </Stack>
                <Stack spacing={0} sx={{ padding: '16px' }}>
                    <FormRecipient/>
                    <Divider/>
                    <RegionRecipient/>
                    <Divider/>
                </Stack>
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={() => route.push("page-detail-oleh-oleh")} sx={{ backgroundColor: '#0065AF', borderRadius: '16px' }} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenerima)