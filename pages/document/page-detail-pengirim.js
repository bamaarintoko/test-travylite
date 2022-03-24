import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import FlashMessage from "../../component/FlashMessage";
import Footer from "../../component/Footer";
import FormShipper from "../../component/FormShipper";
import Header from "../../component/Header";
import Loading from "../../component/Loading";
import RegionShipper from "../../component/RegionShipper";
import useInput from "../../component/useInput";
import useInputSelect from "../../component/useInputSelect";
import useTextArea from "../../component/useTextArea";
import withAuth from "../../component/withAuth";
import { usePostData } from "../../helper/request";
import { FILL_ERROR_SHIPPER } from "../../reducer/customerReducer";
import { Divider, Label } from "../bagasi/ekstra-bagasi/page-detail-pengirim";

function PageDetailPengirim() {
    const route = useRouter()
    const dispatch = useDispatch()
    const {
        customerReducer: {
            shipper,
            shipper_zone: {
                province_shipper, city_shipper, district_shipper, subdistrict_shipper, district_code_shipper }
        }
    } = useSelector(s => s)

    const [func_validate, res_validate] = usePostData("smartbox/step-detail-shipper")

    useEffect(() => {
        if (res_validate.success) {
            route.push('page-konfirmasi-pesanan')
        }
        if (res_validate.failed) {
            // dispatch({
            //     type: FILL_ERROR_SHIPPER,
            //     erros: res_validate.error_res.data.errors
            // })
        }
    }, [res_validate.success, res_validate.failed])

    // page-konfirmasi-pesanan

    function on_confirm() {
        return () => {
            let par = {
                gender_shipper: shipper.gender_shipper.value,
                name_shipper: shipper.name_shipper.value,
                email_shipper: shipper.email_shipper.value,
                phone_shipper: shipper.phone_shipper.value,
                address_shipper: shipper.address_shipper.value,
                province_shipper: province_shipper.value,
                city_shipper: city_shipper.value,
                district_shipper: district_shipper.value,
                subdistrict_shipper: subdistrict_shipper.value,
                district_code_shipper: district_code_shipper.value
            }
            func_validate(par)
            console.log(par)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormShipper status={false} />
                    <Divider />
                    <RegionShipper />
                    <Divider />
                    {/* <Label title={"Gelar & Nama Lengkap Pengirim"} />
                    <Stack direction="row" spacing={1}>
                        {gelar_select}
                        {full_name_input}
                    </Stack>
                    <Label title={"Email Pengirim"} />
                    {email_input}
                    <Divider />
                    <Label title={"Konfirmasi Email Pengirim"} />
                    {email_konfirmasi_input}
                    <Divider />
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
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    onClick={on_confirm()}
                    fullWidth
                    variant="contained">
                    Konfirmasi
                </Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPengirim)