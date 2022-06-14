import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import FormRecipient from "../../../component/FormRecipient";
import FormShipper from "../../../component/FormShipper";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import RegionRecipient from "../../../component/RegionRecipient";
import withAuth from "../../../component/withAuth";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import { Divider, Label } from "./page-detail-pengirim";

function PageInputCustomer() {
    const { multilingual: { words } } = useSelector(s => s)
    const [msg] = useBeautyAlert()
    const router = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={'Data Customer'} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    {/* <Box sx={{
                        display: 'flex',

                        alignItems: 'center',
                        justifyContent: 'center',
                        // background:'red',
                        height: '40px',
                        marginBottom: '16px'
                    }}>
                        <span style={general_style.title_dark_bold}>{words.sender_details}</span>
                    </Box> */}

                    <HeadingWrap>
                        <span style={general_style.title_dark_bold}>{words.sender_details}</span>
                    </HeadingWrap>
                    <FormShipper />
                    <Box sx={{ height: '16px' }} />
                    <Label title={"Lokasi Bandara"} />
                    <Box sx={{ height: '8px' }} />
                    <Box onClick={() => router.push("/airport/page-airports")} sx={{
                        height: '100px',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderRadius: '8px',
                        borderColor: 'grey',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}>
                        <span style={general_style.heading_dark}>-- pilih lokasi bandara --</span>
                    </Box>
                    <Box sx={{ height: '16px' }} />
                    <HeadingWrap>
                        <span style={general_style.title_dark_bold}>{words.recipient_details}</span>
                    </HeadingWrap>
                    <FormRecipient />
                    <Box sx={{ height: '16px' }} />
                    <RegionRecipient />
                    <Box sx={{ height: '48px' }} />
                </Stack>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    onClick={() => router.push("page-detail-bagasi")}
                    sx={general_style.primary_button}
                    fullWidth
                    variant="contained"
                >
                    {words.confirmation}
                </Button>
            </Footer>
        </Contain>
    )

}

export const HeadingWrap = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
            // background:'red',
            height: '40px',
            marginBottom: '16px'
        }}>
            {children}
        </Box>
    )
}

export default withAuth(PageInputCustomer)