import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import FlashMessage from "../../../component/FlashMessage";
import Footer from "../../../component/Footer";
import { general_style } from "../../../component/general_style";
import Header from "../../../component/Header";
import Loading from "../../../component/Loading";
import useInputNumber from "../../../component/useInputNumber";
import withAuth from "../../../component/withAuth";
import { usePostData } from "../../../helper/request";
import { FILL_E_WALLET } from "../../../reducer/payWithEwalletReducer";

function PagePhoneNumber() {
    const dispatch = useDispatch()
    const route = useRouter()
    const {
        paymentSummaryReducer: { data },
        paymentMethodReducer: { method, group }
    } = useSelector(s => s)

    const [func_create_payment, res_create_payment] = usePostData("payment/create-payment")
    const [form_phone] = useInputNumber("")

    useEffect(() => {
        if (res_create_payment.failed) {
            console.log("res_create_payment : ", res_create_payment)
        }
        if (res_create_payment.success) {
            dispatch({
                type: FILL_E_WALLET,
                value: res_create_payment.success_res.data
            })
            route.push("paywithewallet/page-ewallet")
        }
    }, [res_create_payment.failed, res_create_payment.success])

    function create_payment() {
        return () => {
            let par = {
                orderId: data.order_id,
                name: group,
                code: method.code,
                transaction_fee: method.payment.transaction_fee,
                tax_amount: method.payment.tax_amount,
                phone: form_phone.value

            }
            func_create_payment(par)
            console.log("par : ", par)
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"OVO"} />
            </Header>
            <Content>
                <Stack sx={{ padding: '16px' }}>
                    <span style={general_style.body_dark_bold}>Masukkan no hp</span>
                    {form_phone.input}
                </Stack>
            </Content>
            <Footer>
                <Box sx={{ padding: '16px', flex: 1 }}>
                    <Button onClick={create_payment()} disabled={!form_phone.value} fullWidth variant="contained" sx={general_style.primary_button}>
                        lanjutkan
                    </Button>
                </Box>
            </Footer>
            <FlashMessage arg={res_create_payment} />
            <Loading loading={res_create_payment.loading} />
        </Contain>
    )
}

export default withAuth(PagePhoneNumber)