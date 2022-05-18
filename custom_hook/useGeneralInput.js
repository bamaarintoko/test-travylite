import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { general_style } from "../component/general_style";

export default function useGeneralInput(multiline = false) {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const input = <Stack> <TextField
        value={value}
        error={error}
        onChange={(e) => {
            setValue(e.target.value)
        }}
        fullWidth
        multiline={multiline}
        rows={4}
        variant="standard"
        autoComplete={"off"}
    />
        <span style={general_style.error_message}>{errorMessage}</span>
    </Stack>
    const args = {
        value, error, setValue, setError, input, setErrorMessage
    }
    return [args]
}