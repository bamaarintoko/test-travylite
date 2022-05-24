import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { ID, EN, ID_LANGUAGE, EN_LANGUAGE } from "../reducer/multilingualReducer";
import { general_style } from "./general_style";

export default function Multilingual() {
    const { multilingual: { language } } = useSelector(s => s)
    const dispatch = useDispatch()
    function select_language(lang = ID_LANGUAGE) {
        return () => {
            dispatch({
                type: lang
            })
        }
    }
    return (
        <>
            <Box onClick={select_language(EN_LANGUAGE)} sx={language === EN ? style.selected : style.not_selected}>
                <span style={general_style.heading_dark_bold}>EN</span>
            </Box>
            <Box>
                <span style={general_style.heading_dark_bold}>|</span>
            </Box>
            <Box onClick={select_language(ID_LANGUAGE)} sx={language === ID ? style.selected : style.not_selected}>
                <span style={general_style.heading_dark_bold}>ID</span>
            </Box>
        </>
    )
}

const style = {
    selected: {
        display: 'flex', backgroundColor: '#FFF', borderRadius: '100px', width: '40px', justifyContent: 'center'
    },
    not_selected: {
        display: 'flex', borderRadius: '100px', width: '40px', justifyContent: 'center', borderWidth: '1px', borderStyle: 'solid', borderColor: '#FFF'
    }
}