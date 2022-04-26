import { IconButton, Input, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
export default function useGeneralDateInput(multiline = false) {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const input = <Input
        value={value}
        error={error}
        onChange={(e) => {
            setValue(e.target.value)
        }}
        fullWidth
        endAdornment={
            <InputAdornment position={"end"}>
                <IconButton>
                    <CalendarTodayIcon/>
                </IconButton>
            </InputAdornment>
        }
        variant="standard"
        autoComplete={"off"}
    />
    const args = {
        value, error, setValue, setError, input
    }
    return [args]
}