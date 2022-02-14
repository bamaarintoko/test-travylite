import { TextField } from "@mui/material";
import { useState } from "react";

export default function () {
    const [value, setValue] = useState("")
    const input = <TextField onChange={(e) => setValue("==>", e.target.value)} fullWidth id="standard-basic" variant="standard" />

    return [value, input]
}