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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
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
                    <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: "16px", padding: '16px', marginTop: '40px' }}>
                        <Stack>
                            <Stack direction={"row"}>
                                <Box sx={{ display: 'flex' }}>
                                    <Stack>
                                        <LocationOnIcon sx={{ color: "#0065AF" }} />
                                        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                                            <Box sx={{ width: '1px', borderRightWidth: '1px', borderRightStyle: 'dashed', borderRightColor: 'rgba(0, 0, 0, 0.2)' }} />
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box sx={{ paddingLeft: '30px', paddingBottom: '40px' }}>
                                    <Stack>
                                        <span style={general_style.heading_dark_bold}>Pick-Up</span>
                                        <span style={general_style.heading_dark_bold}>Mr. Smith</span>
                                        <span style={general_style.heading_light}>0812 234 234</span>
                                        <span style={general_style.heading_light}>Jl. Mawar No 4, Kab. Tanggerang</span>
                                        <span style={general_style.heading_light}>Jum’at 15 Okt 2021</span>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack direction={"row"}>
                                <Box>
                                    <LocationOnIcon sx={{ color: "#E84A25" }} />
                                </Box>
                                <Box sx={{ paddingLeft: '30px' }}>
                                    <Stack>
                                        <span style={general_style.heading_dark_bold}>Drop-Off</span>
                                        <span style={general_style.heading_light}>Booth Travylite Check-in Terminal 2E Bandara Soekarno-Hatta</span>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                    {/* <Payment Section> */}
                    <Box sx={{ boxShadow: '0px 16px 24px #F2F2F2', marginTop: '40px', borderRadius: '16px' }}>
                        <Stack>
                            <Stack direction={"row"} sx={{ padding: '11px 16px 11px 16px' }}>
                                <Box>
                                    <Box sx={{ width: '32px', height: '32px', backgroundColor: 'grey' }}>

                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: '16px' }}>
                                    <span style={general_style.heading_dark_bold}>OVO</span>
                                </Box>
                            </Stack>
                            <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)', display: 'flex' }} />
                            <Stack spacing={1} sx={{ padding: '16px' }}>
                                <Stack direction={'row'}>
                                    <Box sx={{ display: 'flex', flex: 3 }}>
                                        <span style={general_style.heading_light}>Pengiriman Same-Day</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 0.5 }}>
                                        <span style={general_style.heading_light}>Rp</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                        <span style={general_style.heading_light}>15.000</span>
                                    </Box>
                                </Stack>
                                <Stack direction={'row'}>
                                    <Box sx={{ display: 'flex', flex: 3 }}>
                                        <span style={general_style.heading_light}>OVO Cash Terpakai</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 0.5 }}>
                                        <span style={general_style.heading_light}>Rp</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                        <span style={general_style.heading_light}>- 1.000</span>
                                    </Box>
                                </Stack>
                                <Stack direction={'row'}>
                                    <Box sx={{ display: 'flex', flex: 3 }}>
                                        <span style={general_style.heading_dark}>Total Pembyaran</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 0.5 }}>
                                        <span style={general_style.heading_dark}>Rp</span>
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                                        <span style={general_style.heading_dark}>15.000</span>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    {/* </Payment Section> */}

                    {/* <Detail Barang Section> */}
                    <Box sx={{ boxShadow: '0px 16px 24px #F2F2F2', borderRadius: '16px', marginTop: '40px', padding: '16px', backgroundColor: "#FEFEFE" }}>
                        <Stack direction={"row"}>
                            <Box>
                                <BusinessCenterIcon />
                            </Box>
                            <Box sx={{ paddingLeft: '16px', display: 'flex', flex: 1 }}>
                                <Stack sx={{ display: 'flex', flex: 1 }}>
                                    <Box sx={{ height: '28px', background: "linear-gradient(135deg, #C5D609 0%, #63B338 100%)", paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', borderRadius: '8px' }}>
                                        <span style={general_style.heading_white_bold}>Barang telah diterima</span>
                                    </Box>
                                    <span style={general_style.heading_light}>Jumat 15 Okt 2021</span>
                                    <span style={general_style.heading_light}>Pengiriman Same Day - Anteraja</span>
                                    <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)', display: 'flex', margin: '16px 0 16px 0' }} />
                                    <Stack direction={'row'}>
                                        <Box sx={{ display: 'flex', flex: 1 }}>
                                            <span style={general_style.heading_light}>Item</span>
                                        </Box>
                                        <Box>
                                            <span style={general_style.heading_light}>: </span>
                                        </Box>
                                        <Box sx={{ display: 'flex', flex: 2 }}>
                                            <span style={general_style.heading_light}>&nbsp; 1 Bagasi</span>
                                        </Box>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Box sx={{ display: 'flex', flex: 1 }}>
                                            <span style={general_style.heading_light}>Berat</span>
                                        </Box>
                                        <Box>
                                            <span style={general_style.heading_light}>: </span>
                                        </Box>
                                        <Box sx={{ display: 'flex', flex: 2 }}>
                                            <span style={general_style.heading_light}>&nbsp; 1 Kg</span>
                                        </Box>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Box sx={{ display: 'flex', flex: 1 }}>
                                            <span style={general_style.heading_light}>Deskripsi</span>
                                        </Box>
                                        <Box>
                                            <span style={general_style.heading_light}>: </span>
                                        </Box>
                                        <Box sx={{ display: 'flex', flex: 2 }}>
                                            <span style={general_style.heading_light}>&nbsp; Koper warna hitam</span>
                                        </Box>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Box sx={{ display: 'flex', flex: 1 }}>
                                            <span style={general_style.heading_light}>Pengiriman</span>
                                        </Box>
                                        <Box>
                                            <span style={general_style.heading_light}>: </span>
                                        </Box>
                                        <Box sx={{ display: 'flex', flex: 2 }}>
                                            <span style={general_style.heading_light}>&nbsp; Same Day</span>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    {/* </Detail Barang Section> */}

                    {/* <Lacak Barang Section> */}
                    <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px', padding: '16px', marginTop: '40px' }}>
                        <Stack>
                            <span style={general_style.heading_dark_bold}>Lacak</span>
                            <Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
                                <Box sx={{ paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                                    <Stack sx={{ display: 'flex', alignItems: 'center', }}>
                                        <span style={general_style.heading_light}>15 Okt</span>
                                        <span style={general_style.heading_light}>13:30 PM</span>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 30px 0 30px' }}>
                                    <Stack sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                        <Box sx={{ height: '10px', width: '10px', backgroundColor: '#0065AF', borderRadius: 100 }} />
                                        <Box sx={{ width: '1px', backgroundColor: "#0065AF", flex: 1, }} />

                                    </Stack>
                                </Box>
                                <Box style={{ display: 'flex', flex: 2 }}>
                                    <span style={general_style.heading_dark_bold}>Bagasi telah diterima dilokasi Drop-Off</span>
                                </Box>

                            </Stack>
                            <Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
                                <Box sx={{ paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                                    <Stack sx={{ display: 'flex', alignItems: 'center', }}>
                                        <span style={general_style.heading_light}>15 Okt</span>
                                        <span style={general_style.heading_light}>13:30 PM</span>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 30px 0 30px' }}>
                                    <Stack sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                        <Box sx={{ height: '10px', width: '10px', backgroundColor: '#0065AF', borderRadius: 100 }} />
                                        <Box sx={{ width: '1px', backgroundColor: "#0065AF", flex: 1, }} />

                                    </Stack>
                                </Box>
                                <Box style={{ display: 'flex', flex: 2 }}>
                                    <span style={general_style.heading_dark_bold}>Perjalan lanjutan menuju lokasi</span>
                                </Box>

                            </Stack>
                            <Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
                                <Box sx={{ paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                                    <Stack sx={{ display: 'flex', alignItems: 'center', }}>
                                        <span style={general_style.heading_light}>15 Okt</span>
                                        <span style={general_style.heading_light}>13:30 PM</span>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 30px 0 30px' }}>
                                    <Stack sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                        <Box sx={{ height: '10px', width: '10px', backgroundColor: '#0065AF', borderRadius: 100 }} />
                                        <Box sx={{ width: '1px', backgroundColor: "#0065AF", flex: 1, }} />

                                    </Stack>
                                </Box>
                                <Box style={{ display: 'flex', flex: 2 }}>
                                    <span style={general_style.heading_dark_bold}>Bagasi sedang dalam perjalanan menuju lokasi Drop-Off</span>
                                </Box>

                            </Stack>
                        </Stack>
                    </Box>
                    {/* </Lacak Barang Section> */}
                    <Box sx={{ height: '40px' }} />

                </Stack>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}