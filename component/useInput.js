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
    const [query, setQuery] = useState("")
    const [error, setError] = useState(false)
    const input = <TextField autoComplete={"off"} onBlur={() => {
        if (value === "") {
            setError(true)
        }
    }} error={error} value={value} onChange={
        (e) => {
            // clearTimeout(delay.current)
            setValue(e.target.value)
            // delay.current = setTimeout(() => {
            //     console.log("haloooo")
            // }, [1000])
            if (value !== "") {
                setError(false)
            }
        }
        // input_listener()
    } fullWidth id="standard-basic" variant="standard" />

    const args = {
        value, input, setValue, setError
    }
    // useEffect(() => {
    //     delay.current = setTimeout(() => {
    //         setValue(value)
    //     }, 1000)
    //     return () => clearTimeout(delay.current)
    //     // updateValueShipper()
    // }, [value])
    // function updateValueShipper() {
    //     clearTimeout(delay.current)
    //     delay.current = setTimeout(() => {

    //         // if (_type === "RECEIVER") {
    //         //     dispatch({
    //         //         type: UPDATE_VALUE_RECEIVER,
    //         //         field,
    //         //         value
    //         //     })
    //         // } else {
    //         //     dispatch({
    //         //         type: UPDATE_VALUE_SHIPPER,
    //         //         field,
    //         //         value
    //         //     })
    //         // }
    //     }, 1000)
    // }
    return [args]
}