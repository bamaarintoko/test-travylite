import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { AppBar } from "../../../component/AppBar";
import BoxShadow from "../../../component/BoxShadow";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import styles from "../../../styles/General.module.css"
import Link from "next/link"
import withAuth from "../../../component/withAuth";
function PageDropOff() {

    const [value, setValue] = useState(0)

    return (
        <Contain>
            <Header>
                <AppBar title={"Drop-Off Detail"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <div onClick={() => setValue(1)} className={value === 1 ? styles.bg_gradient : styles.bg_white} style={{ display: 'flex', flexDirection: 'row', height: 112, paddingLeft: 16, paddingRight: 16 }}>
                        <div style={{ display: 'flex', width: 80, alignItems: 'center' }}>
                            <div className={value === 1 ? styles.bg_plain_white : styles.plain_gradient} style={{ width: 80, height: 80, borderRadius: 100 }}>

                            </div>
                        </div>
                        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: 16 }}>
                            <span className={value === 1 ? styles.text_normal_white : styles.text_normal_black}>Booth Travylite Check-in Terminal 2E Bandara Soekarno-Hatta</span>
                        </div>
                    </div>
                    <div style={{ height: 16 }} />
                    <div onClick={() => setValue(2)} className={value === 2 ? styles.bg_gradient : styles.bg_white} style={{ display: 'flex', flexDirection: 'row', height: 112, paddingLeft: 16, paddingRight: 16 }}>
                        <div style={{ display: 'flex', width: 80, alignItems: 'center' }}>
                            <div className={value === 2 ? styles.bg_plain_white : styles.plain_gradient} style={{ width: 80, height: 80, borderRadius: 100 }}>

                            </div>
                        </div>
                        <div style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: 16 }}>
                            <span className={value === 2 ? styles.text_normal_white : styles.text_normal_black}>Booth Travylite Check-in Domestik Bandara Kualanamu</span>
                        </div>
                    </div>
                </Grid>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Link href={"page-detail-penitipan-bagasi"}>
                    <Button fullWidth variant="contained">Konfirmasi</Button>
                </Link>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDropOff)