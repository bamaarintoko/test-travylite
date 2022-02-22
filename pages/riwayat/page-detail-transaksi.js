import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function PageDetailTransaksi() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Transaksi"} />
            </Header>
            <Content>
                <Box sx={{ height: '60px', background: 'linear-gradient(135deg, #C5D609 0%, #63B338 100%)', marginTop: '8px', display: 'flex', paddingLeft: '18px', paddingRight: '18px' }}>
                    <Stack direction={"row"} sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                        <Box>
                            <CheckCircleIcon sx={{ color: '#FFF' }} />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, marginLeft: '22px' }}>
                            <span style={general_style.heading_white}>Selesai barang Anda telah di tujuan</span>
                        </Box>
                    </Stack>
                </Box>
                <Stack sx={{ marginTop: '24px', marginLeft: '16px', marginRight: '16px' }}>
                    <Box sx={{ height: '40px', background: 'linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)', borderRadius: '16px', display: 'flex' }}>
                        <Stack direction={"row"} sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Box>
                                <span style={general_style.heading_white}>Nomor AWB : 123456789</span>
                            </Box>
                            <Box sx={{ marginLeft: '22px' }}>
                                <ContentCopyIcon sx={{ color: '#FFF' }} />
                            </Box>
                        </Stack>
                    </Box>

                    <Box sx={{ height: '70px', boxShadow: '0px 16px 24px #F2F2F2', borderRadius: '16px', marginTop: '40px', display: 'flex' }}>
                        <Stack direction={"row"} sx={{ paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', flex: 1 }}>
                            <Box sx={{ height: '48px', width: '48px', backgroundColor: 'grey', marginRight: '16px', borderRadius: '8px' }}>

                            </Box>
                            <Stack sx={{ display: 'flex', flex: 1 }}>
                                <span style={general_style.heading_dark_bold}>Aditya Koesandi</span>
                                <span style={general_style.heading_light}>B 5863 TBR</span>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box sx={{ height: '54px', boxShadow: '0px 16px 24px #F2F2F2', borderRadius: '16px', marginTop: '24px', display: 'flex' }}>
                        <Stack direction={'row'} sx={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '16px', paddingRight: '16px' }}>
                            <Box sx={{ display: 'flex', flex: 1 }}>
                                <span style={general_style.heading_dark_bold}>Bukti Pick-Up</span>
                            </Box>
                            <ArrowForwardIosIcon />
                        </Stack>
                    </Box>

                    <Box sx={{ height: '54px', boxShadow: '0px 16px 24px #F2F2F2', borderRadius: '16px', marginTop: '24px', display: 'flex' }}>
                        <Stack direction={'row'} sx={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '16px', paddingRight: '16px' }}>
                            <Box sx={{ display: 'flex', flex: 1 }}>
                                <span style={general_style.heading_dark_bold}>Bukti Drop-Off</span>
                            </Box>
                            <ArrowForwardIosIcon />
                        </Stack>
                    </Box>
                </Stack>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}