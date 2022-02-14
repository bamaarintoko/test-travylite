import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function (label = "label", email = false, secure = false) {
    const [value, setValue] = useState("")
    const input = <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: "rgba(0, 0, 0, 0.4)", marginBottom: 10 }}>{label}</span>
        <div>
            <TextField size="small"
                fullWidth id="outlined-basic" variant="outlined" />
        </div>
    </div>
    return [input, value]
}