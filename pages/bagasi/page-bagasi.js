import { Container, Grid, Input, Stack } from '@mui/material'
import styles from '../../styles/PageBagasi.module.css'
import Link from 'next/link'
import Contain from '../../component/Container'
import Header from '../../component/Header'
import { AppBar } from '../../component/AppBar'
import Content from '../../component/Content'
import { Box } from '@mui/system'
import { general_style } from '../../component/general_style'
import { useDispatch, useSelector } from 'react-redux'
import { FILL_DELIVERY_TYPE, REMOVE_DELIVERY_TYPE } from '../../reducer/deliveryReducer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { EXTRA_BAGGAGE, LEFT_BAGGAGE } from '../../helper/const'
export default function PagesBagasi() {
    const dispatch = useDispatch()
    const route = useRouter()

    const { deliveryReducer: {
        type
    } } = useSelector(s => s)



    // useEffect(() => {
    //     if (type !== "") {
    //         if (type === "Extra Baggage") {
    //             route.push("/bagasi/ekstra-bagasi/page-ketentuan")
    //         } else if (type === "Left Baggage") {
    //             route.push("/bagasi/penitipan-bagasi/page-penitipan-bagasi")
    //         }
    //     }
    //     // console.log("type", type)
    // }, [type])

    function delivery(val) {
        // /bagasi/ekstra-bagasi/page-ketentuan
        // /bagasi/penitipan-bagasi/page-penitipan-bagasi
        return () => {
            dispatch({
                type: FILL_DELIVERY_TYPE,
                value: val
            })
            if (val === EXTRA_BAGGAGE) {
                route.push("/bagasi/ekstra-bagasi/page-ketentuan")
            } else if (val === LEFT_BAGGAGE) {
                route.push("/bagasi/penitipan-bagasi/page-penitipan-bagasi")
            }
            // console.log("type ", val)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Pengiriman Airport Bagasi"} />
            </Header>
            <Content>

                <Grid className={styles.background_bagasi} item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    {/* <Grid className={styles.parent_area} item md={12} xs={12}> */}
                    <Stack sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                            <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                                <span className={styles.text_pengiriman}>Pengiriman Airport Bagasi</span>
                                <span className={styles.text_lebih_murah}>Lebih Murah, Bebas Bagasi, Solusi pengiriman bagasi antar kota</span>
                            </Stack>
                        </Box>
                        <Box sx={style.bottom_comp}>
                            <Stack spacing={2} sx={{ paddingTop: '16px', paddingBottom: '16px' }} direction={'row'}>
                                <Box onClick={delivery(EXTRA_BAGGAGE)} sx={style.box}>
                                    <span style={general_style.heading_dark_bold}>Bagasi / Ekstra Bagasi</span>
                                </Box>

                                <Box onClick={delivery(LEFT_BAGGAGE)} sx={style.box}>
                                    <span style={general_style.heading_dark_bold}>Penitipan Bagasi</span>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    {/* <div className={styles.parent_area}>
                        <div className={styles.top_area}>
                            <span className={styles.text_pengiriman}>Pengiriman Airport Bagasi</span>
                            <span className={styles.text_lebih_murah}>Lebih Murah, Bebas Bagasi, Solusi pengiriman bagasi antar kota</span>
                        </div>
                        <div className={styles.bottom_area}>
                            <div className={styles.parent_menu}>
                                <div className={styles.extra_bagasi}>
                                    <div className={styles.menu_icon}></div>
                                    <span className={styles.text_bagasi_ekstra_bagasi}>Bagasi / Ekstra Bagasi</span>
                                </div>
                                <div style={{ width: 16 }} />
                                <div className={styles.extra_bagasi}>
                                    <div className={styles.menu_icon}></div>
                                    <span className={styles.text_bagasi_ekstra_bagasi}>Penitipan Bagasi</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Grid>
            </Content>
        </Contain>
    )
}

const style = {
    box: {
        borderRadius: '16px',
        display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '192px', backgroundColor: '#FFF', boxShadow: '0 16px 24px 0 #f2f2f2'
    },
    bottom_comp: {
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        backgroundColor: '#f2f2f2',
        paddingLeft: '16px',
        paddingRight: '16px'
    }
}