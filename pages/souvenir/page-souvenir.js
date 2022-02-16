import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import Ketentuan from "../../component/Ketentuan";

export default function PageSouvenir() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Ketentuan"} />
            </Header>
            <Content>
                <Box style={{ display: 'flex', flex: 1, background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)" }}>
                    <Stack sx={{
                        display: 'flex',
                        flex: 1
                    }}>
                        <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Stack sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Pick-Up & Go:</span>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Oleh-oleh</span>
                                <Box sx={{ height: '16px' }} />
                                <span style={general_style.body_white}>Merchant to Port, Merchant to Door</span>
                            </Stack>
                        </Box>
                        <Box sx={{ backgroundColor: '#FFF', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '32px' }}>
                            <Stack>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 14,
                                    lineHeight: '160%',
                                    color: "#323232",
                                    textAlign: 'center'
                                }}>Pesan Oleh-olehmu tanpa harus antri, bebas ribet dan diantar langsung ke bandara tujuan atau langsung ke alamat tujuanmu</span>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Stack spacing={2}>
                                    <Ketentuan number={1} label={"Pesan dan pilih Oleh-olehmu"} />
                                    <Ketentuan number={2} label={"Pilih waktu dan lokasi Pick-Up"} />
                                    <Ketentuan number={3} label={"Pilih waktu dan lokasi Drop-Off"} />
                                    <Ketentuan number={4} label={"Isi detail pengirim"} />
                                    <Ketentuan number={5} label={"Isi detail oleh-oleh"} />
                                    <Ketentuan number={6} label={"Pilih durasi pengiriman"} />
                                </Stack>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Box sx={{ paddingBottom: '16px' }}>
                                    <Button sx={{
                                        backgroundColor: '#0065AF',
                                        borderRadius: '16px'
                                    }} fullWidth variant="contained">Lanjutkan</Button>

                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}