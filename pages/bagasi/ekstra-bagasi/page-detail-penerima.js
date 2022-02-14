import React, { useEffect } from 'react';
import { Container, Grid, Input } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputSelect from '../../../component/useInputSelect';
import useInput from '../../../component/useInput';
import { AppBar, Divider, Label } from './page-detail-pengirim';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import Content from '../../../component/Content';
import useTextArea from '../../../component/useTextArea';
import Link from 'next/link'
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
export default function PageDetailPenerima() {
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
                <AppBar title={"Detail Penerima"} />
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
                <Link href={'page-detail-pengirim'}>
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