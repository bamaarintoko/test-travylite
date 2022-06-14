import { Backdrop, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Input, Radio, Stack, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import Contain from '../../../component/Container'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputNumber from '../../../component/useInputNumber';
import useTextArea from '../../../component/useTextArea';
import { AppBar } from '../../../component/AppBar';
import Header from '../../../component/Header';
import Content from '../../../component/Content';
import Footer from '../../../component/Footer';
import Link from 'next/link'
import withAuth from '../../../component/withAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILL_DESCRIPTION, FILL_ERROR, FILL_FREE_WRAPPING, FILL_HEIGHT, FILL_LENGTH, FILL_QUANTITY, FILL_WEIGHT, FILL_WIDTH } from '../../../reducer/formExtraBaggageDetailLuggage';
import { usePost } from '../../../helper/request';
import FlashMassage from '../../../component/FlashMessage';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import { general_style } from '../../../component/general_style';
import { FILL_GENERAL_PACKAGE } from '../../../reducer/generalPackage';
function PageDetailBagasi() {
    const route = useRouter()
    const dispatch = useDispatch()
    const {
        formExtraBaggageDetailLuggage: {
            free_wrapping, insurance, length, width, height, weight, quantity, description
        },
        multilingual: {
            words
        }
    } = useSelector(s => s)

    const [func_validate, res_validate] = usePost()
    const [free_wrap, set_free_wrap] = useState("")
    const [is_insurance, set_insurance] = useState("")
    const [length_arg] = useInputNumber("cm")
    const [width_arg] = useInputNumber("cm")
    const [height_arg] = useInputNumber("cm")
    const [weight_arg] = useInputNumber("gr")
    const [quantity_arg] = useInputNumber(" ")
    const [desc] = useTextArea()

    useEffect(() => {
        set_free_wrap(free_wrapping.value)
        length_arg.setValue(length.value)
        width_arg.setValue(width.value)
        height_arg.setValue(height.value)
        weight_arg.setValue(weight.value)
        quantity_arg.setValue(quantity.value)
        desc.setValue(description.value)
    }, [])

    // useEffect(() => {
    //     if (res_validate.failed) {
    //         set_panjang_error(length.error)
    //         set_lebar_error(width.error)
    //         set_tinggi_error(height.error)
    //         set_berat_error(weight.error)
    //         set_jumlah_error(quantity.error)
    //         desc.setError(description.error)
    //         console.log("free_wrapping.value", description.error)
    //     }
    //     // }, [free_wrapping.error, length.error, width.error, height.error, weight.error, quantity.error, description.error])
    // }, [res_validate.failed])
    useEffect(() => {
        dispatch({
            type: FILL_FREE_WRAPPING,
            free_wrapping: free_wrap
        })
        dispatch({
            type: FILL_LENGTH,
            length: length_arg.value
        })
        dispatch({
            type: FILL_WIDTH,
            width: width_arg.value
        })
        dispatch({
            type: FILL_HEIGHT,
            height: height_arg.value
        })
        dispatch({
            type: FILL_WEIGHT,
            weight: weight_arg.value
        })
        dispatch({
            type: FILL_QUANTITY,
            quantity: quantity_arg.value
        })
        dispatch({
            type: FILL_DESCRIPTION,
            description: desc.value
        })
    }, [length_arg.value, width_arg.value, height_arg.value, weight_arg.value, quantity_arg.value, desc.value, free_wrap])

    useEffect(() => {
        console.log("res_validate", res_validate)
        if (res_validate.success) {
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: "weight",
                value: weight.value
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: "quantity",
                value: quantity.value
            })
            dispatch({
                type: FILL_GENERAL_PACKAGE,
                name: "desc",
                value: description.value
            })
            route.push("/kurir/page-pilihan-pengiriman")
        }
    }, [res_validate.success])

    useEffect(() => {
        if (res_validate.failed) {
            console.log("res_validate", res_validate)
            dispatch({
                type: FILL_ERROR,
                errors: res_validate.error_res.data.errors
            })
            length_arg.setError(length.error)
            width_arg.setError(width.error)
            height_arg.setError(height.error)
            weight_arg.setError(weight.error)
            quantity_arg.setError(quantity.error)
            desc.setError(description.error)
            console.log("useEffect free_wrapping.value", description.error)

        }
    }, [res_validate.failed])
    function on_confirm() {
        return () => {
            let par = {
                free_wrapping: free_wrapping.value,
                length: length.value,
                width: width.value,
                height: height.value,
                weight: weight.value,
                quantity: quantity.value,
                description: description.value
            }
            func_validate(par, "extra-baggage/step-detail-baggage")
            console.log("par", par)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={words.baggage_details} />
            </Header>
            <Content style={{ padding: 16 }}>
                <span style={general_style.heading_dark_bold}>{words.do_you_need_free_wrapping}</span>
                {
                    free_wrapping.error && <span style={general_style.error_message}>{free_wrapping.error_message}</span>
                }
                <Stack direction={'row'}>
                    <Box sx={{ width: '50px' }}>
                        <Radio
                            error
                            checked={free_wrap === 'yes'}
                            onChange={(e) => set_free_wrap(e.target.value)}
                            value="yes"
                            name="radio-buttons"
                        // inputProps={{ 'aria-label': 'A' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={general_style.heading_light}>{words.yes_i_need_free_wrapping}</span>
                    </Box>
                </Stack>
                <Stack direction={'row'}>
                    <Box sx={{ width: '50px' }}>
                        <Radio
                            checked={free_wrap === 'no'}
                            onChange={(e) => set_free_wrap(e.target.value)}
                            value="no"
                            name="radio-buttons"
                        // inputProps={{ 'aria-label': 'A' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={general_style.heading_light}>{words.no_i_dont_need_free_wrapping}</span>
                    </Box>
                </Stack>

                <Box sx={{ height: '24px' }} />
                <span style={general_style.heading_dark_bold}>Asuransi</span>
                <Stack direction={'row'}>
                    <Checkbox name={'insurance'} onChange={(e) => console.log(e.target.name, "e : ", e.target.checked)} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={general_style.heading_light}>Asuransikan bagasi saya</span>
                    </Box>
                </Stack>

                <Box sx={{ height: '24px' }} />
                <span style={general_style.heading_dark_bold}>{words.your_luggage_or_box_size}</span>
                <span style={general_style.heading_light}>{words.maximum_dimensions_of_luggage_or_box}</span>
                <Box sx={{ height: '24px' }} />
                <span style={general_style.heading_dark_bold}>{words.enter_the_dimensions_of_your_luggage_or_box}</span>
                <Stack direction={'row'} spacing={2} sx={{ marginTop: '24px' }}>
                    <Box sx={{ flex: 1 }}>
                        <span style={length_arg.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.length}</span>
                        {length_arg.input}
                        {/* <span style={general_style.error_message}>required</span> */}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <span style={width_arg.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.width}</span>
                        {width_arg.input}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <span style={height_arg.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.height}</span>
                        {height_arg.input}
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={{ marginTop: '24px' }}>
                    <Box sx={{ flex: 1 }}>
                        <span style={weight_arg.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.weight}</span>
                        {weight_arg.input}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <span style={quantity_arg.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.amount}</span>
                        {quantity_arg.input}
                    </Box>
                </Stack>
                <Box sx={{ height: 24 }} />
                <span style={desc.error ? general_style.heading_dark_bold_error : general_style.heading_dark_bold}>{words.luggage_or_box_description}</span>
                {desc.input}
                <Box sx={{ height: 24 }} />
            </Content>
            <Footer style={{ padding: 16 }}>
                {/* "/kurir/page-pilihan-pengiriman" */}
                <Button
                    onClick={on_confirm()}
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    fullWidth
                    variant="contained"
                >
                    {words.add}
                </Button>
            </Footer>
            <FlashMassage arg={res_validate} />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={res_validate.loading}
            >
                <CircularProgress color={"inherit"} />
            </Backdrop>
        </Contain>
    )
}

export default withAuth(PageDetailBagasi)