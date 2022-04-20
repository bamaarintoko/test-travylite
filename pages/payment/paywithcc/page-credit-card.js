import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { AppBar } from "../../../component/AppBar";
import Contain from "../../../component/Container";
import Content from "../../../component/Content";
import Header from "../../../component/Header";
import withAuth from "../../../component/withAuth";

function PageCreditCard() {

    const { payWithCreditCardReducer: { value } } = useSelector(s => s)
    return (
        <Contain>
            <Header>
                <AppBar title={"Credit Card"} />
            </Header>
            <Content>
                <Box fullwidth dangerouslySetInnerHTML={{ __html: value }} />
            </Content>
        </Contain>
    )
}

export default withAuth(PageCreditCard)