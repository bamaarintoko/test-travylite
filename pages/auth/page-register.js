
import React, { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
import { usePost, usePostData } from "../../helper/request";
import FlashMessage from "../../component/FlashMessage";
import Loading from "../../component/Loading";
export default function PageRegister() {

    // const [func_register, reg_success_res, reg_error_res, reg_loading, reg_success, reg_failed, set_reg_failed] = usePost()
    const [func_register, res_register] = usePostData("register")
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [nama_input, nama_value, set_nama_error] = useInputAuth("Masukkan Nama")
    const [email_input, email_value, set_email_error] = useInputAuth("Masukkan Email")
    const [password_input, password_value, set_password_error] = useInputPassword("Masukkan Kata Sandi")
    const [confirmation_password_input, confirmation_password_value, set_confirmation_password_error] = useInputPassword("Konfirmasi Kata Sandi")

    useEffect(() => {
        console.log("res_register", res_register)
    }, [res_register.failed])

    useEffect(() => {
        console.log("open", open)
    }, [open])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function do_register() {
        return () => {
            if (nama_value === '') {
                set_nama_error(true)
            }

            if (email_value === '') {
                set_email_error(true)
            }

            if (password_value === '') {
                set_password_error(true)
            }

            if (confirmation_password_value === '') {
                set_confirmation_password_error(true)
            }

            if (nama_value !== '' && email_value !== '' && password_value !== '' && confirmation_password_value != '') {

                if (confirmation_password_value === password_value) {
                    let par = {
                        name: nama_value,
                        email: email_value,
                        password: password_value,
                        password_confirmation: confirmation_password_value
                    }
                    func_register(par)
                    console.log("par", par)
                    set_password_error(false)
                    set_confirmation_password_error(false)
                } else {
                    set_password_error(true)
                    set_confirmation_password_error(true)

                }


            }


        }
    }
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
                    <ButtonGradient onClick={do_register()} title={"Daftar Sekarang"} />
                    <LineSeparator />
                    <ButtonLoginGoogle onClick={() => setOpen(true)} title={"Daftar Dengan Google"} />
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: 24 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)" }}>Sudah memiliki akun? <span onClick={() => router.back()} style={{ color: "#0065AF", fontWeight: 500 }}>Masuk</span></span>
                    </div>
                </BoxShadow>
            </Content>
            <Footer>

            </Footer>
            <FlashMessage arg={res_register} />
            <Loading loading={res_register.loading} />
            {/* <Snackbar
                open={reg_failed}
                autoHideDuration={3000}
                onClose={() => set_reg_failed(false)}
                message="Note archived"
            >
                <Alert onClose={() => set_reg_failed(false)} severity="error" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={reg_loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </Contain>
    )
}