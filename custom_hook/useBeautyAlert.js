import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export default function useBeautyAlert() {
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState("success")
    const [message, setMessage] = useState("message")
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const alert = <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
    const args = {
        alert,
        setOpen,
        setMessage,
        setSeverity
    }

    return [args]
}