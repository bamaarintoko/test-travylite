import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Footer from "../../../component/Footer";
import FormRecipient from "../../../component/FormRecipient";
import FormShipper from "../../../component/FormShipper";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import Loading from "../../../component/Loading";
import RegionRecipient from "../../../component/RegionRecipient";
import withAuth from "../../../component/withAuth";
import useBeautyAlert from "../../../custom_hook/useBeautyAlert";
import { usePostData } from "../../../helper/request";
import { UPDATE_ERROR_RECEIVER, UPDATE_VALUE_RECEIVER } from "../../../reducer/dataReceiver";
import { UPDATE_ERROR_SHIPPER } from "../../../reducer/dataShipper";
import { Divider, Label } from "./page-detail-pengirim";

function PageInputCustomer() {
    const {
        multilingual: { words },
        boothTravyliteReducer: { selected_booth },
        dataShipper,
        dataReceiver
    } = useSelector(s => s)
    const [func_validate_customer, res_validate_customer] = usePostData("extra-baggage/step-detail-customer")
    const [msg] = useBeautyAlert()
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        if (res_validate_customer.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(res_validate_customer.error_res.data.message)
            dispatch({
                type: UPDATE_ERROR_RECEIVER,
                errors: res_validate_customer.error_res.data.errors
            })
            dispatch({
                type: UPDATE_ERROR_SHIPPER,
                errors: res_validate_customer.error_res.data.errors
            })
        }

        if (res_validate_customer.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(res_validate_customer.success_res.message)
            router.push("page-detail-bagasi")
        }
        console.log("res_validate_customer : ", res_validate_customer)
    }, [res_validate_customer.success, res_validate_customer.failed])

    function on_validate() {
        return () => {
            const { gender_shipper, name_shipper, phone_shipper, email_shipper, port_id } = dataShipper
            const { gender_receiver, name_receiver, phone_receiver, address_receiver, province_receiver, city_receiver, district_receiver, subdistrict_receiver, district_code_receiver } = dataReceiver
            let par = {
                gender_shipper: gender_shipper.value,
                name_shipper: name_shipper.value,
                email_shipper: email_shipper.value,
                phone_shipper: phone_shipper.value,
                port_id: port_id.value,
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
            console.table(par)
            func_validate_customer(par)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={'Data Customer'} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    {/* <Box sx={{
                        display: 'flex',

                        alignItems: 'center',
                        justifyContent: 'center',
                        // background:'red',
                        height: '40px',
                        marginBottom: '16px'
                    }}>
                        <span style={general_style.title_dark_bold}>{words.sender_details}</span>
                    </Box> */}

                    <HeadingWrap>
                        <span style={general_style.title_dark_bold}>{words.sender_details}</span>
                    </HeadingWrap>
                    <FormShipper />
                    <Box sx={{ height: '16px' }} />
                    <Stack direction={'row'}>
                        <Box sx={{ flex: 1 }}>
                            <Label title={"Lokasi Bandara"} />
                        </Box>
                        {
                            selected_booth.id
                            &&
                            <Box onClick={() => router.push("/airport/page-airports")}>
                                <span style={general_style.heading_light}>Ganti Lokasi</span>
                            </Box>
                        }
                    </Stack>
                    <Box sx={{ height: '8px' }} />
                    {
                        selected_booth.id
                            ?
                            <Stack>
                                <span style={general_style.heading_dark_bold}>{selected_booth.port_name}</span>
                                <span style={general_style.heading_dark}>{selected_booth.description}</span>
                                <span style={general_style.heading_dark}>{selected_booth.address}</span>
                            </Stack>
                            :
                            <Box onClick={() => router.push("/airport/page-airports")} sx={{
                                height: '100px',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderRadius: '8px',
                                borderColor: 'grey',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex'
                            }}>
                                <span style={general_style.heading_dark}>-- pilih lokasi bandara --</span>
                            </Box>
                    }
                    {
                        dataShipper.port_id.error
                        &&
                        <span style={general_style.error_message}>{dataShipper.port_id.error_message}</span>
                    }
                    <Box sx={{ height: '16px' }} />
                    <HeadingWrap>
                        <span style={general_style.title_dark_bold}>{words.recipient_details}</span>
                    </HeadingWrap>
                    <FormRecipient />
                    <Box sx={{ height: '16px' }} />
                    <RegionRecipient />
                    <Box sx={{ height: '48px' }} />
                </Stack>
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    onClick={on_validate()}
                    // onClick={() => router.push("page-detail-bagasi")}
                    sx={general_style.primary_button}
                    fullWidth
                    variant="contained"
                >
                    {words.confirmation}
                </Button>
            </Footer>
            {msg.alert}
            <Loading loading={res_validate_customer.loading} />
        </Contain>
    )

}

export const HeadingWrap = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
            // background:'red',
            height: '40px',
            marginBottom: '16px'
        }}>
            {children}
        </Box>
    )
}

export default withAuth(PageInputCustomer)