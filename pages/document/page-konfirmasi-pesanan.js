import { Button, Stack } from "@mui/material";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WarningIcon from '@mui/icons-material/Warning';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import { general_style } from "../../component/general_style";
import RowPesanan from "../../component/RowPesanan";
import { useRouter } from "next/router";
import withAuth from "../../component/withAuth";
function PageKonfirmasiPesanan() {
    const route = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Konfirmasi Pesanan"} />
            </Header>
            <Content>
                <Stack spacing={2}>
                    <Box sx={{ padding: '16px 16px 0 16px' }}>
                        <Stack direction={"row"} spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <LocationOnIcon sx={{ color: "#E84A25" }} />
                            </Box>
                            <Box>
                                <span style={general_style.heading_dark_bold}>Smart Box Gedung 628</span>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                    <Box sx={{ padding: '0px 16px 0 16px' }}>
                        <Stack direction={"row"} spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Inventory2Icon sx={{ color: "#E84A25" }} />
                            </Box>
                            <Box>
                                <Stack>
                                    <span style={general_style.heading_dark_bold}>Ukuran Kecil</span>
                                    <span style={general_style.heading_light}>350 mm x 95 mm x 450 mm</span>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                    <Box sx={{ padding: '0px 16px 0 16px' }}>
                        <Stack direction={"row"} spacing={2} sx={{ display: 'flex' }}>
                            <Box>
                                <AssignmentIcon sx={{ color: "#E84A25" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flex: 1 }}>
                                <Stack sx={{ display: 'flex', flex: 1 }}>
                                    <span style={general_style.heading_dark_bold}>Detail Pesanan</span>
                                    <Box>
                                        <RowPesanan label={"Smart Box"} value={"2 Small"} />
                                        <RowPesanan label={"No. Smart Box"} value={"1 Kg"} />
                                        <RowPesanan label={"Item"} value={"1 Dokumen"} />
                                        <RowPesanan label={"Berat"} value={"1 Kg"} />
                                        <RowPesanan label={"Deskripsi"} value={"Map warna coklat"} />
                                        <RowPesanan label={"Pengiriman"} value={"Same Day"} />
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ background: 'linear-gradient(135deg, #FC6834 0%, #E84A25 100%)', padding: '16px' }}>
                        <Stack direction={'row'} spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <WarningIcon sx={{ color: '#FFF' }} />
                            </Box>
                            <Box>
                                <span style={general_style.heading_white}>Pengantaran dokumen / berkas maksimal 1x24 jam, jika melebihi batas waktu tersebut maka Smart Box tidak dapat terbuka.</span>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ padding: '0 16px 0 16px' }}>
                        <span style={general_style.heading_dark_bold}>Apakah Anda membutuhkan Smart Box lagi?</span>
                        <Stack direction={'row'} sx={{ display: 'flex', marginTop: '20px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                <span style={general_style.heading_dark_bold}>Tambah Box ukuran lainnya</span>
                            </Box>
                            <Box>
                                <Button sx={{ borderColor: '#63B338', color: "#63B338" }} startIcon={<AddIcon />} size="small" variant="outlined">Tambah</Button>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

            </Content>
            <Footer style={{ padding: 16, backgroundColor: '#FFF' }}>
                <Button onClick={() => route.push("/payment/page-detail-pesanan")} sx={{ borderRadius: '16px', backgroundColor: '#0065AF' }} fullWidth variant="contained">Konfirmasi</Button>

            </Footer>
        </Contain>
    )
}

export default withAuth(PageKonfirmasiPesanan)