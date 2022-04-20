// import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Header from "../../../component/Header";
import withAuth from "../../../component/withAuth";
import useQrCode from "../../../component/useQrCode"
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { general_style } from "../../../component/general_style";
function PageRetailOutlet() {
    const {
        payWithRetailOutletReducer: {
            retail_outlet
        }
    } = useSelector(s => s)
    const [qr] = useQrCode("")
    useEffect(() => {
        qr.setData(retail_outlet.payment_code)
    }, [])

    const size = 150;
    return (
        <Contain>
            <Header>
                <AppBar title={"Outlet"} />
            </Header>
            <Content>
                <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{height:'20px'}}/>
                    <Box>
                        <span style={general_style.title_dark_bold}>{retail_outlet.retail_outlet_name}</span>
                    </Box>
                    <Box sx={{height:'100px'}}/>
                    <Box>
                        {qr.result}
                    </Box>
                </Stack>

                {/* <Box
                    component="img"
                    sx={{
                        height: size,
                        width: size,
                        maxHeight: { xs: size, md: size },
                        maxWidth: { xs: size, md: size },
                    }}
                    alt="The house from the offer."
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=${size}x${size}`}
                /> */}

            </Content>
        </Contain>
    )
}

export default withAuth(PageRetailOutlet)