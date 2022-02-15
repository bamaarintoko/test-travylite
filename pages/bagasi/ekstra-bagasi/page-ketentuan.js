import { Button, Container, Grid, Input } from '@mui/material'
import { AppBar } from '../../../component/AppBar'
import Contain from '../../../component/Container'
import Content from '../../../component/Content'
import Header from '../../../component/Header'
import styles from '../../../styles/PenitipanBagasi.module.css'
import general_styles from "../../../styles/General.module.css"
import Link from 'next/link'
export default function PagesKetentuan() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Ketentuan"} />
            </Header>
            <Content>
                <Grid className={styles.box_gradient} item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={style.top_box}>
                        <span style={style.label}>Bagasi /</span>
                        <span style={style.label}>Ekstra Bagasi</span>
                        <span style={style.small_label}>Port to Port & Port to Door</span>
                    </div>
                    <div style={style.bottom_box}>
                        <div style={style.bottom_label_wrapper}>
                            <span style={style.bottom_label}>Pengiriman bagasi atau kelebihan bagasi ke bandara tujuan atau kirim langsung ke alamat tujuanmu</span>
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
                            <Link href={"page-detail-penerima"}>

                                <Button sx={{ borderRadius: 50 }} fullWidth variant="contained">Lanjutkan</Button>
                            </Link>
                        </div>
                    </div>
                    {/* <Grid item xs={12} md={12} style={{ backgroundColor: 'red', display: 'flex', flex: 1,flexDirection:'column' }}>
                        <span style={style.label}>Bagasi /</span>
                        <span style={style.label}>Ekstra Bagasi</span>
                        <span style={style.small_label}>Port to Port & Port to Door</span>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div style={style.bottom_label_wrapper}>
                            <span style={style.bottom_label}>Pengiriman bagasi atau kelebihan bagasi ke bandara tujuan atau kirim langsung ke alamat tujuanmu</span>
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
                            <Link href={"page-detail-pengirim"}>

                                <Button sx={{ borderRadius: 50 }} fullWidth variant="contained">Lanjutkan</Button>
                            </Link>
                        </div>
                    </Grid> */}
                </Grid>
            </Content>
        </Contain>
    )
}

export const Ketentuan = ({ number = "1", text = "Isi data pengirim" }) => {
    return (
        <div style={style.list_ketentuan}>
            <div style={style.list_parent_number}>

                <span style={style.text_number}>{number}</span>
            </div>
            <div style={{ paddingLeft: 24, display: 'flex', alignItems: 'center' }}>
                <span style={style.text_ketentuan}>{text}</span>
            </div>
        </div>
    )
}

export const style = {
    list_ketentuan: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 16
    },
    list_parent_number: {
        display: 'flex',
        width: 24,
        height: 24,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0065af"
    },
    text_number: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500,
        color: "#FEFEFE"
    },
    text_ketentuan: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500,
        color: "#323232"
    },
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
    top_box: {
        display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
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