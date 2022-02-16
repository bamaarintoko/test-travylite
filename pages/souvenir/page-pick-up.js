import { Button } from "@mui/material";
import React from "react";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

export default function PagePickUp() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Pick-Up"} />
            </Header>
            <Content>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Button sx={{
                    backgroundColor: '#0065AF',
                    borderRadius: '16px'
                }} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}