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

export default function PageLogin() {
    const [email_input, email_value] = useInputAuth("Email")
    const [pass_input, password_value] = useInputPassword("Password")

    function do_login() {
        return () => {
            let par = {
                identity: email_value,
                password: password_value
            }

            console.log("par", par)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Login"} />
            </Header>
            <Content>
                <LogoAuth />
                <BoxShadow style={{ padding: 16, margin: 16 }}>
                    {email_input}
                    <div style={{ height: 16 }} />
                    {pass_input}
                    <div style={{ height: 34 }} />
                    <ButtonGradient onClick={do_login()} title={"Masuk"} />
                    <LineSeparator />
                    <ButtonLoginGoogle title={"Masuk Dengan Google"} />
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: 24 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)" }}>Jika kamu lupa sandi tekan <Link href={"/auth/page-reset-password"}><span style={{ color: "#0065AF", fontWeight: 500 }}>Disini</span></Link></span>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: 10 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)" }}>Belum punya akun? <Link href={"/auth/page-register"}><span style={{ color: "#0065AF", fontWeight: 500 }}>Daftar</span></Link></span>
                    </div>
                </BoxShadow>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}