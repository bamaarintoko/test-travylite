
import { Grid } from "@mui/material";
import React from "react";
import Contain from "../../component/Container";
import styles from '../../styles/PageEkstraBagasi.module.css';
import { flexbox } from "@mui/system";
import Header from "../../component/Header";
import Content from "../../component/Content";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AppBar } from "../../component/AppBar";
import Link from "next/link"
import withAuth from "../../component/withAuth";
function PagePilihanPembayaran() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilihan Pembayaran"} />
            </Header>
            <Content style={{ padding: 16 }}>
                {
                    paymentArr.map((x, y) => {
                        return (
                            <>
                                <div key={y} style={{ height: 50, alignItems: 'center', display: 'flex' }}>
                                    <span className={styles.text_label_detail_pesanan}>{x.label}</span>
                                </div>
                                {
                                    x.data.map((i, j) => {
                                        return (
                                            <Link href={"page-ringkasan-pembayaran"} key={j}>
                                                <div style={{ display: 'flex', flexDirection: 'row', height: 76, alignItems: 'center', borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: "#E0E0E0" }}>
                                                    <div style={{ width: 40, height: 40 }}>

                                                    </div>
                                                    <div style={{ display: 'flex', flex: 1, marginLeft: 16 }}>
                                                        <span style={{ fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', color: "#323232" }}>{i.label}</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <KeyboardArrowRightIcon />
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </Content>
        </Contain>
    )
}

const paymentArr = [
    {
        label: "E-Wallet",
        data: [
            {
                image: "",
                label: "OVO"
            },
            {
                image: "",
                label: "Shopee Pay"
            },
            {
                image: "",
                label: "Dana"
            },

        ]
    },
    {
        label: "Transfer Antar Bank",
        data: [
            {
                image: "",
                label: "Transfer Mandiri"
            },
            {
                image: "",
                label: "Transfer BCA"
            },
            {
                image: "",
                label: "Transfer BRI"
            },
            {
                image: "",
                label: "Transfer BNI"
            },
        ]
    },
]

export default withAuth(PagePilihanPembayaran)