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
import { usePostData } from "../../helper/request";
import { Divider, Label } from "../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPenerima() {
    const route = useRouter();
    const dispatch = useDispatch();
    const {
        customerReducer: {
            recipient,
            recipient_zone: {
                province_receiver, city_receiver, district_receiver, subdistrict_receiver, district_code_receiver
            }
        },
        zoneRecipient: {
            villages
        }
    } = useSelector(s => s)
    const [func_validate, res_validate] = usePostData("smartbox/step-detail-receiver")

    useEffect(() => {
        if (res_validate.success) {
            route.push("page-detail-pengirim")
        }
    }, [res_validate.success])

    function on_confirm() {
        return () => {
            let par = {
                gender_receiver: recipient.gender_receiver.value,
                name_receiver: recipient.name_receiver.value,
                phone_receiver: recipient.phone_receiver.value,
                address_receiver: recipient.address_receiver.value,
                province_receiver: province_receiver.value,
                city_receiver: city_receiver.value,
                district_receiver: district_receiver.value,
                subdistrict_receiver: subdistrict_receiver.value,
                district_code_receiver: district_code_receiver.value
            }
            func_validate(par)
            console.log(par)
        }
    }

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penerima"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormRecipient status={false} />
                    <Divider />
                    <RegionRecipient />
                    {/* <Label title={"Gelar & Nama Lengkap Pengirim"} />
                    <Stack direction="row" spacing={1}>
                        {gelar_select}
                        {full_name_input}
                    </Stack>
                    <Label title={"Alamat Lengkap Penerima"} />
                    {alamat_input}
                    <Divider />
                    <Label title={"Kelurahan"} />
                    {kelurahan_select}
                    <Divider /> */}
                </Stack>
            </Content>
            <FlashMessage arg={res_validate} />
            <Loading loading={res_validate.loading} />
            {/* page-detail-pengirim */}
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