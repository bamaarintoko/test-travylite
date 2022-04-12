import { TextField } from "@mui/material";
import { useState } from "react";

export default function useInput() {
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

    return [args]
}