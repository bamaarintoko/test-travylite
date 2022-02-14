import { Button, Grid } from "@mui/material";
import React from "react";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { AppBar } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import styles from '../../styles/PageEkstraBagasi.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
export default function PageDetailInvoice() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Invoice"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <div className={styles.awb}>
                        <span style={{ fontSize: 14, fontFamily: 'Roboto', fontWeight: 500, color: "#FFF" }}>Nomor AWB : 123456789</span>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
                    <div className={styles.box_detail_invoice_shadow}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ color: "#0065AF" }} />
                                <div className={styles.line}>

                                </div>
                            </div>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 30, marginBottom: 40 }}>
                                <span className={styles.text_label_detail_pesanan}>Pengirim</span>
                                <span className={styles.text_label_detail_pesanan}>Mr. Smith</span>
                                <span className={styles.text_desc}>0812 234 234</span>
                                <span className={styles.text_desc}>Jl. Mawar No 4, Kab. Tanggerang</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                                <LocationOnIcon sx={{ color: "#E84A25" }} />
                            </div>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 30 }}>
                                <span className={styles.text_label_detail_pesanan}>Penerima</span>
                                <span className={styles.text_label_detail_pesanan}>Mr. Agung Nugroho</span>

                                <span className={styles.text_desc}>0812 1234 1234</span>
                                <span className={styles.text_desc}>Dipowinatan 303, Keparakan, Mergangsan, 55152</span>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
                    <div className={styles.box_detail_invoice_shadow}>
                        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 16, paddingBottom: 16 }}>
                            <div style={style.icon_wrap}>
                                <BusinessCenterTwoToneIcon sx={{ color: "#FCCF2F" }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 30 }}>
                                <span style={style.label}>Ekstra Bagasi</span>
                                <span style={style.label_desc}>1 Koper warna hitam</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 16, paddingBottom: 16 }}>
                            <div style={style.icon_wrap}>
                                <GppGoodTwoToneIcon sx={{ color: "#63B338" }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 30, justifyContent: 'center' }}>
                                <span style={style.label}>Wrapping</span>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
                    <div className={styles.box_detail_invoice_shadow}>
                        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 16, paddingBottom: 16 }}>
                            <div>
                                <GppGoodTwoToneIcon sx={{ color: "#63B338" }} />
                            </div>
                            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingLeft: 30, justifyContent: 'center' }}>
                                <span style={style.label}>OVO</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 30, justifyContent: 'center' }}>
                                <span style={style.label}>Rp 15.000</span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Content>
            <Footer>
                <div style={{ padding: 16, flex: 1 }}>

                    <Button color="error" fullWidth variant="contained">Batalkan Pesanan</Button>
                </div>

            </Footer>
        </Contain>
    )
}

const style = {
    icon_wrap: {
        display: 'flex',
        alignItems: 'center'
    },
    label: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 14,
        color: "#323232"
    },
    label_desc: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.5)'
    }
}