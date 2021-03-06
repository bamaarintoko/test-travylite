import { IconButton, TextField, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function useInputAuth(label = "label", email = false, secure = false) {
    const [value, setValue] = useState("")
    const [isError, setError] = useState(false)
    const [error_message, setErrorMessage] = useState("")
    const input = <Stack>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)", marginBottom: 10 }}>{label}</span>
        <Box>
            <TextField autoComplete={"off"} error={isError} onBlur={() => {
                if (value !== "") {
                    setError(false)
                }
            }} onChange={(e) => setValue(e.target.value)} size="small"
                fullWidth variant="outlined" />
            <span style={{ fontSize: 12, fontFamily: 'Roboto', color: "#e57373" }}>{error_message}</span>
        </Box>
    </Stack>
    const arg = {
        input, value, setError, setErrorMessage
    }
    return [arg]
}