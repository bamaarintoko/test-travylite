import { Grid, Input, Radio, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import Contain from '../../../component/Container'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputNumber from '../../../component/useInputNumber';
import useTextArea from '../../../component/useTextArea';
import { AppBar } from '../../../component/AppBar';
import Header from '../../../component/Header';
import Content from '../../../component/Content';
import Footer from '../../../component/Footer';
import Link from 'next/link'
export default function PageDetailBagasi() {
    const [panjang_value, number_input] = useInputNumber()
    const [deskripsi_value, deskripsi_input] = useTextArea()
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Bagasi"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <span className={styles.text_label_detail_bagasi}>Apakah Anda membutuhkan FREE Warapping?</span>
                <div className={styles.radio_parent}>
                    <div className={styles.radio_left}>
                        <Radio
                            value="a"
                            name="radio-buttons"
                        // inputProps={{ 'aria-label': 'A' }}
                        />
                    </div>
                    <div className={styles.radio_right}>
                        <span className={styles.text_label_radio}>Ya, Saya membutuhkan FREE Wrapping</span>
                    </div>
                </div>
                <div className={styles.radio_parent}>
                    <div className={styles.radio_left}>
                        <Radio
                            value="a"
                            name="radio-buttons"
                        // inputProps={{ 'aria-label': 'A' }}
                        />
                    </div>
                    <div className={styles.radio_right}>
                        <span className={styles.text_label_radio}>Tidak, Saya tidak membutuhkan FREE Wrapping</span>
                    </div>
                </div>
                <span className={styles.text_label_detail_bagasi}>Ukuran Bagasi / Box Anda</span>
                <span className={styles.text_label_radio}>Maksimal dimensi ukuran bagasi atau box yang dapat dikirim, Panjang x Lebar x Tinggi: 50 cm x 50 cm x 50 cm</span>
                <span className={styles.text_label_detail_bagasi}>Masukkan dimensi ukuran dari Bagasi atau Box Anda</span>
                <div className={styles.dimension_parent}>
                    <div className={styles.dimension_child}>
                        <span className={styles.text_label_detail_bagasi}>Panjang</span>
                        {number_input}
                    </div>
                    <div style={{ width: 16 }} />
                    <div className={styles.dimension_child}>
                        <span className={styles.text_label_detail_bagasi}>Lebar</span>
                        {number_input}
                    </div>
                    <div style={{ width: 16 }} />
                    <div className={styles.dimension_child}>
                        <span className={styles.text_label_detail_bagasi}>Tinggi</span>
                        {number_input}
                    </div>
                </div>
                <div className={styles.dimension_parent}>
                    <div className={styles.dimension_child}>
                        <span className={styles.text_label_detail_bagasi}>Berat</span>
                        {number_input}
                    </div>
                    <div style={{ width: 16 }} />
                    <div className={styles.dimension_child}>
                        <span className={styles.text_label_detail_bagasi}>Jumlah</span>
                        {number_input}
                    </div>
                </div>
                <span className={styles.text_label_detail_bagasi}>Deskripsi Bagasi / Boxs</span>
                {deskripsi_input}
                <div style={{ height: 24 }} />
            </Content>
            <Footer style={{ padding: 16 }}>
                <Link href={"/kurir/page-pilihan-pengiriman"}>
                    <LoadingButton
                        fullWidth
                        loadingPosition="start"
                        variant="contained"
                    >
                        Tambahkan
                    </LoadingButton>
                </Link>
            </Footer>
        </Contain>
    )
}