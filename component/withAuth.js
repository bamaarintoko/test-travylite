import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Contain from "./Container"
import LockIcon from '@mui/icons-material/Lock';
import { general_style } from "./general_style"
const withAuth = WrappedComponent => props => {
    const { authReducer: { access_token } } = useSelector((s) => s)
    const route = useRouter()
    useEffect(() => {
        // if (access_token === null) {
        //     route.push('/auth/page-login')
        // }
    }, [])
    if (access_token !== null) {
        return <Box>
            <WrappedComponent {...props} />
            <span>Access Granted</span>
        </Box>
        // return <Contain sx={{ display: 'flex', flex: 1 }}>
        //     <Stack sx={{ display: 'flex', background: 'linear-gradient(to bottom, #20aee0 10%, #0065af)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <LockIcon sx={{ fontSize: 100, color: '#FFF' }} />
        //         <span style={general_style.title_white_bold}>Access</span>
        //         <span style={general_style.title_white_bold}>Forbidden</span>
        //         <span style={general_style.title_white_bold}>Error Code 403</span>
        //     </Stack>
        // </Contain>
    } else {
        return <Box>
            <span>Access Granted</span>
            <WrappedComponent {...props} />
        </Box>
    }
}
export default withAuth