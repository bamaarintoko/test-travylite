import React, { useEffect } from 'react';
import { Alert, Backdrop, Button, CircularProgress, Container, Grid, Input, Snackbar, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputSelect from '../../../component/useInputSelect';
import useInput from '../../../component/useInput';
import { Divider, Label } from './page-detail-pengirim';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import Content from '../../../component/Content';
import useTextArea from '../../../component/useTextArea';
import Link from 'next/link'
import { AppBar } from '../../../component/AppBar';
import withAuth from "../../../component/withAuth";
import { useRouter } from 'next/router';
import RegionRecipient from '../../../component/RegionRecipient';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { FILL_ADDRESS_RECIPIENT, FILL_ERROR_RECIPIENT, FILL_GENDER_RECIPIENT, FILL_NAME_RECIPIENT, FILL_PHONE_RECIPIENT, SET_DATA_RECEIVER, UPDATE_ERROR_RECEIVER } from '../../../reducer/customerReducer';
import { usePost } from "../../../helper/request"
import FormRecipient from '../../../component/FormRecipient';
import FlashMessage from '../../../component/FlashMessage';
const arr = [
    {
        id: "mr",
        name: "Mr"
    },
    {
        id: "mrs",
        name: "Mrs"
    }
]
function PageDetailPenerima() {
    const dispatch = useDispatch()
    const {
        dataReceiver: {
            gender_receiver, name_receiver, phone_receiver, address_receiver
        },
        customerReducer: {
            recipient, recipient_zone: {
                province_receiver, city_receiver, district_receiver, subdistrict_receiver, district_code_receiver
            }
        },
        zoneRecipient: {
            villages
        }
    } = useSelector(s => s)

    const [func_validate, res_validate] = usePost()
    const route = useRouter()

    useEffect(() => {
        if (res_validate.success) {
            route.push("page-detail-pengirim")
        }

        if (res_validate.failed) {
            dispatch({
                type: FILL_ERROR_RECIPIENT,
                errors: res_validate.error_res.data.errors
            })

            dispatch({
                type: UPDATE_ERROR_RECEIVER,
                errors: res_validate.error_res.data.errors
            })
        }
    }, [res_validate.success, res_validate.failed])

    function on_confirm() {
        return () => {
            // const code = villages.filter((dc) => dc.id === recipient_zone.subdistrict_recipient)
            let par = {
                gender_receiver: gender_receiver.value,
                name_receiver: name_receiver.value,
                phone_receiver: phone_receiver.value,
                address_receiver: address_receiver.value,
                province_receiver: province_receiver.value,
                city_receiver: city_receiver.value,
                district_receiver: district_receiver.value,
                subdistrict_receiver: subdistrict_receiver.value,
                district_code_receiver: district_code_receiver.value
            }
            func_validate(par, "extra-baggage/step-detail-receiver")
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Penerima"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormRecipient status={res_validate.failed} />
                    <Divider />
                    <RegionRecipient />
                </Stack>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    // onClick={() => route.push("page-detail-pengirim")}
                    onClick={on_confirm()}
                    sx={{ backgroundColor: '#0065AF', borderRadius: '16px' }}
                    fullWidth
                    loadingPosition="start"
                    variant="contained"
                >
                    KONFIRMASI
                </Button>
            </Footer>
            <FlashMessage arg={res_validate} />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={res_validate.loading}
            >
                <CircularProgress color={"inherit"} />
            </Backdrop>
        </Contain>
    )
}

export default withAuth(PageDetailPenerima)