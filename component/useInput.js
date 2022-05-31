import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { UPDATE_VALUE_SHIPPER } from "../reducer/customerReducer";
import { UPDATE_VALUE_RECEIVER } from "../reducer/dataReceiver";
import { UPDATE_VALUE_SHIPPER } from "../reducer/dataShipper";

export default function useInput(field = "", _type = "") {
    const dispatch = useDispatch()
    let delay = useRef(null)
    // console.log("field : ", field)
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const input = <TextField autoComplete={"off"} onBlur={() => {
        if (value === "") {
            setError(true)
        }
    }} error={error} value={value} onChange={(e) => {
        setValue(e.target.value)
        if (value !== "") {
            setError(false)
        }
    }} fullWidth id="standard-basic" variant="standard" />

    const args = {
        value, input, setValue, setError
    }
    useEffect(() => {
        updateValueShipper()
    }, [value])
    function updateValueShipper() {
        clearTimeout(delay.current)
        delay.current = setTimeout(() => {
            if (_type === "RECEIVER") {
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
    return [args]
}