import React, { useEffect } from 'react';
import { Button, Stack } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { Divider } from './page-detail-pengirim';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import Content from '../../../component/Content';
import { AppBar } from '../../../component/AppBar';
import withAuth from "../../../component/withAuth";
import { useRouter } from 'next/router';
import RegionRecipient from '../../../component/RegionRecipient';
import FormRecipient from '../../../component/FormRecipient';
import useReceiverValidation from '../../../custom_hook/useReceiverValidation';
import useBeautyAlert from '../../../custom_hook/useBeautyAlert';
import Loading from '../../../component/Loading';
function PageDetailPenerima() {
    const { multilingual: { words } } = useSelector(s => s)
    const [receiver] = useReceiverValidation("extra-baggage/step-detail-receiver")
    const [msg] = useBeautyAlert()
    const route = useRouter()

    useEffect(() => {
        if (receiver.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(receiver.error_response.message)
        }

        if (receiver.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(receiver.success_response.message)
            route.push("page-detail-pengirim")
        }
    }, [receiver.success, receiver.failed])

    function on_confirm() {
        return () => {
            receiver.on_validate()
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={words.recipient_details} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormRecipient />
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
                    {words.confirmation}
                </Button>
            </Footer>
            {msg.alert}
            <Loading loading={receiver.loading} />
        </Contain>
    )
}

export default withAuth(PageDetailPenerima)