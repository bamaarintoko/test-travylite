import React from "react";
import { Grid, Stack } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { AppBar } from "../../component/AppBar";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import styles from "../../styles/General.module.css"
export default function PagePilihSmartBox() {
    return (
        <Contain>
            <Header>
                <AppBar title={"Pilih Smart Box"} />
            </Header>
            <Content style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={1}>
                        <span className={styles.text_normal_black}>Smart Box</span>
                        <span className={styles.text_body}>Smart Box adalah Box pintar penitipan dokumen atau paket lainnya dengan tiga pilihan ukuran Small, Medium dan Large</span>
                    </Stack>
                    <Stack style={{ marginTop: 24 }} spacing={1}>
                        <span className={styles.text_normal_black}>Lokasi Smart Box</span>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Stack>
                </Grid>
            </Content>
            <Footer>

            </Footer>
        </Contain>
    )
}