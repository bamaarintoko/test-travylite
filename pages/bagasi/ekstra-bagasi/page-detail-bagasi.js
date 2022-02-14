import { Grid, Input, Radio, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import Contain from '../../../component/Container'
import { AppBar } from './page-detail-pengirim'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputNumber from '../../../component/useInputNumber';
import useTextArea from '../../../component/useTextArea';
export default function PageDetailBagasi() {
    const [panjang_value, number_input] = useInputNumber()
    const [deskripsi_value, deskripsi_input] = useTextArea()
    return (
        <Contain maxWidth="md">
            <AppBar title={"Detail Bagasi"} />
            <Grid className={styles.grid_content} container spacing={0}>
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
                <LoadingButton
                    onClick={() => {
                        alert('clicked')
                    }}
                    loadingPosition="start"
                    variant="contained"
                >
                    Tambahkan
                </LoadingButton>
            </Grid>
        </Contain>
    )
}