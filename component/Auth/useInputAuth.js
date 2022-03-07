import { IconButton, TextField, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function useInputAuth(label = "label", email = false, secure = false) {
    const [value, setValue] = useState("")
    const [isError, setError] = useState(false)
    const input = <Stack>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)", marginBottom: 10 }}>{label}</span>
        <Box>
            <TextField error={isError} onChange={(e) => setValue(e.target.value)} size="small"
                fullWidth id="outlined-basic" variant="outlined" />
        </Box>
    </Stack>
    return [input, value, setError]
}