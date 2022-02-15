import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
import Box from '@mui/material/Box';



export default function Content({ children, style = {} }) {
    return (
        <Grid container spacing={0} style={{
            display: 'flex',
            flex: 1,
            overflowY: 'scroll',
            marginTop: 56,
            flexDirection: 'column',
            ...style
        }}>
            {children}
        </Grid>
    )
}
