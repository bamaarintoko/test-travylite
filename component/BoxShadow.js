import { Grid } from "@mui/material"
import React from "react"
import styles from "../styles/Wrapper.module.css"
export default function BoxShadow ({ children, style = {} }) {
    return (
        <Grid style={style} item xs={12} md={12} className={styles.box_shadow}>
            {children}
        </Grid>

    )
}