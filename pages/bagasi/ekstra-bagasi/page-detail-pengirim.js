import { Alert, Backdrop, Button, CircularProgress, Container, Grid, Input, Snackbar, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import useInputSelect from '../../../component/useInputSelect';
import useInput from '../../../component/useInput';
import useTextArea from '../../../component/useTextArea';
import { useEffect } from 'react';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Content from '../../../component/Content';
import Footer from '../../../component/Footer';
import { AppBar } from '../../../component/AppBar';
import withAuth from '../../../component/withAuth';
import RegionShipper from '../../../component/RegionShipper';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { FILL_ERROR_SHIPPER, SET_DATA_SHIPPER, UPDATE_ERROR_SHIPPER } from '../../../reducer/customerReducer';
import { usePost } from '../../../helper/request';
import FormShipper from '../../../component/FormShipper';
import FlashMessage from '../../../component/FlashMessage';
// import Region from '../../../component/RegionRecipient';
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
function PageDetailPengirim() {
    const route = useRouter()
    const dispatch = useDispatch()
    const {
        dataShipper: {
            gender_shipper, name_shipper, phone_shipper, email_shipper, email_confirmation_shipper, address_shipper
        },
        customerReducer: {
            shipper,
            shipper_zone: {
                province_shipper, city_shipper, district_shipper, subdistrict_shipper, district_code_shipper }
        },
        zoneShipper: {
            villages
        }
    } = useSelector(s => s)

    const [func_validate, res_validate] = usePost()

    useEffect(() => {
        if (res_validate.success) {
            route.push("page-detail-bagasi")
        }

        if (res_validate.failed) {
            console.log("res_validate", res_validate)
            dispatch({
                type: FILL_ERROR_SHIPPER,
                errors: res_validate.error_res.data.errors
            })
            dispatch({
                type: UPDATE_ERROR_SHIPPER,
                errors: res_validate.error_res.data.errors
            })
        }
    }, [res_validate.success, res_validate.failed])

    function on_confirm() {
        return () => {
            // console.log("villages", villages)
            // console.log("shipper_zone", shipper_zone)
            // const code = villages.filter((dc) => dc.id === shipper_zone.subdistrict_shipper)
            // console.log("code", code[0].district_code)
            let par = {
                gender_shipper: gender_shipper.value,
                name_shipper: name_shipper.value,
                email_shipper: email_shipper.value,
                phone_shipper: phone_shipper.value,
                address_shipper: address_shipper.value,
                province_shipper: province_shipper.value,
                city_shipper: city_shipper.value,
                district_shipper: district_shipper.value,
                subdistrict_shipper: subdistrict_shipper.value,
                district_code_shipper: district_code_shipper.value
            }
            console.log("par", par)
            func_validate(par, "extra-baggage/step-detail-shipper")
            // Object.keys(shipper).map((x, y) => {
            //     console.log("x", shipper[x])
            // })
            // console.log("===>", villages)
            // console.log("par", par)
        }
    }

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormShipper status={res_validate.failed} />
                    <Divider />
                    <RegionShipper />
                    <Divider />
                </Stack>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    sx={{ backgroundColor: "#0065AF", borderRadius: "16px" }}
                    // onClick={() => route.push("page-detail-bagasi")}
                    onClick={on_confirm()}
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

export function Label({ title = "" }) {
    return (
        <span className={styles.text_label}>{title} <span style={{ color: "#e84a25" }}>*</span></span>
    )
}

export const Divider = () => {
    return <div style={{ height: 24 }} />
}

export default withAuth(PageDetailPengirim)