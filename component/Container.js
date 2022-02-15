import { Container, Grid, Input } from '@mui/material'
import styles from "../styles/Wrapper.module.css"
export default function Contain({ children, style }) {
    return (
        <Container maxWidth="md" style={{
            paddingLeft: 0, paddingRight: 0,
            minHeight: ' 100vh',
            display: 'flex',
            flexDirection: 'column',
            ...style
        }}>
            {children}
        </Container>
    )
}

