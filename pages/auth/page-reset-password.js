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
    const [email_input, email_value] = useInputAuth("Masukkan Email")
    return (
        <Contain>
            <Header>
                <AppBar title={"Reset Kata Sandi"} />
            </Header>
            <Content>
                <LogoAuth />
                <BoxShadow style={{ padding: 16, margin: 16 }}>
                {email_input}
                    <div style={{ height: 16 }} />
                    <ButtonGradient title={"Reset Kata Sandi"}/>
                </BoxShadow>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}