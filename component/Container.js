import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
export default function Contain({ children }) {
    return (
        <Container maxWidth="md" className={styles.container} style={{ paddingLeft: 0, paddingRight: 0, }}>
            {children}
        </Container>
    )
}

