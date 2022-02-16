import { Button, Container, Grid, Input, Stack } from '@mui/material'
import { AppBar } from '../../../component/AppBar'
import Contain from '../../../component/Container'
import Content from '../../../component/Content'
import Header from '../../../component/Header'
import styles from '../../../styles/PenitipanBagasi.module.css'
// import general_styles from "../../../styles/General.module.css"
import Link from 'next/link'
import Ketentuan from '../../../component/Ketentuan'
import { general_style } from '../../../component/general_style'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
export default function PagesKetentuan() {
    const route = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Ketentuan"} />
            </Header>
            <Content>
                <Box style={{ display: 'flex', flex: 1, background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)" }}>
                    <Stack sx={{
                        display: 'flex',
                        flex: 1
                    }}>
                        <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Stack sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Bagasi /</span>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 27,
                                    // lineHeight: '160%',
                                    color: "#FEFEFE"
                                }}>Ekstra Bagasi</span>
                                <Box sx={{ height: '16px' }} />
                                <span style={general_style.body_white}>Port to Port & Port to Door</span>
                            </Stack>
                        </Box>
                        <Box sx={{ backgroundColor: '#FFF', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '32px' }}>
                            <Stack>
                                <span style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: 14,
                                    lineHeight: '160%',
                                    color: "#323232",
                                    textAlign: 'center'
                                }}>Pengiriman bagasi atau kelebihan bagasi ke bandara tujuan atau kirim langsung ke alamat tujuanmu</span>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Stack spacing={2}>
                                    <Ketentuan number={1} label={"Isi data pengirim"} />
                                    <Ketentuan number={2} label={"Isi data penerima"} />
                                    <Ketentuan number={3} label={"Isi detail bagasi"} />
                                    <Ketentuan number={4} label={"Pilih durasi pengiriman"} />

                                </Stack>
                                <Box sx={{
                                    height: '1px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    marginTop: '24px',
                                    marginBottom: '24px'
                                }} />
                                <Box sx={{ paddingBottom: '16px' }}>
                                    <Button onClick={() => route.push('page-detail-penerima')} sx={{
                                        backgroundColor: '#0065AF',
                                        borderRadius: '16px'
                                    }} fullWidth variant="contained">Lanjutkan</Button>

                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Content>
        </Contain>
    )
}

// export const Ketentuan = ({ number = "1", text = "Isi data pengirim" }) => {
//     return (
//         <div style={style.list_ketentuan}>
//             <div style={style.list_parent_number}>

//                 <span style={style.text_number}>{number}</span>
//             </div>
//             <div style={{ paddingLeft: 24, display: 'flex', alignItems: 'center' }}>
//                 <span style={style.text_ketentuan}>{text}</span>
//             </div>
//         </div>
//     )
// }

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