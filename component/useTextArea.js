import { TextField } from "@mui/material"
import { useState } from "react"

export default function useTextArea() {
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
    const args = {
        value, input, setValue, setError
    }
    return [args]
}