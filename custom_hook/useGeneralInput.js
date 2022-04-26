import { TextField } from "@mui/material";
import { useState } from "react";

export default function useGeneralInput(multiline = false) {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)

    const input = <TextField
        value={value}
        error={error}
        onChange={(e) => {
            setValue(e.target.value)
        }}
        fullWidth
        multiline={multiline}
        maxRows={4}
        rows={4}
        variant="standard"
        autoComplete={"off"}
    />
    const args = {
        value, error, setValue, setError, input
    }
    return [args]
}