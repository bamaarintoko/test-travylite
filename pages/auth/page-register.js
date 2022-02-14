
import React from "react";
import { AppBar } from "../../component/AppBar";
import ButtonGradient from "../../component/Auth/ButtonGradient";
import ButtonLoginGoogle from "../../component/Auth/ButtonLoginGoogle";
import LineSeparator from "../../component/Auth/LineSeparator";
import useInputAuth from "../../component/Auth/useInputAuth";
import useInputPassword from "../../component/Auth/useInputPassword";
import BoxShadow from "../../component/BoxShadow";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import LogoAuth from "../../component/LogoAuth";
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function PageRegister() {
    const router = useRouter()
    const [nama_input, nama_value] = useInputAuth("Masukkan Nama")
    const [email_input, email_value] = useInputAuth("Masukkan Email")
    const [password_input, password_value] = useInputPassword("Masukkan Kata Sandi")
    const [confirmation_password_input, confirmation_password_value] = useInputPassword("Konfirmasi Kata Sandi")
    return (
        <Contain>
            <Header>
                <AppBar title={"Register"} />
            </Header>
            <Content>
                <LogoAuth />
                <BoxShadow style={{ padding: 16, margin: 16 }}>
                    {nama_input}
                    <div style={{ height: 16 }} />
                    {email_input}
                    <div style={{ height: 16 }} />
                    {password_input}
                    <div style={{ height: 16 }} />
                    {confirmation_password_input}
                    <div style={{ height: 16 }} />
                    <ButtonGradient title={"Daftar Sekarang"} />
                    <LineSeparator />
                    <ButtonLoginGoogle title={"Daftar Dengan Google"} />
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: 24 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)" }}>Sudah memiliki akun? <span onClick={() => router.back()} style={{ color: "#0065AF", fontWeight: 500 }}>Masuk</span></span>
                    </div>
                </BoxShadow>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}