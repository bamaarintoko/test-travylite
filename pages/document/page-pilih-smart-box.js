import React, { useEffect, useState } from "react";
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
import withAuth from "../../component/withAuth";
import { useGet } from "../../helper/request";
import { useDispatch, useSelector } from "react-redux";
import { FILL_LOCATIONS, FILL_SMARTBOXS, SELECTED_LOCATION, SELECTED_SMART_BOX } from "../../reducer/smartboxReducer";
import Loading from "../../component/Loading";
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

function PagePilihSmartBox() {
    const router = useRouter();
    const dispatch = useDispatch()
    const {
        smartboxReducer: {
            locations, selected_location, smartboxs, selected_smartbox
        }
    } = useSelector(s => s)
    const [smart_box] = useInputSelect()
    const [smart_box_value, setSmartBox] = useState("");

    const [func_fetch_loc, res_fetch_loc] = useGet(); // location smart box
    const [func_fetch_smartboxs, res_fetch_smartboxs] = useGet(); // list smartboxs

    useEffect(() => {
        func_fetch_loc({}, "smartbox/smartbox-location")
        // func_fetch_smartboxs({}, "smartbox/smartbox-location")
    }, [])

    useEffect(() => {
        if (res_fetch_loc.success) {
            let locArr = []
            res_fetch_loc.success_res.data.map((x, y) => {
                locArr.push({
                    id: x.id,
                    name: x.location
                })
            })
            dispatch({
                type: FILL_LOCATIONS,
                data: locArr
            })
            // console.log("locArr", locArr)
        }
    }, [res_fetch_loc.success])

    useEffect(() => {
        smart_box.setData(locations)
    }, [locations])

    useEffect(() => {
        if (smart_box.value !== "") {
            // console.log("smart_box", smart_box.value)
            dispatch({
                type: SELECTED_LOCATION,
                value: smart_box.value
            })
            fetch_smartbox()
        }
        // smart_box.setValue(smart_box.value)
    }, [smart_box.value])


    function fetch_smartbox() {
        func_fetch_smartboxs({}, `smartbox/${smart_box.value}`)
        // console.log("smart_box.value", smart_box.value)
    }

    useEffect(() => {
        if (res_fetch_smartboxs.success) {
            console.log("==>", res_fetch_smartboxs.success_res.data)
            dispatch({
                type: FILL_SMARTBOXS,
                data: res_fetch_smartboxs.success_res.data
            })
        }
    }, [res_fetch_smartboxs.success])

    function select_smartbox(args) {
        return () => {
            dispatch({
                type: SELECTED_SMART_BOX,
                value: args
            })
        }
    }
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
                        {smart_box.select}
                    </Stack>
                    {
                        selected_location === ""
                        &&
                        <Box sx={{ display: 'flex', height: "200px", alignItems: 'center', justifyContent: 'center' }}>
                            <span style={general_style.heading_dark_bold}>Pilih lokasi smart box terlebih dahulu</span>
                        </Box>
                    }
                    <Stack spacing={2} style={{ marginTop: 24 }}>
                        {
                            smartboxs.map((x, y) => {
                                return (
                                    <SmartBox onClick={select_smartbox(x)} selected={selected_smartbox.id} key={y} data={x} />
                                )
                            })
                        }
                    </Stack>
                </Grid>
                <div style={{ height: 100 }} />
                <Loading loading={res_fetch_loc.loading || res_fetch_smartboxs.loading} />
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button disabled={selected_smartbox.id === undefined} sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }} onClick={() => router.push("page-detail-paket")} fullWidth variant="contained">Lanjutkan</Button>
            </Footer>
        </Contain>
    )
}

const SmartBox = ({ label = "", desc = "", stok = "", onClick = {}, value = "", selected = "", data }) => {
    return (
        <Box sx={{
            boxShadow: ' 0px 16px 24px #F2F2F2',
            borderRadius: '16px'

        }}>
            <div onClick={onClick} style={data.id === selected ? style.selected_box : style.smart_box}>
                <div style={data.id === selected ? style.selected_circle : style.circle}>
                    {
                        data.id === selected
                            ?
                            <CheckIcon sx={{ color: "#20AEE0", fontSize: 40 }} />
                            :
                            <Inventory2Icon sx={{ color: "#FF9901", fontSize: 40 }} />
                    }
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}>
                    <Stack spacing={0}>
                        <span style={general_style.heading_dark_bold}>{data.type}</span>
                        <span style={general_style.heading_light}>-</span>
                        <span style={general_style.heading_light}>Stok {data.stock}</span>
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

export default withAuth(PagePilihSmartBox)