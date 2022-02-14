import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
import Box from '@mui/material/Box';

export default function Footer({ children, style={} }) {
    return (
        <Box style={style} className={styles.wrapper_footer}>
            <Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: '#FFF' }}>
                <Grid container >
                    {children}
                </Grid>
            </Container>
        </Box>
    )
}

