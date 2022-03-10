import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Header from "../../../component/Header";
import { general_style } from "../../../component/general_style";
import Ketentuan from "../../../component/Ketentuan";
import { useRouter } from "next/router";
import withAuth from "../../../component/withAuth";

function PagePenitipanBagasi() {
    const route = useRouter()
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
                                }}>Penitipan</span>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Bagasi</span>
                                <Box sx={{ height: '16px' }} />
                                <span style={general_style.body_white}>Door to Port</span>
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
                                }}>Penitipan dan pengiriman bagasi ke Bandara lokasi Booth Travylite CGK dan KNO</span>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Stack spacing={2}>
                                    <Ketentuan number={1} label={"Isi data pengirim"} />
                                    <Ketentuan number={2} label={"Pilih tempat Pick-Up dan Drop-Off"} />
                                    <Ketentuan number={3} label={"Isi detail bagasi"} />
                                    <Ketentuan number={4} label={"Pilih durasi pengiriman"} />
                                </Stack>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Box sx={{ paddingBottom: '16px' }}>
                                    <Button onClick={() => route.push("page-detail-pengirim")} sx={{
                                        backgroundColor: '#0065AF',
                                        borderRadius: '16px'
                                    }} fullWidth variant="contained">Lanjutkan</Button>

                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Content>
        </Contain>
    )
}

export default withAuth(PagePenitipanBagasi)