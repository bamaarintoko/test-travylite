import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { AppBar } from "../../component/AppBar";
import BoothTravylite from "../../component/BoothTravylite";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import withAuth from "../../component/withAuth";

function PageAirports() {
    const router = useRouter()
    return (
        <Contain>
            <Header>
                <AppBar title={"Airports"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <BoothTravylite />
            </Content>
            <Footer style={{ padding: 16 }}>
                <Button
                    onClick={() => router.back()}
                    fullWidth
                    variant="contained"
                    sx={general_style.primary_button}
                >
                    Pilih Airport
                </Button>
            </Footer>
        </Contain>
    )
}

export default withAuth(PageAirports)