import React, { useEffect } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import useInput from "../../../component/useInput";
import useInputSelect from "../../../component/useInputSelect";
import useTextArea from "../../../component/useTextArea";
import { Divider, Label } from "../ekstra-bagasi/page-detail-pengirim";
import styles from '../../../styles/PageEkstraBagasi.module.css';
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
const arr = [
    {
        value: "mr",
        label: "Mr"
    },
    {
        value: "mrs",
        label: "Mrs"
    }
]

export default function PageDetailPengirim() {
    const [gelar_value, gelar_select, setDataGelar] = useInputSelect()
    const [kelurahan_value, kelurahan_select] = useInputSelect()
    const [full_name_value, full_name_input] = useInput()
    const [email_value, email_input] = useInput()
    const [alamat_value, alamat_input] = useTextArea();
    const [email_konfirmasi_value, email_konfirmasi_input] = useInput()
    useEffect(() => {
        setDataGelar(arr)
    }, [])
    return (
        <Contain>
            <Header>
                <AppBar title={"Data Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Label title={"Gelar & Nama Lengkap Pengirim"} />
                <div className={styles.div_full_name_parent}>
                    <div className={styles.div_gelar}>

                        {gelar_select}
                    </div>
                    <div className={styles.div_full_name}>
                        {full_name_input}
                    </div>
                </div>
                <Divider />
                <Label title={"Email Pengirim"} />
                {email_input}
                <Divider />
                <Label title={"Konfirmasi Email Pengirim"} />
                {email_konfirmasi_input}
                <Divider />
                <Label title={"Alamat Lengkap Penerima"} />
                {alamat_input}
                <Divider />
                <Label title={"Kelurahan"} />
                {kelurahan_select}
                <Divider />
            </Content>
            <Footer style={{ padding: 16 }}>
                <Link href={"page-pick-up"}>

                    <LoadingButton
                        fullWidth
                        loadingPosition="start"
                        variant="contained"
                    >
                        KONFIRMASI
                    </LoadingButton>
                </Link>
            </Footer>
        </Contain>
    )
}