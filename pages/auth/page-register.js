
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
import { usePost, usePostData, verifyCaptcha } from "../../helper/request";
import FlashMessage from "../../component/FlashMessage";
import Loading from "../../component/Loading";
import { useDispatch, useSelector } from "react-redux";
import { FILL_FORM_REGISTER } from "../../reducer/authReducer";
import { SITE_KEY } from "../../helper/const";
import { Box } from "@mui/system";
import { FILL_CAPTCHA } from "../../reducer/captchaReducer";

const recaptchaRef = React.createRef();

export default function PageRegister() {
    const { formRegisterReducer: { email, name, password, password_confirmation }, captchaReducer: { valid } } = useSelector(s => s)
    const [showCaptcha, setShowCaptcha] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const [func_register, res_register] = usePostData("register")
    const [_captcha] = verifyCaptcha()
    const [open, setOpen] = useState(false);
    const [name_reg] = useInputAuth("Masukkan Nama")
    const [email_reg] = useInputAuth("Masukkan Email")
    const [pass_reg] = useInputPassword("Masukkan Kata Sandi")
    const [pass_confirm_reg] = useInputPassword("Konfirmasi Kata Sandi")

    useEffect(() => {
        if (res_register.failed) {
            dispatch({
                type: FILL_CAPTCHA,
                value: false
            })
            recaptchaRef.current.reset()
            dispatch({
                type: FILL_FORM_REGISTER,
                data: res_register.error_res.data.errors
            })
            // setShowCaptcha(true)
            console.log("res_register : ", res_register.error_res.data.errors)
        }

        if (res_register.success) {
            dispatch({
                type: FILL_CAPTCHA,
                value: false
            })
            recaptchaRef.current.reset()
            // setShowCaptcha(false)
        }

    }, [res_register.failed, res_register.success])

    useEffect(() => {
        if (valid) {
            execute_register()
        }
    }, [valid])

    useEffect(() => {
        if (_captcha.success) {
            dispatch({
                type: FILL_CAPTCHA,
                value: true
            })
            // execute_register()
            _captcha.setSuccess(false)
        }
        console.log("_captcha : ", _captcha)
    }, [_captcha])
    useEffect(() => {
        console.log("email : ", email)
        email_reg.setError(email.error)
        email_reg.setErrorMessage(email.error_message)
        name_reg.setError(name.error)
        name_reg.setErrorMessage(name.error_message)
        pass_reg.setError(password.error)
        pass_reg.setErrorMessage(password.error_message)
        pass_confirm_reg.setError(password_confirmation.error)
        pass_confirm_reg.setErrorMessage(password_confirmation.error_message)
    }, [email.error, name.error, password.error, password_confirmation.error])
    useEffect(() => {
        console.log("open", open)
    }, [open])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function execute_register() {
        dispatch({
            type: FILL_FORM_REGISTER,
            data: {}
        })
        let par = {
            name: name_reg.value,
            email: email_reg.value,
            password: pass_reg.value,
            password_confirmation: pass_confirm_reg.value
        }
        if (valid) {
            func_register(par)
        }
    }

    function do_register() {
        return () => {
            // if (nama_value === '') {
            //     set_nama_error(true)
            // }

            // if (email_value === '') {
            //     set_email_error(true)
            // }

            // if (password_value === '') {
            //     set_password_error(true)
            // }

            // if (confirmation_password_value === '') {
            //     set_confirmation_password_error(true)
            // }
            dispatch({
                type: FILL_FORM_REGISTER,
                data: {}
            })
            let par = {
                name: name_reg.value,
                email: email_reg.value,
                password: pass_reg.value,
                password_confirmation: pass_confirm_reg.value
            }
            // func_register(par)
            // recaptchaRef.current.execute()

            if (name_reg.value !== '' && email_reg.value !== '' && pass_reg.value !== '' && pass_confirm_reg.value != '') {
                setShowCaptcha(true)
            }
            // if (nama_value !== '' && email_value !== '' && password_value !== '' && confirmation_password_value != '') {

            //     if (confirmation_password_value === password_value) {
            //         let par = {
            //             name: nama_value,
            //             email: email_value,
            //             password: password_value,
            //             password_confirmation: confirmation_password_value
            //         }
            //         func_register(par)
            //         console.log("par", par)
            //         set_password_error(false)
            //         set_confirmation_password_error(false)
            //     } else {
            //         set_password_error(true)
            //         set_confirmation_password_error(true)

            //     }


            // }


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
                    {name_reg.input}
                    <div style={{ height: 16 }} />
                    {email_reg.input}
                    <div style={{ height: 16 }} />
                    {pass_reg.input}
                    <div style={{ height: 16 }} />
                    {pass_confirm_reg.input}
                    <div style={{ height: 16 }} />
                    <Box sx={{ alignItems: 'center', justifyContent: "center", display: 'flex' }}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={SITE_KEY}
                            onChange={(e) => {
                                console.log("e : ", e)
                                _captcha.setCaptcha(e)
                            }}
                        />
                    </Box>
                    <Box sx={{ height: '24px' }} />
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

        </Contain>
    )
}