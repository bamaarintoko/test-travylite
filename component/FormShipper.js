import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import { FILL_ADDRESS_SHIPPER, FILL_EMAIL_CONFIRM_SHIPPER, FILL_EMAIL_SHIPPER, FILL_GENDER_SHIPPER, FILL_NAME_SHIPPER, FILL_PHONE_SHIPPER, SET_DATA_SHIPPER, UPDATE_FIELD_SHIPPER, UPDATE_VALUE_SHIPPER } from "../reducer/customerReducer";
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
    const {
        dataShipper: {
            gender_shipper,
            name_shipper,
            phone_shipper,
            email_shipper,
            email_confirimation_shipper,
            address_shipper
        },
        customerReducer: {
            shipper, shipper_zone
        }, zoneShipper: {
            villages
        },
        multilingual: {
            words
        }
    } = useSelector(s => s)

    const [gelar] = useInputSelect()
    const [name] = useInput("name_shipper", "SHIPPER")
    const [phone] = useInput("phone_shipper", "SHIPPER")
    const [email] = useInput("email_shipper", "SHIPPER")
    const [address] = useTextArea("address_shipper", "SHIPPER");
    const [email_confirm] = useInput("email_confirimation_shipper")

    let delay = useRef(null)

    useEffect(() => {
        gelar.setData(arr)
        gelar.setValue(gender_shipper.value)
        // phone.setError(true)
        name.setValue(name_shipper.value)
        phone.setValue(phone_shipper.value)
        address.setValue(address_shipper.value)
        email_confirm.setValue(email_confirimation_shipper.value)
        email.setValue(email_shipper.value)
    }, [])

    useEffect(() => {
        // console.log("status", status)
        console.log("name_shipper.error", name_shipper.error)
        // console.log("shipper.phone_shipper.error", shipper.phone_shipper.error)
        // if (status) {
        //     console.log("shipper.phone_shipper.error", shipper.phone_shipper.error)
        name.setError(name_shipper.error)
        phone.setError(phone_shipper.error)
        email.setError(email_shipper.error)
        email_confirm.setError(email_confirimation_shipper.error)
        address.setError(address_shipper.error)
        // }
    }, [name_shipper.error, phone_shipper.error, email_shipper.error, address_shipper.error])

    return (
        <Stack>
            <Label title={words.title_and_full_name_of_the_sender} />
            <Stack direction="row" spacing={1}>
                <Box sx={{ width: '72px' }}>
                    {gelar.select}
                </Box>
                {name.input}
            </Stack>
            <Divider />
            <Label title={words.sender_phone_number} />
            {phone.input}
            <Divider />
            <Label title={words.sender_email} />
            {email.input}
            <Divider />
            <Label title={words.sender_email_confirmation} />
            {email_confirm.input}
            <Divider />
            <Label title={words.senders_full_address} />
            {address.input}
        </Stack>
    )
}