
import React from "react";
import { Container, Grid } from "@mui/material";
import Contain from "../../component/Container";
import styles from '../../styles/PageEkstraBagasi.module.css';
import { AppBar } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import Button from '@mui/material/Button';
import Content from "../../component/Content";
import { Box } from "@mui/system";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

export default function PageDetailPesanan() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pesanan"} />
            </Header>
            <Content style={{padding:16}}>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <LocationOnIcon sx={{ color: "#0065AF" }} />

                        <div className={styles.line}>

                        </div>
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Pengirim</span>
                        <span className={styles.text_label_detail_pesanan}>Mr. Smith</span>
                        <span className={styles.text_desc}>0812 234 234</span>
                        <span className={styles.text_desc}>Jl. Mawar No 4, Kab. Tanggerang</span>
                    </div>
                </div>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <LocationOnIcon sx={{ color: "#E84A25" }} />
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Penerima</span>
                        <span className={styles.text_label_detail_pesanan}>Mr. Agung Nugroho</span>

                        <span className={styles.text_desc}>0812 1234 1234</span>
                        <span className={styles.text_desc}>Dipowinatan 303, Keparakan, Mergangsan, 55152</span>
                    </div>
                </div>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <BusinessCenterTwoToneIcon sx={{ color: "#E84A25" }} />
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Ekstra Bagasi</span>
                        <span className={styles.text_label_detail_pesanan}>Mr. Agung Nugroho</span>

                        <span className={styles.text_desc}>0812 1234 1234</span>
                        <span className={styles.text_desc}>Dipowinatan 303, Keparakan, Mergangsan, 55152</span>
                    </div>
                </div>

            </Content>
            <Footer>
                <div className={styles.left_footer}>
                    <span className={styles.text_total_harga}>Total Harga</span>
                    <span className={styles.text_nominal}>Rp 15.000</span>
                </div>
                <div className={styles.left_footer}>
                    <Button fullWidth variant="contained">Bayar</Button>
                </div>
            </Footer>
        </Contain>
    )
}