import React, { useEffect } from "react";
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
import { usePost } from "../../helper/request";
import useSWR from "swr";
import { fetcher } from "../../helper/meta";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { UPDATE_ACCESS_TOKEN } from "../../reducer/authReducer";
import { UPDATE_USER } from "../../reducer/userReducer";
import { useRouter } from "next/router";

export default function PageLogin() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [req_login, login_success_res, login_error_res, login_loading, login_success, login_failed, set_login_failed] = usePost()
    const [email_input, email_value] = useInputAuth("Email")
    const [pass_input, password_value] = useInputPassword("Password")


    function do_login() {
        return () => {
            let par = {
                identity: email_value,
                password: password_value
            }
            req_login(par, "login")
        }
    }

    useEffect(() => {
        if (login_success) {
            console.log("login_success_res", login_success_res.data.data)
            dispatch({
                type: UPDATE_ACCESS_TOKEN,
                access_token: login_success_res.data.data.access_token,
                token_type: login_success_res.data.data.token_type
            })

            dispatch({
                type: UPDATE_USER,
                user: login_success_res.data.data.user
            })

            router.back()
        }
    }, [login_success])
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
            <Snackbar
                open={login_failed}
                autoHideDuration={3000}
                onClose={() => set_login_failed(false)}
                message="Note archived"
            >
                <Alert onClose={() => set_login_failed(false)} severity="error" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={login_loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Contain>
    )
}