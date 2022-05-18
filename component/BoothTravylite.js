import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetBoothTravylite from '../custom_hook/useGetBoothTravylite'
import { FILL_SELECTED_BOOTH } from "../reducer/boothTravyliteReducer";
import { general_style } from "./general_style";
export default function BoothTravylite() {
    const { boothTravyliteReducer: { booths, selected_booth } } = useSelector(s => s)
    const [booth] = useGetBoothTravylite()
    const dispatch = useDispatch()

    useEffect(() => {
        booth.execute()
    }, [])

    function on_booth_select(x) {
        return () => {

            dispatch({
                type: FILL_SELECTED_BOOTH,
                value: x
            })
            console.log("x : ", x)
        }
    }

    return (
        <Stack spacing={2}>
            {
                booths.map((x, y) => {
                    return (
                        <Stack onClick={on_booth_select(x)} key={y} direction={'row'} sx={[{ height: '112px', paddingLeft: '16px', paddingRight: '16px', borderRadius: '16px' }, selected_booth.id === x.id ? general_style.bg_gradient : general_style.bg_white]}>
                            <Box sx={{ width: '80px', alignItems: 'center', display: 'flex' }}>
                                <Box sx={[{ width: '80px', height: '80px', borderRadius: '100px' }, selected_booth.id === x.id ? general_style.bg_white_no_shadow : general_style.bg_gradient]}>

                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
                                <Stack>
                                    <span style={general_style.heading_dark_bold}>{x.port_name}</span>
                                    <span style={general_style.heading_dark}>{x.description}</span>
                                </Stack>
                            </Box>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}