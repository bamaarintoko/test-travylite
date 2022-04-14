import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import { FILL_ADDRESS_RECIPIENT, FILL_GENDER_RECIPIENT, FILL_NAME_RECIPIENT, FILL_PHONE_RECIPIENT } from "../reducer/customerReducer";
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

export default function FormRecipient({ status }) {
    const dispatch = useDispatch()
    const { customerReducer: { recipient }, dataReceiver: { gender_receiver, name_receiver, phone_receiver, address_receiver } } = useSelector(s => s)
    const [gelar] = useInputSelect()
    // const [gelar_value, gelar_select, setDataGelar, setGelarValue] = useInputSelect()
    const [name] = useInput("name_receiver", "RECEIVER")
    const [phone] = useInput("phone_receiver", "RECEIVER")
    const [address] = useTextArea("address_receiver", "RECEIVER");

    useEffect(() => {
        gelar.setData(arr)

        gelar.setValue(gender_receiver.value)
        name.setValue(name_receiver.value)
        phone.setValue(phone_receiver.value)
        address.setValue(address_receiver.value)
    }, [])

    // useEffect(() => {
    //     // console.log("gelar_value", gelar_value)
    //     dispatch({
    //         type: FILL_GENDER_RECIPIENT,
    //         gender_recipient: gelar.value
    //     })
    //     dispatch({
    //         type: FILL_NAME_RECIPIENT,
    //         name_recipient: name.value
    //     })
    //     dispatch({
    //         type: FILL_PHONE_RECIPIENT,
    //         phone_recipient: phone.value,
    //     })
    //     dispatch({
    //         type: FILL_ADDRESS_RECIPIENT,
    //         address_recipient: address.value,

    //     })
    // }, [gelar.value, name.value, address.value, phone.value])

    useEffect(() => {
        name.setError(name_receiver.error)
        phone.setError(phone_receiver.error)
        address.setError(address_receiver.error)

    }, [name_receiver.error, phone_receiver.error, address_receiver.error])
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
            <Label title={"Nomor Telepon Penerima"} />
            {phone.input}
            <Divider />
            <Label title={"Alamat Lengkap Penerima"} />
            {address.input}
        </Stack>
    )
}