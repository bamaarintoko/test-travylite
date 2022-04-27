import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import FlashMessage from "../../component/FlashMessage";
import Footer from "../../component/Footer";
import FormRecipient from "../../component/FormRecipient";
import Header from "../../component/Header";
import Loading from "../../component/Loading";
import RegionRecipient from "../../component/RegionRecipient";
import useInput from "../../component/useInput";
import useInputSelect from "../../component/useInputSelect";
import useTextArea from "../../component/useTextArea";
import withAuth from "../../component/withAuth";
import useBeautyAlert from "../../custom_hook/useBeautyAlert";
import useReceiverValidation from "../../custom_hook/useReceiverValidation";
import { usePostData } from "../../helper/request";
import { Divider, Label } from "../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPenerima() {
    const [receiver] = useReceiverValidation("smartbox/step-detail-receiver")
    const [msg] = useBeautyAlert()
    const route = useRouter();

    useEffect(() => {
        if (receiver.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(receiver.success_response.message)
            route.push("page-detail-pengirim")
        }

        if (receiver.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(receiver.error_response.message)
        }
    }, [receiver.success, receiver.failed])

    function on_confirm() {
        return () => {
            receiver.on_validate()
        }
    }

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penerima"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormRecipient />
                    <Divider />
                    <RegionRecipient />
                </Stack>
            </Content>
            {msg.alert}
            <Loading loading={receiver.loading} />
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button
                    sx={{ backgroundColor: '#0065AF', borderRadius: '16px' }}
                    onClick={on_confirm()}
                    fullWidth
                    variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenerima)