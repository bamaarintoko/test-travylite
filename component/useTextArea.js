import { TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { UPDATE_VALUE_RECEIVER, UPDATE_VALUE_SHIPPER } from "../reducer/customerReducer"

export default function useTextArea(field = "", type = "") {
    const dispatch = useDispatch()
    let delay = useRef(null)
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const input = <TextField onBlur={() => {
        if (value === "") {
            setError(true)
        }
    }} value={value} error={error} onChange={(e) => {
        setValue(e.target.value)
        if (value !== "") {
            setError(false)
        }
    }} fullWidth id="standard-basic" variant="standard" multiline rows={4} />
    useEffect(() => {
        updateValueShipper()
    }, [value])
    function updateValueShipper() {
        clearTimeout(delay.current)
        delay.current = setTimeout(() => {
            if (type === "RECEIVER") {
                dispatch({
                    type: UPDATE_VALUE_RECEIVER,
                    field,
                    value
                })
            } else {
                dispatch({
                    type: UPDATE_VALUE_SHIPPER,
                    field,
                    value
                })
            }
        }, 1000)
    }
    const args = {
        value, input, setValue, setError
    }
    return [args]
}