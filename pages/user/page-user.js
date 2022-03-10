import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import withAuth from "../../component/withAuth";
import { DESTROY_ACCESS_TOKEN } from "../../reducer/authReducer";
import { DESTROY_USER } from "../../reducer/userReducer";

function PageUser() {
    const route = useRouter()
    const dispatch = useDispatch()
    function do_logout() {
        return () => {
            route.back()
            dispatch({
                type: DESTROY_USER
            })
            dispatch({
                type: DESTROY_ACCESS_TOKEN
            })
        }
    }
    return (
        <Contain>
            <Header>
                <AppBar title={"Profil"} />
            </Header>
            <Content>

            </Content>
            <Footer style={{ padding: 16 }}>
                <Button onClick={do_logout()} fullWidth variant="contained" color="error">LOG OUT</Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageUser)