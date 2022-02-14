import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
import Box from '@mui/material/Box';

export default function Header({ children }) {
    return (
        <Box className={styles.navbar}>
            <Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Grid container >
                    {children}
                </Grid>
            </Container>
        </Box>
    )
}

