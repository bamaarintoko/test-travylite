import { TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

export default function useGeneralTextArea(field = "", _type = "") {
    const dispatch = useDispatch()
    let delay = useRef(null)
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const input = <TextField inputProps={{ maxLength: 32 }} onBlur={() => {
        if (value === "") {
            setError(true)
        }
    }} value={value} error={error} onFocus={() => {
        console.log("as")
        clearTimeout(delay.current)
    }} onChange={(e) => {
        console.log("qq", e.target.value)
        setValue(e.target.value)
        // delay.current = setTimeout(() => {
        //     console.log("vv", e.target.value)
        //     setValue(e.target.value)
        // }, 1000)


        if (value !== "") {
            setError(false)
        }
    }} fullWidth id="standard-basic" variant="standard" multiline rows={4} />

    // useEffect(() => {
    //     updateValueShipper()
    // }, [value])
    // function updateValueShipper() {
    //     clearTimeout(delay.current)
    //     delay.current = setTimeout(() => {
    //         if (_type === "RECEIVER") {
    //             dispatch({
    //                 type: UPDATE_VALUE_RECEIVER,
    //                 field,
    //                 value
    //             })
    //         } else {
    //             dispatch({
    //                 type: UPDATE_VALUE_SHIPPER,
    //                 field,
    //                 value
    //             })
    //         }
    //     }, 1000)
    // }
    const args = {
        value, input, setValue, setError
    }
    return [args]
}