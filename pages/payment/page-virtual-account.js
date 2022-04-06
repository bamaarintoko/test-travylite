// import { AppBar } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Header from "../../component/Header";
import withAuth from "../../component/withAuth";
import { general_style } from "../../component/general_style";
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
function PageVirtualAccount() {
    const { virtualAccountReducer: { va } } = useSelector(s => s)
    function copy_to_clipboard() {
        return () => {
            navigator.clipboard.writeText(va.account_number)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Pembayaran"} />
            </Header>
            <Content>
                <Stack spacing={2} sx={{ height: '137px', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 500, color: "#323232" }}>Virtual Account</span>
                    <Stack direction={'row'} spacing={2}>
                        <Box>
                            <span style={{ fontFamily: 'Roboto', fontSize: 24, fontWeight: 'bold', color: "#0065AF" }}>{va.account_number}</span>

                        </Box>
                        <Box onClick={copy_to_clipboard()}>
                            <ContentCopyTwoToneIcon sx={{ color: '#0065AF' }} />
                        </Box>
                    </Stack>
                </Stack>
                <Stack sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                    <Box>
                        <span style={general_style.heading_dark_bold}>Cara Pembayaran :</span>
                    </Box>
                    {
                        va.payment_instructions.map((x, y) => {
                            return (
                                <Box key={y}>
                                    <span style={general_style.body_dark_bold}>{x.title}</span>
                                    {
                                        x.steps.map((i, j) => {
                                            return (
                                                <Box sx={{ paddingLeft: '16px' }} key={j}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Box>
                                                            <span style={general_style.body_dark}>{j + 1}</span>
                                                        </Box>
                                                        <Box>
                                                            <span style={general_style.body_dark}>{i}</span>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            )
                        })
                    }
                </Stack>
            </Content>
        </Contain>
    )
}

export default withAuth(PageVirtualAccount)