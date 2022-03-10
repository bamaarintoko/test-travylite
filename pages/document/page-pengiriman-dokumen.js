import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Header from "../../component/Header";
// import { Ketentuan } from "../bagasi/ekstra-bagasi/page-ketentuan";
import Link from 'next/link'
import { Box } from "@mui/system";
import { general_style } from "../../component/general_style";
import Ketentuan from "../../component/Ketentuan";
import { useRouter } from "next/router";
import withAuth from "../../component/withAuth";

// import { Ketentuan } from "../ekstra-bagasi/page-ketentuan";

function PagePengirimanDokumen() {
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
                                }}>Pengiriman</span>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Dokumen</span>
                                <Box sx={{ height: '16px' }} />
                                <span style={general_style.body_white}>Port to Port, Door to Port</span>
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
                                }}>Pengiriman dokumen atau berkas ke bandara tujuan atau langsung ke alamat tujuanmu</span>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Stack spacing={2}>
                                    <Ketentuan number={1} label={"Pesan dan pilih ukuran Smart Box Anda"} />
                                    <Ketentuan number={2} label={"Isi detail dokumen"} />
                                    <Ketentuan number={3} label={"Isi data penerima"} />
                                    <Ketentuan number={4} label={"Isi data pengirim"} />
                                    <Ketentuan number={5} label={"Pilih durasi pengiriman"} />
                                </Stack>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Box sx={{ paddingBottom: '16px' }}>
                                    <Button onClick={() => route.push("page-pilih-smart-box")} sx={{
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

export default withAuth(PagePengirimanDokumen)