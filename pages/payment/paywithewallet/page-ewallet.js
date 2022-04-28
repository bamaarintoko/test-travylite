import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Header from "../../../component/Header";
import useQrCode from "../../../component/useQrCode";
import withAuth from "../../../component/withAuth";

export function PageEwallet() {
    const { payWithEwalletReducer: { e_wallet: { actions } } } = useSelector(s => s)
    const [qr] = useQrCode("")
    useEffect(() => {
        console.log("actions : ", actions)
        qr.setData(actions.qr_checkout_string)
    }, [])
    return (
        <Contain>
            <Header>
                <AppBar title={"Payment"} />
            </Header>
            <Content>
                {/* <iframe height={'812'} src={actions.mobile_web_checkout_url}/> */}
                {/* {
                    `${actions.mobile_web_checkout_url}`
                } */}
                {
                    actions.mobile_web_checkout_url !== null
                        ?
                        <iframe height={'812'} src={actions.mobile_web_checkout_url} />
                        :
                        qr.result
                }
            </Content>
        </Contain>
    )
}

export default withAuth(PageEwallet)