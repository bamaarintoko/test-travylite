import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { FILL_ITEM_ORDER_DOCUMENT } from "../../reducer/itemOrderDocument";
function PageKonfirmasiPesanan() {
    const {
        smartboxReducer: {
            locations,
            selected_location: sl,
            selected_smartbox: ssb,
            smartboxs
        },
        formDocumentDetailPackage: {
            quantity,
            description,
            weight
        }
    } = useSelector(s => s)
    const route = useRouter()
    const dispatch = useDispatch()
    const [locationSmartBox, setLocationSmartBox] = useState({})

    useEffect(() => {
        const sb = locations.filter(item => item.id === sl)
        console.log("sb", sb)
        setLocationSmartBox(sb[0])
    }, [])
    useEffect(() => {
        console.log("locationSmartBox : ", locationSmartBox)
    }, [locationSmartBox])

    function go_to_page_detail() {
        return () => {
            dispatch({
                type: FILL_ITEM_ORDER_DOCUMENT,
                name: 'smartbox',
                value: ssb.type
            })
            dispatch({
                type: FILL_ITEM_ORDER_DOCUMENT,
                name: 'smartboxnumber',
                value: ssb.number
            })
            dispatch({
                type: FILL_ITEM_ORDER_DOCUMENT,
                name: 'item',
                value: quantity.value
            })
            dispatch({
                type: FILL_ITEM_ORDER_DOCUMENT,
                name: 'weight',
                value: weight.value
            })
            dispatch({
                type: FILL_ITEM_ORDER_DOCUMENT,
                name: 'description',
                value: description.value
            })
            route.push("/payment/page-detail-pesanan")
        }
    }
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
                                <span style={general_style.heading_dark_bold}>{locationSmartBox.name}</span>
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
                                    <span style={general_style.heading_dark_bold}>{ssb.type}</span>
                                    <span style={general_style.heading_light}>{ssb.dimensions}</span>
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
                                        <RowPesanan label={"Smart Box"} value={ssb.type} />
                                        <RowPesanan label={"No. Smart Box"} value={ssb.number} />
                                        <RowPesanan label={"Item"} value={`${quantity.value} Dokumen`} />
                                        <RowPesanan label={"Berat"} value={`${weight.value} Kg`} />
                                        <RowPesanan label={"Deskripsi"} value={description.value} />
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
                <Button onClick={go_to_page_detail()} sx={{ borderRadius: '16px', backgroundColor: '#0065AF' }} fullWidth variant="contained">Konfirmasi</Button>

            </Footer>
        </Contain>
    )
}

export default withAuth(PageKonfirmasiPesanan)