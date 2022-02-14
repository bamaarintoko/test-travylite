import { TextField } from "@mui/material"
import { useState } from "react"

export default function () {
    const [value, setValue] = useState("")
    const input_area = <TextField fullWidth id="standard-basic" variant="standard" multiline rows={4} />
    return [value, input_area]
}