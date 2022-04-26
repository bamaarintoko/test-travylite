import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import useInputNumber from "../../../component/useInputNumber";
import useTextArea from "../../../component/useTextArea";
import styles from "../../../styles/General.module.css"
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import Link from "next/link"
import { general_style } from "../../../component/general_style";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../../component/withAuth";
import useGeneralInput from "../../../custom_hook/useGeneralInput";

function PageDetailPenitipanBagasi() {
    const { authReducer: { access_token } } = useSelector((state) => state)
    const route = useRouter()
    const [weight] = useInputNumber()
    const [quantity] = useInputNumber()
    const [description] = useGeneralInput(true)
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penitipan Bagasi"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Berat</span>
                                {weight.input}
                            </Stack>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Jumlah</span>
                                {quantity.input}
                            </Stack>
                        </Stack>
                        <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                        {description.input}
                    </Stack>
                </Grid>
                <div style={{ height: 16 }} />
                <Grid item xs={12} md={12}>
                    <div style={{ height: 16 }} />
                    <div>
                        <span className={styles.text_normal_black}>Upload Foto Bagasi Anda</span>
                        <div style={{ height: 132, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AddAPhotoTwoToneIcon fontSize="large" sx={{ color: 'rgba(0, 0, 0, 0.3)' }} />
                        </div>
                    </div>
                </Grid>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button sx={general_style.primary_button} onClick={() => {
                    route.push('/kurir/page-pilihan-pengiriman')
                }} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenitipanBagasi)