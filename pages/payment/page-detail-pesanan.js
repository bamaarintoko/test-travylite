
import React from "react";
import { Container, Grid } from "@mui/material";
import Contain from "../../component/Container";
import styles from '../../styles/PageEkstraBagasi.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import Button from '@mui/material/Button';
import Content from "../../component/Content";
import { Box } from "@mui/system";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { AppBar } from "../../component/AppBar";
import Link from "next/link"
import withAuth from "../../component/withAuth";
import { useSelector } from "react-redux";
function PageDetailPesanan() {
    const {
        customerReducer: {
            recipient: {
                gender_receiver, name_receiver, phone_receiver, address_receiver
            },
            shipper: {
                gender_shipper, name_shipper, phone_shipper, address_shipper
            },
            shipper_full_zone: {
                province, city, district, name, postal_code
            },
            recipient_full_zone
        }
    } = useSelector(s => s)
    // console.log("recipient", recipient)
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pesanan"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <LocationOnIcon sx={{ color: "#0065AF" }} />

                        <div className={styles.line}>

                        </div>
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Pengirim</span>
                        <span className={styles.text_label_detail_pesanan}>{gender_receiver.value}. {name_receiver.value}</span>
                        <span className={styles.text_desc}>{phone_receiver.value}</span>
                        <span className={styles.text_desc}>{address_receiver.value}</span>
                        <span className={styles.text_desc}>{`${recipient_full_zone.province}, ${recipient_full_zone.city}, ${recipient_full_zone.district}, ${recipient_full_zone.name}, ${recipient_full_zone.postal_code}`}</span>
                    </div>
                </div>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <LocationOnIcon sx={{ color: "#E84A25" }} />
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Penerima</span>
                        <span className={styles.text_label_detail_pesanan}>{gender_shipper.value}. {name_shipper.value}</span>

                        <span className={styles.text_desc}>{phone_shipper.value}</span>
                        <span className={styles.text_desc}>{address_shipper.value}</span>
                        <span className={styles.text_desc}>{`${province}, ${city}, ${district}, ${name}, ${postal_code}`}</span>
                    </div>
                </div>
                <div className={styles.parent_time_line}>
                    <div className={styles.left_time_line}>
                        <BusinessCenterTwoToneIcon sx={{ color: "#E84A25" }} />
                    </div>
                    <div className={styles.right_time_line}>
                        <span className={styles.text_label_detail_pesanan}>Ekstra Bagasi</span>
                        <span className={styles.text_label_detail_pesanan}>{gender_shipper.value}. {name_shipper.value}</span>

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
                    <Link href={"page-pilihan-pembayaran"}>
                        <Button fullWidth variant="contained">Bayar</Button>
                    </Link>
                </div>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPesanan)