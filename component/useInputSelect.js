import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function () {
    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const select = <TextField
        id="standard-select-currency"
        select
        variant="standard"
    >
        {
            data.map((option) => {
                return (<MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>)
            })
        }
    </TextField>
    return [value, select, setData]
}