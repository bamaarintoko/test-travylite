import React, { useEffect } from "react";
import Contain from "../../component/Container"
import Header from "../../component/Header"
import Content from "../../component/Content"
import Footer from "../../component/Footer"
import { AppBar } from "../../component/AppBar"
import { Box } from "@mui/system";
import { Stack, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import CardRiwayatPesanan from "../../component/CardRiwayatPesanan";
import { useRouter } from "next/router";
import withAuth from "../../component/withAuth";

function PageRiwayatPesanan() {
    const [value, setValue] = React.useState(0);
    const route = useRouter()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log("value", value)
    }, [value])

    return (
        <Contain>
            <Header>
                <AppBar title={"Riwayat Pesanan"} />
            </Header>
            <Content>
                <TabContext value={value}>
                    <Box sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)" }}>
                        <Tabs TabIndicatorProps={{ style: { background: '#63B338' } }} variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={<span style={{ color: value === 0 ? "#63B338" : "rgba(0, 0, 0, 0.4)" }}>Dikirim</span>} />
                            <Tab label={<span style={{ color: value === 1 ? "#63B338" : "rgba(0, 0, 0, 0.4)" }}>Selesai</span>} />
                        </Tabs>
                    </Box>
                    <TabPanel value={0} index={0} sx={{ padding: '16px' }}>
                        <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px', marginBottom: '24px' }}>
                            <CardRiwayatPesanan onClick={() => route.push("page-detail-transaksi")} />
                        </Box>
                        <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px' }}>
                            <CardRiwayatPesanan onClick={() => route.push("page-detail-transaksi")} />
                        </Box>
                    </TabPanel>
                    <TabPanel value={1} index={1} sx={{ padding: '16px' }}>
                        <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px', marginBottom: '24px' }}>
                            <CardRiwayatPesanan onClick={() => route.push("page-detail-transaksi")} />
                        </Box>
                        <Box sx={{ boxShadow: "0px 16px 24px #F2F2F2", borderRadius: '16px' }}>
                            <CardRiwayatPesanan onClick={() => route.push("page-detail-transaksi")} />
                        </Box>
                    </TabPanel>
                </TabContext>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}

export default withAuth(PageRiwayatPesanan)