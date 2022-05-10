import { Button, Grid, Stack, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILL_DESCRIPTION_PAKET, FILL_QUANTITY_PAKET, FILL_WEIGHT_PAKET } from "../reducer/formDocumentDetailPackage";
import { general_style } from "./general_style";
import useInputNumber from "./useInputNumber"
import useTextArea from "./useTextArea"

export default function DetailPaket({ status = false }) {
    const route = useRouter()
    const dispatch = useDispatch()

    const {
        formDocumentDetailPackage: {
            weight, quantity, description
        }
    } = useSelector(s => s)

    const [_weight] = useInputNumber("kg")
    const [_quantity] = useInputNumber("")
    const [_description] = useTextArea()

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                _weight.setError(weight.error)
                _quantity.setError(quantity.error)
                _description.setError(quantity.error)
            }, 100)
        }
    }, [status])

    // useEffect(() => {
    //     _weight.setError(weight.error)
    // }, [weight.error])

    useEffect(() => {
        dispatch({
            type: FILL_WEIGHT_PAKET,
            value: _weight.value
        })
    }, [_weight.value])

    useEffect(() => {
        dispatch({
            type: FILL_QUANTITY_PAKET,
            value: _quantity.value
        })
    }, [_quantity.value])

    useEffect(() => {
        dispatch({
            type: FILL_DESCRIPTION_PAKET,
            value: _description.value
        })
    }, [_description.value])

    // function on_confirm() {
    //     return () => {
    //         let par = {
    //             weight: weight.value,
    //             quantity: quantity.value,
    //             description: description.value
    //         }

    //         console.log("par", par)
    //     }
    // }
    return (
        <Box>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Stack>
                        <span style={general_style.heading_dark_bold}>Berat</span>
                        {_weight.input}
                    </Stack>
                    <Stack>
                        <span style={general_style.heading_dark_bold}>Jumlah</span>
                        {_quantity.input}
                    </Stack>
                </Stack>
                <span style={general_style.heading_dark_bold}>Deskripsi Bagasi</span>
                {_description.input}
            </Stack>
        </Box>
    )
}