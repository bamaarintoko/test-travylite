import React, { useState } from "react";
import { Grid, Stack, Box, Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import styles from "../../styles/General.module.css"
import useInputSelect from "../../component/useInputSelect";
import { borderRadius } from "@mui/system";
import { general_style } from "../../component/general_style";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/router'
const smartBoxArr = [
    {
        label: "Ukuran Kecil",
        desc: "350 mm x 95 mm x 450 mm",
        stok: 10,
        value: "small"
    },
    {
        label: "Ukuran Sedang",
        desc: "350 mm x 206 mm x 450 mm",
        stok: 15,
        value: "medium"
    },
    {
        label: "Ukuran Besar",
        desc: "350 mm x 317 mm x 450 mm",
        stok: 7,
        value: "large"
    },
]

export default function PagePilihSmartBox() {
    const [smart_box_location_value, smart_box_location_input] = useInputSelect()
    const [smart_box_value, setSmartBox] = useState("");

    const router = useRouter();
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilih Smart Box"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={1}>
                        <span className={styles.text_normal_black}>Smart Box</span>
                        <span className={styles.text_body}>Smart Box adalah Box pintar penitipan dokumen atau paket lainnya dengan tiga pilihan ukuran Small, Medium dan Large</span>
                    </Stack>
                    <Stack style={{ marginTop: 24 }} spacing={1}>
                        <span className={styles.text_normal_black}>Lokasi Smart Box</span>
                        {smart_box_location_input}
                    </Stack>
                    <Stack spacing={2} style={{ marginTop: 24 }}>
                        {
                            smartBoxArr.map((x, y) => {
                                return (
                                    <SmartBox onClick={() => setSmartBox(x.value)} selected={smart_box_value} value={x.value} key={y} label={x.label} desc={x.desc} stok={x.stok} />
                                )
                            })
                        }
                    </Stack>
                </Grid>
                <div style={{ height: 100 }} />
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={()=>router.push("page-detail-paket")} fullWidth variant="contained">Lanjutkan</Button>
            </Footer>
        </Contain>
    )
}

const SmartBox = ({ label = "", desc = "", stok = "", onClick = {}, value = "", selected = "" }) => {
    return (
        <Box sx={{
            boxShadow: 3,
            borderRadius: '16px'

        }}>
            <div onClick={onClick} style={value === selected ? style.selected_box : style.smart_box}>
                <div style={value === selected ? style.selected_circle : style.circle}>
                    {
                        value === selected
                            ?
                            <CheckIcon sx={{ color: "#20AEE0", fontSize: 40 }} />
                            :
                            <Inventory2Icon sx={{ color: "#FF9901", fontSize: 40 }} />
                    }
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}>
                    <Stack spacing={0}>
                        <span style={general_style.heading_dark_bold}>{label}</span>
                        <span style={general_style.heading_light}>{desc}</span>
                        <span style={general_style.heading_light}>Stok {stok}</span>
                    </Stack>
                </div>
            </div>
        </Box>
    )
}

const style = {
    circle: {
        background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)",
        height: 80,
        width: 80,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected_circle: {
        backgroundColor: "#FFF",
        height: 80,
        width: 80,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smart_box: {
        display: 'flex', flexDirection: 'row', padding: 16, backgroundColor: "#FEFEFE", borderRadius: 16
    },
    selected_box: {
        display: 'flex', flexDirection: 'row', padding: 16, background: "linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)", borderRadius: 16

    }
}