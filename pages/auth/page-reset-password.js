import React from "react";
import { AppBar } from "../../component/AppBar";
import ButtonGradient from "../../component/Auth/ButtonGradient";
import useInputAuth from "../../component/Auth/useInputAuth";
import BoxShadow from "../../component/BoxShadow";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import LogoAuth from "../../component/LogoAuth";

export default function PageResetPassword() {
    const [_email] = useInputAuth("Masukkan Email")
    return (
        <Contain>
            <Header>
                <AppBar title={"Reset Kata Sandi"} />
            </Header>
            <Content>
                <LogoAuth />
                <BoxShadow style={{ padding: 16, margin: 16 }}>
                {_email.input}
                    <div style={{ height: 16 }} />
                    <ButtonGradient title={"Reset Kata Sandi"}/>
                </BoxShadow>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}