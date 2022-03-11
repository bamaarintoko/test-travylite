import { Button, Container, Grid, Input, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputSelect from '../../../component/useInputSelect';
import useInput from '../../../component/useInput';
import useTextArea from '../../../component/useTextArea';
import { useEffect } from 'react';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Content from '../../../component/Content';
import Footer from '../../../component/Footer';
import { AppBar } from '../../../component/AppBar';
import withAuth from '../../../component/withAuth';
import RegionShipper from '../../../component/RegionShipper';
import { useRouter } from 'next/router';
// import Region from '../../../component/RegionRecipient';
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
function PageDetailPengirim() {
    const route = useRouter()
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
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <Label title={"Gelar & Nama Lengkap Pengirim"} />
                    <Stack direction="row" spacing={1}>
                        {gelar_select}
                        {full_name_input}
                    </Stack>
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
                    <RegionShipper />
                    <Divider />
                </Stack>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    onClick={() => route.push("page-detail-bagasi")}
                    fullWidth
                    loadingPosition="start"
                    variant="contained"
                >
                    KONFIRMASI
                </Button>
            </Footer>
        </Contain>
    )
}

export function Label({ title = "" }) {
    return (
        <span className={styles.text_label}>{title} <span style={{ color: "#e84a25" }}>*</span></span>
    )
}

export const Divider = () => {
    return <div style={{ height: 24 }} />
}

export default withAuth(PageDetailPengirim)