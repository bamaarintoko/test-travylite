// import { AppBar } from "@mui/material";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import WarningIcon from '@mui/icons-material/Warning';
import SelectBooth from "../../../component/SelectBooth";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import withAuth from "../../../component/withAuth";
import BoothTravylite from "../../../component/BoothTravylite";

function PageDropOffDetail() {
    const [value, setValue] = useState("0")
    const route = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Drop-Off Detail"} />
            </Header>
            <Content>
                <Box sx={{ display: 'flex', justifyContent: 'center', height: 40, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
                    <span style={general_style.heading_dark_bold}>Merchant to Port</span>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                    <Stack spacing={2} direction={'row'} sx={{ background: 'linear-gradient(135deg, #FC6834 0%, #E84A25 100%)', padding: '16px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <WarningIcon sx={{ color: "#FFF" }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span style={general_style.heading_white}>
                                Penitipan di lokasi Drop-Off maksimal 1-2 hari
                            </span>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ padding: '16px' }}>
                    <BoothTravylite />
                </Box>
                {/* <Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: 40, backgroundColor: '#e0e0e0', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>Merchant to Port</span>
                    </Box>
                    <Box sx={{ marginTop: '10px' }}>
                        <Stack spacing={2} direction={'row'} sx={{ background: 'linear-gradient(135deg, #FC6834 0%, #E84A25 100%)', padding: '16px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <WarningIcon sx={{ color: "#FFF" }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <span style={general_style.heading_white}>
                                    Penitipan di lokasi Drop-Off maksimal 1-2 hari
                                </span>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack sx={{ padding: '16px' }} spacing={2}>
                            <SelectBooth initial_value={"1"} selected={value} onClick={() => setValue("1")} label={"Booth Travylite Check-in"} description={"Terminal 2E Bandara Soekarno-Hatta"} />
                            <SelectBooth initial_value={"2"} selected={value} onClick={() => setValue("2")} label={"Booth Travylite Check-in"} description={"Domestik Bandara Kualanamu"} />
                        </Stack>
                    </Box>
                </Stack> */}
            </Content>
            <Footer style={{ padding: 16, backgroundColor: "#FFF" }}>
                <Button onClick={() => route.push("page-detail-oleh-oleh")} startIcon={<AddIcon />} fullWidth sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }} variant="contained">Tambahkan</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDropOffDetail)