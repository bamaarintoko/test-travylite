import { InputAdornment, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { general_style } from "../component/general_style";

export default function useInputCurrency(text = "Rp") {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const input = <Stack> <TextField
        onBlur={() => {
            if (value !== "") {
                setError(false)
            } else {
                setError(true)
            }
        }}
        error={error}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        variant="standard"
        type="number"
        InputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            startAdornment: <InputAdornment position="start">{text}</InputAdornment>
        }}

    />
        <span style={general_style.error_message}>{errorMessage}</span>
    </Stack>
    const args = {
        value, input, setValue, setError, error, setErrorMessage
    }
    return [args]
}