import React from "react";
import { Grid } from "@mui/material";
import Image from 'next/image'
import logo from "../public/logo_colours.png"

let image_width = 800;
let image_height = 372;

let view_width = 192;
let view_height = 50;

let new_image_height = image_height * view_width / image_width;
export default function () {
    return (
        <Grid item xs={12} md={12}>
            <div style={{ height: 190 - new_image_height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 192, height: new_image_height }}>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                    // width={image_width} automatically provided
                    // height={new_image_height} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>
            </div>
        </Grid>
    )
}