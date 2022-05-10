import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function useDateInput() {
    const [value, setValue] = useState(null);
    const input = <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth id="standard-basic" variant="standard" />}
        />
    </LocalizationProvider>
    const args = {
        value, input, setValue
    }
    return [args]
}