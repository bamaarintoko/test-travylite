import { IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function useInputPassword (label = "label") {
    const [value, setValue] = useState("")
    const [show_password, set_show_password] = useState(false)
    const input = <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)", marginBottom: 10 }}>{label}</span>
        <div>
            <OutlinedInput size="small"
                type={show_password ? 'text' : 'password'}
                fullWidth id="outlined-basic" variant="outlined"
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
        </div>
    </div>
    return [input, value]
}