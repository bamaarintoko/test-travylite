import React, { useEffect, useState } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import { Divider, Label } from "../ekstra-bagasi/page-detail-pengirim";
import { Button, Stack } from "@mui/material";
import withAuth from "../../../component/withAuth";
import FormShipper from "../../../component/FormShipper";
import RegionShipper from "../../../component/RegionShipper";
import useShipperValidation from "../../../custom_hook/useShipperValidation";
import Loading from "../../../component/Loading";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import { useRouter } from "next/router";

function PageDetailPengirim() {
    const route = useRouter()
    const [msg] = useBeautyAlert()

    const [shipper] = useShipperValidation("left-baggage/step-detail-shipper")
    useEffect(() => {
        if (shipper.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(shipper.error_response.message)
        }

        if (shipper.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(shipper.success_response.message)
            route.push("page-pick-up")
        }
    }, [shipper.success, shipper.failed])

    function on_confirm() {
        return () => {
            shipper.on_validate()
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Data Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormShipper />
                    <Divider />
                    <RegionShipper />
                    <Divider />
                </Stack>
            </Content>
            <Footer style={{ padding: 16 }}>
                {/* page-pick-up */}
                <Button
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    // onClick={() => route.push("page-detail-bagasi")}
                    onClick={on_confirm()}
                    fullWidth
                    loadingPosition="start"
                    variant="contained"
                >
                    KONFIRMASI
                </Button>
            </Footer>
            <Loading loading={shipper.loading} />
            {msg.alert}
        </Contain>
    )
}

export default withAuth(PageDetailPengirim)