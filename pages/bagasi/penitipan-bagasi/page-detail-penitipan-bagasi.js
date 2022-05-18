import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import Header from "../../../component/Header";
import useInputNumber from "../../../component/useInputNumber";
import useTextArea from "../../../component/useTextArea";
import styles from "../../../styles/General.module.css"
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import Link from "next/link"
import { general_style } from "../../../component/general_style";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../../component/withAuth";
import useGeneralInput from "../../../custom_hook/useGeneralInput";
import { FILL_FORM_DETAIL_LUGGAGE, FILL_FORM_DETAIL_LUGGAGE_ERROR } from "../../../reducer/formLeftBaggageDetailLuggage";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import { usePostData } from "../../../helper/request";
import Loading from "../../../component/Loading";
import { FILL_ITEM_ORDER_LEFT_BAGGAGE } from "../../../reducer/itemOrderLeftBaggage";
import { FILL_GENERAL_PACKAGE } from "../../../reducer/generalPackage";
import { Box, boxSizing } from "@mui/system";
import { Description } from "@mui/icons-material";

function PageDetailPenitipanBagasi() {
    const route = useRouter()
    const dispatch = useDispatch()
    const inputFile = useRef(null)
    const [msg] = useBeautyAlert()
    const { formLeftBaggageDetailLuggage:
        {
            weight, quantity, description
        }
    } = useSelector((state) => state)
    const [func_validate, validate_res] = usePostData("left-baggage/step-detail-baggage")
    const [_weight] = useInputNumber()
    const [_quantity] = useInputNumber("")
    const [_description] = useGeneralInput(true)

    const [image, setImage] = useState("")

    useEffect(() => {
        // error handling after validation
        _weight.setError(weight.error)
        _quantity.setError(quantity.error)
        _description.setError(description.error)

        _weight.setErrorMessage(weight.error_message)
        _quantity.setErrorMessage(quantity.error_message)
        _description.setErrorMessage(Description.error_message)
        console.log("gzzzzzzz")
    }, [weight.error, quantity.error, description.error])

    useEffect(() => {
        if (validate_res.success) {
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'weight',
                value: weight.value * 1000
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'quantity',
                value: quantity.value
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: 'desc',
                value: description.value
            })
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(validate_res.success_res.message)
            route.push("/kurir/page-pilihan-pengiriman")
        }

        if (validate_res.failed) {
            dispatch({
                type: FILL_FORM_DETAIL_LUGGAGE_ERROR,
                errors: validate_res?.error_res?.data?.errors ?? {}
            })
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(validate_res.error_res.data.message)
            // console.log("validate_res : ", validate_res)
        }
    }, [validate_res.success, validate_res.failed])

    useEffect(() => {
        _weight.setValue(weight.value)

        _quantity.setValue(quantity.value)
        _description.setValue(description.value)
    }, [])

    useEffect(() => {
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'weight',
            value: _weight.value
        })
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'quantity',
            value: _quantity.value
        })
        dispatch({
            type: FILL_FORM_DETAIL_LUGGAGE,
            name: 'description',
            value: _description.value
        })
    }, [_weight.value, _quantity.value, _description.value])

    function on_validate() {
        return () => {
            let par = {
                weight: weight.value,
                quantity: quantity.value,
                description: description.value
            }
            func_validate(par)
            console.log("par : ", par)
        }
    }
    useEffect(() => {
        console.log("inputFile : ", inputFile)
    })
    const handleFileUpload = e => {
        const { files } = e.target;
        console.log("files : ", files)
        if (files && files.length) {
            const filename = files[0].name;
            const reader = new FileReader()
            // const url = reader.readAsDataURL(files[0])
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
            console.log("url : ", URL.createObjectURL(files[0])); //ex: zip, rar, jpg, svg etc.
            setImage(URL.createObjectURL(files[0]))
            // setImage(files[0]);
        }
    };
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penitipan Bagasi"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Berat</span>
                                {_weight.input}
                            </Stack>
                            <Stack>
                                <span style={general_style.heading_dark_bold}>Jumlah</span>
                                {_quantity.input}
                            </Stack>
                        </Stack>
                        <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                        {_description.input}
                        <Box>
                            <input
                                style={{ display: "none" }}
                                // accept=".zip,.rar"
                                ref={inputFile}
                                onChange={handleFileUpload}
                                type="file"
                            />
                            {/* <TextField type={'file'} ref={inputFile} id="outlined-basic" label="Outlined" variant="outlined" /> */}
                        </Box>
                    </Stack>
                </Grid>
                <boxSizing style={{ height: 16 }} />
                <Grid item xs={12} md={12}>
                    <Box style={{ height: 16 }} />
                    <Box>
                        <span className={styles.text_normal_black}>Upload Foto Bagasi Anda</span>
                        <Box onClick={() => inputFile.current.click()} style={{ height: 132, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {
                                !image
                                &&
                                <AddAPhotoTwoToneIcon fontSize="large" sx={{ color: 'rgba(0, 0, 0, 0.3)' }} />
                            }
                            <Box
                                sx={{
                                    maxHeight: { xs: 132, md: 132 },
                                    maxWidth: { xs: 350, md: 250 }
                                }}
                                component="img"
                                src={image}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Content>
            {msg.alert}
            <Loading loading={validate_res.loading} />
            <Footer style={{ padding: 16 }}>
                <Button sx={general_style.primary_button} onClick={on_validate()} fullWidth variant="contained">Konfirmasi</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageDetailPenitipanBagasi)