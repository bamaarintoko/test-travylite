import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import { FILL_ADDRESS_SHIPPER, FILL_EMAIL_CONFIRM_SHIPPER, FILL_EMAIL_SHIPPER, FILL_GENDER_SHIPPER, FILL_NAME_SHIPPER, FILL_PHONE_SHIPPER, SET_DATA_SHIPPER } from "../reducer/customerReducer";
import useInput from "./useInput";
import useInputSelect from "./useInputSelect";
import useTextArea from "./useTextArea";

const arr = [
    {
        id: "mr",
        name: "Mr"
    },
    {
        id: "mrs",
        name: "Mrs"
    }
]

export default function FormShipper({ status }) {
    const dispatch = useDispatch()
    const { customerReducer: { shipper, shipper_zone }, zoneShipper: { villages } } = useSelector(s => s)

    const [gelar] = useInputSelect()
    const [name] = useInput()
    const [phone] = useInput()
    const [email] = useInput()
    const [address] = useTextArea();
    const [email_confirm] = useInput()

    useEffect(() => {
        gelar.setData(arr)
        gelar.setValue(shipper.gender_shipper.value)
        // phone.setError(true)
        name.setValue(shipper.name_shipper.value)
        phone.setValue(shipper.phone_shipper.value)
        address.setValue(shipper.address_shipper.value)
        email_confirm.setValue(shipper.email_confirimation_shipper.value)
        email.setValue(shipper.email_shipper.value)
    }, [])

    useEffect(() => {
        dispatch({
            type: FILL_GENDER_SHIPPER,
            value: gelar.value
        })
        dispatch({
            type: FILL_NAME_SHIPPER,
            value: name.value
        })
        dispatch({
            type: FILL_EMAIL_SHIPPER,
            value: email.value

        })
        dispatch({
            type: FILL_EMAIL_CONFIRM_SHIPPER,
            value: email_confirm.value
        })
        dispatch({
            type: FILL_PHONE_SHIPPER,
            value: phone.value
        })
        dispatch({
            type: FILL_ADDRESS_SHIPPER,
            value: address.value
        })
    }, [gelar.value, name.value, phone.value, email.value, address.value, email_confirm.value])

    useEffect(() => {
        console.log("status", status)
        console.log("shipper.phone_shipper.error", shipper.phone_shipper.error)
        if (status) {
            console.log("shipper.phone_shipper.error", shipper.phone_shipper.error)
            name.setError(shipper.name_shipper.error)
            phone.setError(shipper.phone_shipper.error)
            email.setError(shipper.email_shipper.error)
            email_confirm.setError(shipper.email_confirimation_shipper.error)
            address.setError(shipper.address_shipper.error)
        }
    }, [status])

    return (
        <Stack>
            <Label title={"Gelar & Nama Lengkap Pengirim"} />
            <Stack direction="row" spacing={1}>
                <Box sx={{ width: '72px' }}>
                    {gelar.select}
                </Box>
                {name.input}
            </Stack>
            <Divider />
            <Label title={"Nomor Telepon Pengirim"} />
            {phone.input}
            <Divider />
            <Label title={"Email Pengirim"} />
            {email.input}
            <Divider />
            <Label title={"Konfirmasi Email Pengirim"} />
            {email_confirm.input}
            <Divider />
            <Label title={"Alamat Lengkap Penerima"} />
            {address.input}
        </Stack>
    )
}