import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../../component/AppBar";
import BoothTravylite from "../../component/BoothTravylite";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import { general_style } from "../../component/general_style";
import Header from "../../component/Header";
import withAuth from "../../component/withAuth";
import { UPDATE_VALUE_RECEIVER } from "../../reducer/dataReceiver";
import { UPDATE_VALUE_SHIPPER } from "../../reducer/dataShipper";

function PageAirports() {
    const { boothTravyliteReducer: { selected_booth } } = useSelector(s => s)
    const router = useRouter()
    const dispatch = useDispatch()
    // function choose_airport() {
    //     return () => {
    //         console.log("selected_booth : ", selected_booth)
    //     }
    // }

    useEffect(() => {
        const { id } = selected_booth
        dispatch({
            type: UPDATE_VALUE_SHIPPER,
            field: 'port_id',
            value: id

        })
    }, [selected_booth])
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