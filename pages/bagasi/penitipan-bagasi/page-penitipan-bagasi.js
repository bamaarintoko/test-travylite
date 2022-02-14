import { Button, Grid } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Header from "../../../component/Header";
import styles from "../../../styles/PenitipanBagasi.module.css"
import { Ketentuan } from "../ekstra-bagasi/page-ketentuan";

export default function PagePenitipanBagasi() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Ketentuan"} />
            </Header>
            <Content>
                <Grid className={styles.box_gradient} item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Grid item xs={12} md={12} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <span style={style.label}>Penitipan</span>
                        <span style={style.label}>Bagasi</span>
                        <span style={style.small_label}>Door to Port</span>
                    </Grid>
                    <Grid item xs={12} md={12} style={style.bottom_box}>
                        <div style={style.bottom_label_wrapper}>
                            <span style={style.bottom_label}>Penitipan dan pengiriman bagasi ke Bandara lokasi </span>
                            <span style={style.bottom_label}>Booth Travylite CGK dan KNO</span>
                        </div>
                        <div style={{ height: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", marginTop: 24, marginBottom: 24 }} />
                        <div style={style.content_wrapper}>
                            <Ketentuan number={1} />
                            <Ketentuan number={2} text={"Pilih tempat Pick-Up dan Drop-Off"} />
                            <Ketentuan number={3} text={"Isi detail bagasi"} />
                            <Ketentuan number={4} text={"Pilih durasi pengiriman"} />
                        </div>
                        <div style={{ height: 1, backgroundColor: "rgba(0, 0, 0, 0.1)", marginBottom: 24 }} />
                        <div>
                            <Button sx={{ borderRadius: 50 }} fullWidth variant="contained">Lanjutkan</Button>
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
        fontFamily: 'Roboto', fontWeight: 500, fontSize: 14
    },
    bottom_label_wrapper: {
        display: 'flex', alignItems: 'center', flexDirection: 'column'
    },
    content_wrapper: {
        display: 'flex', flex: 1, flexDirection: 'column',
    }
}