import { Container, Grid, Input } from '@mui/material'
import styles from '../../styles/PageBagasi.module.css'
import Link from 'next/link'
import Contain from '../../component/Container'
import Header from '../../component/Header'
import { AppBar } from '../../component/AppBar'
import Content from '../../component/Content'
export default function PagesBagasi() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Pengiriman Airport Bagasi"} />
            </Header>
            <Content>

                <Grid className={styles.background_bagasi} item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    {/* <Grid className={styles.parent_area} item md={12} xs={12}> */}
                    <div className={styles.parent_area}>

                        <div className={styles.top_area}>
                            <span className={styles.text_pengiriman}>Pengiriman Airport Bagasi</span>
                            <span className={styles.text_lebih_murah}>Lebih Murah, Bebas Bagasi, Solusi pengiriman bagasi antar kota</span>
                        </div>
                        <div className={styles.bottom_area}>
                            <div className={styles.parent_menu}>
                                <Link href="/bagasi/ekstra-bagasi/page-ketentuan">
                                    <div className={styles.extra_bagasi}>
                                        <div className={styles.menu_icon}></div>
                                        <span className={styles.text_bagasi_ekstra_bagasi}>Bagasi / Ekstra Bagasi</span>
                                    </div>
                                </Link>
                                <div style={{ width: 16 }} />
                                <Link href="/bagasi/penitipan-bagasi/page-penitipan-bagasi">
                                    <div className={styles.extra_bagasi}>
                                        <div className={styles.menu_icon}></div>
                                        <span className={styles.text_bagasi_ekstra_bagasi}>Penitipan Bagasi</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Content>
        </Contain>
    )
}