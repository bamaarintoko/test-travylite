import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { general_style } from "./general_style";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CheckIcon from '@mui/icons-material/Check';
import Col from "../public/color.svg"
export default function SelectBooth({ onClick = {}, initial_value = "0", selected = "0", label = "label", description = "description" }) {
    return (
        <Box onClick={onClick} sx={{ boxShadow: '0px 16px 24px #F2F2F2', padding: '16px', borderRadius: '16px', background: initial_value !== selected ? "#FFF" : 'linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)' }}>
            <Stack direction={"row"}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80px',
                    width: '80px',
                    background: initial_value === selected ? "#FFF" : 'linear-gradient(135deg, #20AEE0 0%, #0065AF 100%)',
                    borderRadius: '200px',
                    marginRight: '16px'
                }}>
                    {
                        initial_value === selected
                            ?
                            <CheckIcon sx={{ color: "#20AEE0", fontSize: 40 }} />
                            :
                            <MoveToInboxIcon sx={{ color: "#FCCF2F", fontSize: 40 }} />
                    }
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Stack>
                        <span style={{ ...general_style.heading_dark_bold, color: initial_value === selected ? "#FFF" : null }}>{label}</span>
                        <span style={{ ...general_style.heading_dark_bold, color: initial_value === selected ? "#FFF" : null }}>{description}</span>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}