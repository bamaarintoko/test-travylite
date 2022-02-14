import { useRouter } from 'next/router'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const AppBar = ({ title = "" }) => {
    const router = useRouter()

    return (
        <div style={style.app_bar}>
            <div onClick={() => router.back()} style={style.left_bar}>
                <ArrowBackIcon />
            </div>
            <div style={style.middle_bar}>
                <span style={style.text_bar_title}>{title}</span>
            </div>
            <div style={style.right_bar}>

            </div>
        </div>
    )
}

const style = {
    app_bar: {
        display: "flex",
        height: 56,
        flex: 1,
        backgroundColor: "#fefefe"
    },
    left_bar: {
        width: 52,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    middle_bar: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right_bar: {
        width: 52
    }
}