
import { Button } from "@mui/material";
import React from "react";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { AppBar } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import styles from '../../styles/PageEkstraBagasi.module.css';
export default function PageRingkasanPembayaran() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Ringkasan Pembayaran"} />
            </Header>
            <Content style={{padding:16}}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 137 }}>
                    <span style={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 500, color: "#323232" }}>Total Harga</span>
                    <span style={{ fontFamily: 'Roboto', fontSize: 34, fontWeight: 'bold', color: "#0065AF" }}>Rp 15.000</span>
                </div>
                <div className={styles.box_shadow_ringkasan} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: 16 }}>
                        <span>OVO</span>
                    </div>
                    <div style={{ height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
                    <div style={{ height: 112, flexDirection: 'column', display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                        <Menu />
                        <Menu />
                        <Menu />
                    </div>
                    <div style={{ height: 1, background: 'rgba(0, 0, 0, 0.1)' }} />
                    <div style={{ padding: 16, display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: 2 }}>
                            <span>Sisa Tagihan</span>
                        </div>
                        <div>
                            <span>Rp</span>

                        </div>
                        <div style={{ flex: 1, display:'flex', justifyContent:'flex-end' }}>
                            <span>14.000</span>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer>
                <div style={{ padding: 16, display: 'flex', flex: 1 }}>

                    <Button fullWidth variant="contained">Bayar</Button>
                </div>

            </Footer>
        </Contain>
    )
}

const Menu = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 2 }}>
                <span style={style.text}>Tagihan</span>
            </div>
            <div>
                <span style={style.text}>Rp</span>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                <span style={style.text}>15.000</span>
            </div>
        </div>
    )
}

const style = {
    text: {
        fontFamily: 'Roboto', fontSize: 14, color: 'rgba(0, 0, 0, 0.5)'
    }
}