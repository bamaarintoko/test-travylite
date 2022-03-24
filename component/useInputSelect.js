import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function useInputSelect() {
    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log("event", event)
    };

    const select = <TextField
        id="standard-select-currency"
        select
        variant="standard"
        value={value}
        defaultValue={""}
        onChange={handleChange}
        fullWidth
        error={error}
    >
        {
            data?.map((option, y) => {
                return (<MenuItem key={option.id} value={option.id}>
                    {option.name}
                </MenuItem>)
            }) ?? []
        }
    </TextField>
    const arg = {
        value, select, setData, setValue, setError
    }
    return [arg]
    // return [value, select, setData, setValue, setError]
}