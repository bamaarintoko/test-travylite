import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Contain from "./Container"
import LockIcon from '@mui/icons-material/Lock';
import { general_style } from "./general_style"
import PageLogin from "../pages/auth/page-login"
const withAuth = WrappedComponent => props => {
    const { authReducer: { access_token } } = useSelector((s) => s)
    const route = useRouter()
    useEffect(() => {
        // if (access_token === null) {
        //     route.push('/auth/page-login')
        // }
    }, [])
    if (access_token === null) {
        // return <Box>
        //     <WrappedComponent {...props} />
        //     <span>Access Granted</span>
        // </Box>
        return <PageLogin/>
    } else {
        return <Box>
            {/* <span>Access Granted</span> */}
            <WrappedComponent {...props} />
        </Box>
    }
}
export default withAuth