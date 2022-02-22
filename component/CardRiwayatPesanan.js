import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HelpIcon from '@mui/icons-material/Help';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { general_style } from "./general_style";

export default function CardRiwayatPesanan({ onClick = {} }) {
    return (
        <Stack onClick={onClick} sx={{ paddingBottom: '16px' }}>
            <Stack direction={"row"}>
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>YGY</span>
                        <span style={general_style.body_light}>12 OKT 2021</span>
                    </Stack>
                </Box>
                <Box sx={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction={"row"} sx={{ display: 'flex', flex: 1 }}>
                        <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                            <Box sx={{ height: '1px', display: 'flex', flex: 1, borderTopWidth: 1, borderTopStyle: 'dashed', borderTopColor: 'rgba(0, 0, 0, 0.2)' }} />
                        </Box>
                        <Box sx={{ paddingLeft: '8px', paddingRight: '8px' }}>
                            <FlightTakeoffIcon fontSize="large" sx={{ color: "#0065AF" }} />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                            <Box sx={{ height: '1px', display: 'flex', flex: 1, borderTopWidth: 1, borderTopStyle: 'dashed', borderTopColor: 'rgba(0, 0, 0, 0.2)' }} />
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={general_style.heading_dark_bold}>JKT</span>
                        <span style={general_style.body_light}>15 OKT 2021</span>
                    </Stack>
                </Box>
            </Stack>
            <Stack direction={"row"}>
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                        <Box sx={{ height: '24px', width: '24px' }}>
                            <BusinessCenterIcon fontSize="small" sx={{ color: "#FF9901" }} />
                        </Box>
                        <span style={{ ...general_style.body_light, lineClamp: 1, textOverflow: 'ellipsis', overflow: 'hidden' }}>Pengiriman Airport Bagasi</span>
                    </Stack>
                </Box>
                <Box sx={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <HelpIcon sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 13 }} />
                    <span style={general_style.body_light}>Detail</span>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: '160%',
                        color: "#0065AF"
                    }}>Rp 35,000</span>
                </Box>
            </Stack>
        </Stack>
    )
}