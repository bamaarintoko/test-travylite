import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import useInput from "../../component/useInput";
import useInputSelect from "../../component/useInputSelect";
import useTextArea from "../../component/useTextArea";
import withAuth from "../../component/withAuth";
import { Divider, Label } from "../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPenerima() {
    const [gelar_value, gelar_select, setDataGelar] = useInputSelect()
    const [kelurahan_value, kelurahan_select] = useInputSelect()
    const [full_name_value, full_name_input] = useInput()
    const [email_value, email_input] = useInput()
    const [alamat_value, alamat_input] = useTextArea();
    const [email_konfirmasi_value, email_konfirmasi_input] = useInput()

    const router = useRouter();
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penerima"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <Label title={"Gelar & Nama Lengkap Pengirim"} />
                    <Stack direction="row" spacing={1}>
                        {gelar_select}
                        {full_name_input}
                    </Stack>
                    <Divider />
                    <Label title={"Alamat Lengkap Penerima"} />
                    {alamat_input}
                    <Divider />
                    <Label title={"Kelurahan"} />
                    {kelurahan_select}
                    <Divider />
                </Stack>
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={() => router.push("page-detail-pengirim")} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenerima)