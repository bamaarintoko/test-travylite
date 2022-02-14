import React from "react";
import { Grid } from "@mui/material";
// import Contain from "../../component/Container";
import { AppBar } from "../bagasi/ekstra-bagasi/page-detail-pengirim";
import styles from '../../styles/PageEkstraBagasi.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Radio from '@mui/material/Radio';
import { style } from "@mui/system";
import Contain from "../../component/Container";
import Header from "../../component/Header";
import Content from "../../component/Content";
let kurirArr = [
    {
        label: "Kurir 1",
        data: [
            {
                label: "Same Day",
                desc: "Solusi pengiriman paling cepat. Kirim dan terima dalam 8 jam",
                price: 15000
            },
            {
                label: "Next Day",
                desc: "Layanan cepat barang sampai sehari setelah di Pick-Up",
                price: 13000
            },
            {
                label: "Regular",
                desc: "Layanan cepat barang sampai sehari setelah di Pick-Up",
                price: 10000
            }
        ],

    },
    {
        label: "Kurir 2",
        data: []

    },
    {
        label: "Kurir 3",
        data: []
    }
]

export default function () {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilihan Pengiriman"} />
            </Header>
            <Content>
                <Grid item xs={12} md={12} style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 16 }}>
                    {
                        kurirArr.map((x) => {
                            return (
                                <>
                                    <div className={styles.parent_kurir_name}>
                                        <div className={styles.left_child_kurir_name}>
                                            <span className={styles.text_kurir_name}>{x.label}</span>
                                        </div>
                                        <div className={styles.right_child_kurir_name}>
                                            <ExpandLessIcon />
                                        </div>
                                    </div>
                                    {
                                        x.data.map((i) => {
                                            return (
                                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 8, marginBottom: 8 }}>
                                                    <div className={styles.left_services}>
                                                        <Radio
                                                            checked={selectedValue === i.label}
                                                            onChange={handleChange}
                                                            value={i.label}
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                        />
                                                    </div>
                                                    <div className={styles.mid_services}>
                                                        <span className={styles.text_kurir_service}>{i.label}</span>
                                                        <span className={styles.text_kurir_service_desc}>{i.desc}</span>
                                                    </div>
                                                    <div className={styles.right_services}>
                                                        <span className={styles.text_kurir_price}>{i.price}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </Grid>
            </Content>
            {/* <span></span> */}
        </Contain>
    )
}