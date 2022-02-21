import React, { useEffect } from "react";
import Contain from "../../component/Container"
import Header from "../../component/Header"
import Content from "../../component/Content"
import Footer from "../../component/Footer"
import { AppBar } from "../../component/AppBar"
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

export default function PageRiwayatPesanan() {
    const [value, setValue] = React.useState(0);
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
                        <Tabs TabIndicatorProps={{ style: { background: '#63B338', color: "green" } }} variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={<span style={{ color: value === 0 ? "#63B338" : "rgba(0, 0, 0, 0.4)" }}>Dikirim</span>} />
                            <Tab label={<span style={{ color: value === 1 ? "#63B338" : "rgba(0, 0, 0, 0.4)" }}>Selesai</span>} />
                        </Tabs>
                    </Box>
                    <TabPanel value={0} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={1} index={1}>
                        Item Two
                    </TabPanel>
                </TabContext>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}