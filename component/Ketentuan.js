import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { general_style } from "./general_style";

export default function Ketentuan({ number = 0, label = "label" }) {
    return (
        <Stack direction={"row"} sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '24px',
                width: '24px',
                background: "#0065AF",
                borderRadius: 100,
                marginRight: '16px'
            }}>
                <span style={general_style.heading_white_bold}>{number}</span>
            </Box>
            <Box>
                <span style={general_style.heading_dark_bold}>{label}</span>
            </Box>
        </Stack>
    )
}