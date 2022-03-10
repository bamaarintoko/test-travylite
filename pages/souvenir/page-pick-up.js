import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import useInputSelect from "../../component/useInputSelect";
import useDateInput from "../../component/useDateInput";
import useTextArea from "../../component/useTextArea";
import { Label } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router'
import withAuth from "../../component/withAuth";

function PagePickUp() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [toko_value, toko_select, setToko] = useInputSelect()
    const [alamat_value, alamat_input] = useTextArea();
    const [date_value, date_input] = useDateInput()

    const route = useRouter()

    return (
        <Contain>
            <Header>
                <AppBar title={"Pick-Up"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={2}>
                    <span style={general_style.heading_dark_bold}>Tentukan lokasi pengambilan Oleh-olehmu</span>
                    <Box>
                        <Stack>
                            <Label title={"Nama Toko"} />
                            {toko_select}
                        </Stack>
                    </Box>
                    <Box>
                        <Stack>
                            <Label title={"Alamat Toko"} />
                            {alamat_input}
                        </Stack>
                    </Box>
                    <Box>
                        <Stack>
                            <Label title={"Hari dan Tanggal Pick Up"} />
                            {date_input}
                        </Stack>
                    </Box>
                </Stack>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        backgroundColor: "#FFF",
                        display: 'flex',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                        padding: '16px',
                        paddingTop: '32px'
                    }}>
                        <Stack spacing={2.5} sx={{ display: 'flex', flex: 1 }}>
                            <Box>
                                <Stack direction={"row"} spacing={3}>
                                    <Box onClick={handleClose} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CloseIcon />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={general_style.heading_dark_bold}>Pilih Layanan</span>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                            <Box onClick={() => route.push("merchant-to-port/page-drop-off-detail")}>
                                <span style={general_style.heading_dark_bold}>Merchant to Port</span>
                            </Box>
                            <Box sx={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                            <Box onClick={() => route.push("merchant-to-door/page-detail-pengirim")}>
                                <span style={general_style.heading_dark_bold}>Merchant to Door</span>
                            </Box>
                        </Stack>
                    </Box>
                </Modal>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button onClick={handleOpen} sx={{
                    backgroundColor: '#0065AF',
                    borderRadius: '16px'
                }} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PagePickUp)