import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function useInputNumber(text = "kg") {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const input = <TextField
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
            endAdornment: <InputAdornment position="end">{text}</InputAdornment>
        }}

    />
    const args = {
        value, input, setValue, setError, error
    }
    return [args]
}