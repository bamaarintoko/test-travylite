import { Container, Grid, Input, Stack } from '@mui/material'
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
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack style={{display:'flex',flex:1}} spacing={0}>
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
                </Stack>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Link href={'page-detail-bagasi'}>
                    <LoadingButton
                        fullWidth
                        loadingPosition="start"
                        variant="contained"
                    >
                        KONFIRMASI
                    </LoadingButton>
                </Link>
            </Footer>
            {/* <Grid className={styles.grid_content} container spacing={0}>

            </Grid> */}
        </Contain>
    )
}

// export const AppBar = ({ title = "" }) => {
//     return (
//         <div className={styles.app_bar}>
//             <div className={styles.left_bar}>
//                 <ArrowBackIcon />
//             </div>
//             <div className={styles.middle_bar}>
//                 <span className={styles.text_bar_title}>{title}</span>
//             </div>
//             <div className={styles.right_bar}>

//             </div>
//         </div>
//     )
// }

export function Label({ title = "" }) {
    return (
        <span className={styles.text_label}>{title} <span style={{ color: "#e84a25" }}>*</span></span>
    )
}

export const Divider = () => {
    return <div style={{ height: 24 }} />
}