import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import useInputSelect from "./useInputSelect";

export default function RegionRecipient() {
    const [province_value, province_select] = useInputSelect()
    const [district_value, district_select] = useInputSelect()
    const [sub_district_value, sub_district_select] = useInputSelect()
    const [village_value, village_select] = useInputSelect()
    const [zip_code_value, zip_code_select] = useInputSelect()

    return (
        <Stack>
            <Label title={"Provinsi"} />
            {province_select}
            <Divider />
            <Label title={"Kabupaten / Kota"} />
            {district_select}
            <Divider />
            <Label title={"Kecamatan"} />
            {sub_district_select}
            <Divider />
            <Label title={"Kelurahan"} />
            {village_select}
            <Divider />
            <Label title={"Kode Pos"} />
            {zip_code_select}
            <Divider />
        </Stack>
    )
}
