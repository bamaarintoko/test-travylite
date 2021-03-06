import { IconButton, InputAdornment, OutlinedInput, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from "@mui/system";
export default function useInputPassword(label = "label") {
    const [value, setValue] = useState("")
    const [show_password, set_show_password] = useState(false)
    const [isError, setError] = useState(false)
    const [error_message, setErrorMessage] = useState("")
    const input = <Stack style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)", marginBottom: 10 }}>{label}</span>
        <Box>
            <OutlinedInput size="small"
                onBlur={() => {
                    if (value !== '') {
                        setError(false)
                    }
                }}
                error={isError}
                onChange={(e) => setValue(e.target.value)}
                type={show_password ? 'text' : 'password'}
                fullWidth id="outlined-basic"
                variant="outlined"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => set_show_password(!show_password)}
                            edge="end"
                        >
                            {show_password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                } />
                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: "#e57373" }}>{error_message}</span>
        </Box>
    </Stack>
    const arg = {
        input, value, setError,setErrorMessage
    }
    return [arg]
}