import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { general_style } from "./general_style";

export default function RowPesanan({ label = "label", value = "value" }) {
    return (
        <Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <span style={general_style.heading_light}>{label}</span>
            </Box>
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                <span style={general_style.heading_light}>:</span>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <span style={general_style.heading_light}>{value}</span>
            </Box>
        </Stack>
    )
}