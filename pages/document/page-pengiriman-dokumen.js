import { Button, Grid } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Header from "../../component/Header";
import styles from "../../styles/PenitipanBagasi.module.css"
import { Ketentuan } from "../bagasi/ekstra-bagasi/page-ketentuan";
import Link from 'next/link'

// import { Ketentuan } from "../ekstra-bagasi/page-ketentuan";

export default function PagePengirimanDokumen() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Ketentuan"} />
            </Header>
            <Content>
                <Grid className={styles.box_gradient} item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Grid item xs={12} md={12} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',backgroundColor:'red' }}>
                        <span style={style.label}>Pengiriman</span>
                        <span style={style.label}>Dokumentasi</span>
                        <span style={style.small_label}>Port to Port, Door to Port</span>
                    </Grid>
                    <Grid item xs={12} md={12} style={style.bottom_box}>
                        <div style={style.bottom_label_wrapper}>
                            <span style={style.bottom_label}>Pengiriman dokumen atau berkas ke bandara tujuan atau langsung ke alamat tujuanmu </span>
                        </div>
                        <div style={{ height: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", marginTop: 24, marginBottom: 24 }} />
                        <div style={style.content_wrapper}>
                            <Ketentuan number={1} text={"Pesan dan pilih ukuran Smart Box Anda"} />
                            <Ketentuan number={2} text={"Isi detail dokumen"} />
                            <Ketentuan number={3} text={"Isi data penerima"} />
                            <Ketentuan number={4} text={"Isi data pengirim"} />
                            <Ketentuan number={5} text={"Pilih durasi pengiriman"} />
                        </div>
                        <div style={{ height: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", marginBottom: 24 }} />
                        <div>
                            <Link href={"page-pilih-smart-box"}>
                                <Button sx={{ borderRadius: 50 }} fullWidth variant="contained">Lanjutkan</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Content>
        </Contain>
    )
}

const style = {
    label: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 27,
        color: "#FEFEFE",
    },
    small_label: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: "#FEFEFE",
        marginTop: 16
    },
    bottom_box: {
        display: 'flex', backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 16, flexDirection: 'column'
    },
    bottom_label: {
        fontFamily: 'Roboto', fontWeight: 500, fontSize: 14, textAlign: 'center'
    },
    bottom_label_wrapper: {
        display: 'flex', alignItems: 'center', flexDirection: 'column'
    },
    content_wrapper: {
        display: 'flex', flex: 1, flexDirection: 'column',
    }
}