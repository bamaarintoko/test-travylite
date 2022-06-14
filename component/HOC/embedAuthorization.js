import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import { route } from "next/dist/server/router"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { usePostData } from "../../helper/request"
import Contain from "../Container"
import Content from "../Content"
import { general_style } from "../general_style"
import Image from 'next/image'
import logo from '../../public/logo.png'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from "react-redux"
import { UPDATE_ACCESS_TOKEN } from "../../reducer/authReducer"
import { UPDATE_USER } from "../../reducer/userReducer"

let image_width = 620;
let image_height = 268;

let view_width = 155;
let new_image_height = image_height * view_width / image_width;
const embedAuthorization = WrappedComponent => props => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [func_travelin_auth, res_travelin_auth] = usePostData("autologin")
    let { query } = router

    useEffect(() => {
        console.log("router : ", query)
        if (router.isReady) {
            if (query.travelin_token) {
                travelin_authorization(query.travelin_token)
            }
        }
    }, [router.isReady])
    // if()

    useEffect(() => {
        console.log("res_travelin_auth : ", res_travelin_auth)
        if (res_travelin_auth.success) {
            dispatch({
                type: UPDATE_ACCESS_TOKEN,
                access_token: res_travelin_auth.success_res.data.access_token,
                token_type: res_travelin_auth.success_res.data.token_type
            })
            dispatch({
                type: UPDATE_USER,
                user: res_travelin_auth.success_res.data.user
            })
        }
    }, [res_travelin_auth.success])

    function travelin_authorization(foo) {
        let params = {
            token: foo
        }
        func_travelin_auth(params)
        // console.log("par : ", par)
    }
    if (query.travelin_token) {
        if (res_travelin_auth.loading) {
            return <Contain>
                <Stack sx={{ background: "linear-gradient(to bottom, #20aee0 50%, #0065af)", flex: 1, display: 'flex' }}>
                    <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>

                        <Box sx={{ width: view_width, height: new_image_height }}>
                            <Image
                                src={logo}
                            />
                        </Box>
                    </Box>
                    <Stack spacing={2} sx={{ alignItems: 'center', flex: 1, display: 'flex' }}>
                        <CircularProgress />
                        <span style={general_style.heading_white_bold}>Please wait...</span>
                    </Stack>
                </Stack>
            </Contain>
        }
        if (res_travelin_auth.failed) {
            return <Contain>
                <Stack sx={{ background: "linear-gradient(to bottom, #20aee0 50%, #0065af)", flex: 1, display: 'flex' }}>
                    <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>

                        <Box sx={{ width: view_width, height: new_image_height }}>
                            <Image
                                src={logo}
                            />
                        </Box>
                    </Box>
                    <Stack sx={{ alignItems: 'center', flex: 1, display: 'flex' }}>
                        <WarningAmberRoundedIcon sx={{ color: '#d32f2f' }} fontSize="large" />
                        <span style={general_style.error_message}>An error occurred</span>
                        <span style={general_style.error_message}>Please contact customer service.</span>
                    </Stack>
                </Stack>
            </Contain>
        } else {
            return <WrappedComponent {...props} />
        }

    } else {
        return <WrappedComponent {...props} />
    }
}
export default embedAuthorization