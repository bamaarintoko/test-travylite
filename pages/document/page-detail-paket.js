import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
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
import DetailPaket from "../../component/DetailPaket";
import { useDispatch, useSelector } from "react-redux";
import { usePostData } from "../../helper/request";
import { FILL_ERRORS_PAKET } from "../../reducer/paketReducer";
import FlashMessage from "../../component/FlashMessage";
import Loading from "../../component/Loading";

function PageDetailPaket() {
    const route = useRouter();
    const dispatch = useDispatch();

    const {
        paketReducer: {
            weight, quantity, description
        }
    } = useSelector(s => s)

    const [func_validate, validate_res] = usePostData("smartbox/step-detail-packet")

    useEffect(() => {
        if (validate_res.failed) {
            console.log("validate_res", validate_res)
            dispatch({
                type: FILL_ERRORS_PAKET,
                errors: validate_res.error_res.data.errors
            })
        }
    }, [validate_res.failed])

    useEffect(() => {
        if (validate_res.success) {
            route.push("page-detail-penerima")
        }
    }, [validate_res.success])

    function on_confirm() {
        return () => {
            let par = {
                weight: weight.value,
                quantity: quantity.value,
                description: description.value
            }
            func_validate(par)
            console.log("par", par)
        }
    }
    //page-detail-penerima
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Paket"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <DetailPaket status={validate_res.failed} />
            </Content>
            <Loading loading={validate_res.loading} />
            <FlashMessage arg={validate_res} />
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }} onClick={on_confirm()}
                    fullWidth
                    variant="contained">Lanjutkan</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPaket)