import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
import Box from '@mui/material/Box';

export default function Footer({ children, style = {} }) {
    return (
        <Box style={{
            display: 'flex',
            position: 'fixed',
            left: 0,
            bottom: 0,
            right: 0,
            boxShadow: "1px 18px 36px -8px rgba(0,0,0,0.76)",
            ...style
        }}>
            <Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: '#FFF' }}>
                <Grid container >
                    {children}
                </Grid>
            </Container>
        </Box>
    )
}

