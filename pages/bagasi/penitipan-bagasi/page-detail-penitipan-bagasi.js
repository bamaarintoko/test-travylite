import { Button, Grid } from "@mui/material";
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
export default function PageDetailPenitipanBagasi() {
    const [berat_value, berat_input] = useInputNumber()
    const [jumlah_value, jumlah_input] = useInputNumber()
    const [deskripsi_value, deskripsi_input] = useTextArea()
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penitipan Bagasi"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className={styles.text_normal_black}>Berat</span>
                            {berat_input}
                        </div>
                        <div style={{ width: 16 }} />
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <span className={styles.text_normal_black}>Jumlah</span>
                            {jumlah_input}
                        </div>
                    </div>
                </Grid>
                <div style={{ height: 16 }} />
                <Grid item xs={12} md={12}>
                    <div>
                        <span className={styles.text_normal_black}>Deskripsi Bagasi</span>
                        {deskripsi_input}
                    </div>
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
                <Link href={"/kurir/page-pilihan-pengiriman"}>
                <Button fullWidth variant="contained">Konfirmasi</Button>
                </Link>
            </Footer>
        </Contain>
    )
}