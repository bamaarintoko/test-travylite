import { Button, Stack } from '@mui/material'
import styles from '../../../styles/PageEkstraBagasi.module.css';
import { useEffect } from 'react';
import Contain from '../../../component/Container';
import Header from '../../../component/Header';
import Content from '../../../component/Content';
import Footer from '../../../component/Footer';
import { AppBar } from '../../../component/AppBar';
import withAuth from '../../../component/withAuth';
import RegionShipper from '../../../component/RegionShipper';
import { useRouter } from 'next/router';
import { usePost } from '../../../helper/request';
import FormShipper from '../../../component/FormShipper';
import useShipperValidation from '../../../custom_hook/useShipperValidation';
import useBeautyAlert from '../../../custom_hook/useBeautyAlert';
import Loading from '../../../component/Loading';
function PageDetailPengirim() {
    const [shipper] = useShipperValidation("extra-baggage/step-detail-shipper")
    const [msg] = useBeautyAlert()
    const route = useRouter()

    useEffect(() => {
        if (shipper.failed) {
            msg.setSeverity("error")
            msg.setOpen(true)
            msg.setMessage(shipper.error_response.message)
        }

        if (shipper.success) {
            msg.setSeverity("success")
            msg.setOpen(true)
            msg.setMessage(shipper.success_response.message)
            route.push("page-detail-bagasi")
        }
    }, [shipper.success, shipper.failed])

    function on_confirm() {
        return () => {
            shipper.on_validate()
        }
    }

    return (
        <Contain>
            <Header>
                <AppBar title={"Detail Pengirim"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Stack spacing={0}>
                    <FormShipper status={false} />
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
            {msg.alert}
            <Loading loading={shipper.loading} />
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