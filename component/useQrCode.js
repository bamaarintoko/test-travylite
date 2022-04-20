import { Box } from "@mui/system";
import { useState } from "react";

export default function useQrCode() {
    const [data, setData] = useState("HelloWorld")
    const size = 150;
    const result = <Box
        component="img"
        sx={{
            height: size,
            width: size,
            maxHeight: { xs: size, md: size },
            maxWidth: { xs: size, md: size },
        }}
        alt="The house from the offer."
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${data}&amp;size=${size}x${size}`}
    />
    const arg = {
        data, setData, result
    }
    return [arg]
}