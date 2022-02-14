import { TextField } from "@mui/material";
import { useState } from "react";

export default function () {
    const [value, setValue] = useState("")

    const input = <TextField fullWidth variant="standard"
        type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    return [value, input]
}