import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGet } from "../helper/request";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import { FILL_SHIPPER_FULL_ZONE, SET_ZONE_SHIPPER } from "../reducer/customerReducer";
import { SHIPPER_DISTRICTS, SHIPPER_PROVINCES, SHIPPER_SUBDISTRICTS, SHIPPER_VILLAGES, SHIPPER_ZONE } from "../reducer/regionRecipientReducer";
import useInputSelect from "./useInputSelect";

export default function RegionShipper() {
    const dispatch = useDispatch()
    const {
        zoneShipper: { provinces, districts, subdistricts, villages },
        customerReducer: { shipper_zone: { province_shipper, city_shipper, district_shipper, subdistrict_shipper } }
    } = useSelector(s => s)

    const [func_fetch_province, fetch_province_feedback] = useGet()
    const [func_fetch_district, fetch_district_feedback] = useGet()
    const [func_fetch_sub_district, fetch_sub_district_feedback] = useGet()
    const [func_fetch_village, fetch_village_feedback] = useGet()

    const [province] = useInputSelect("province_shipper")
    const [district] = useInputSelect("city_shipper")
    const [subdistrict] = useInputSelect("district_shipper")
    const [village] = useInputSelect("subdistrict_shipper")

    // const [province_value, province_select, set_provinces, set_province, set_province_error] = useInputSelect()
    // const [district_value, district_select, set_districts, set_district, set_district_error] = useInputSelect()
    // const [sub_district_value, sub_district_select, set_sub_districts, set_subdistrict, set_subdistrict_error] = useInputSelect()
    // const [village_value, village_select, set_villages, set_village, set_village_error] = useInputSelect()

    useEffect(() => {
        console.log("province_shipper", province_shipper)
        fetch_province()
        province.setValue(province_shipper.value)
        district.setValue(city_shipper.value)
        subdistrict.setValue(district_shipper.value)
        village.setValue(subdistrict_shipper.value)
    }, [])

    useEffect(() => {
        province.setError(province_shipper.error)
        district.setError(city_shipper.error)
        subdistrict.setError(district_shipper.error)
        village.setError(subdistrict_shipper.error)

    }, [province_shipper.error, city_shipper.error, district_shipper.error, subdistrict_shipper.error])
    useEffect(() => {
        // #1
        if (fetch_province_feedback.success) {
            // dispatch({
            //     type: `SET_${SHIPPER_ZONE}`,
            //     provinces: fetch_province_feedback.success_res.data,
            //     districts: [],
            //     subdistricts: [],
            //     villages: []
            // })

            dispatch({
                type: SHIPPER_PROVINCES,
                provinces: fetch_province_feedback.success_res.data
            })
        }
    }, [fetch_province_feedback.success])

    useEffect(() => {
        // ##1
        if (province.value !== "") {
            // console.log("fuck")
            fetch_district(province.value)
            dispatch({
                type: SET_ZONE_SHIPPER,
                province_shipper: province.value,
                city_shipper: "",
                district_shipper: "",
                subdistrict_shipper: "",
                district_code_shipper: ""
            })

            dispatch({
                type: `SET_${SHIPPER_ZONE}`,
                provinces: provinces,
                districts: [],
                subdistricts: [],
                villages: []
            })
        }
    }, [province.value])

    useEffect(() => {
        // #2
        if (fetch_district_feedback.success) {
            dispatch({
                type: SHIPPER_DISTRICTS,
                districts: fetch_district_feedback.success_res.data
            })
            // dispatch({
            //     type: `SET_${SHIPPER_ZONE}`,
            //     provinces: fetch_province_feedback.success_res.data,
            //     districts: fetch_district_feedback.success_res.data,
            //     subdistricts: [],
            //     villages: []
            // })
            // set_district(districts)
        }
    }, [fetch_district_feedback.success])

    useEffect(() => {
        // ##2
        // fetch function district after select province
        if (district.value !== "") {
            dispatch({
                type: SET_ZONE_SHIPPER,
                province_shipper: province.value,
                city_shipper: district.value,
                district_shipper: "",
                subdistrict_shipper: "",
                district_code_shipper: ""
            })
            dispatch({
                type: `SET_${SHIPPER_ZONE}`,
                provinces: provinces,
                districts: districts,
                subdistricts: [],
                villages: []
            })
            fetch_sub_district(district.value)
        }
    }, [district.value])

    useEffect(() => {
        // #3
        if (fetch_sub_district_feedback.success) {
            dispatch({
                type: SHIPPER_SUBDISTRICTS,
                subdistricts: fetch_sub_district_feedback.success_res.data
            })
            // dispatch({
            //     type: `SET_${SHIPPER_ZONE}`,
            //     provinces: fetch_province_feedback.success_res.data,
            //     districts: fetch_district_feedback.success_res.data,
            //     subdistricts: fetch_sub_district_feedback.success_res.data,
            //     villages: []
            // })
            // set_sub_district(subdistricts)
        }
    }, [fetch_sub_district_feedback.success])

    useEffect(() => {
        // ##3
        if (subdistrict.value !== "") {
            dispatch({
                type: SET_ZONE_SHIPPER,
                province_shipper: province.value,
                city_shipper: district.value,
                district_shipper: subdistrict.value,
                subdistrict_shipper: "",
                district_code_shipper: ""
            })
            dispatch({
                type: `SET_${SHIPPER_ZONE}`,
                provinces: provinces,
                districts: districts,
                subdistricts: subdistricts,
                villages: []
            })
            fetch_village(subdistrict.value)
        }
    }, [subdistrict.value])

    useEffect(() => {
        // #4
        if (fetch_village_feedback.success) {
            dispatch({
                type: SHIPPER_VILLAGES,
                villages: fetch_village_feedback.success_res.data
            })
            // dispatch({
            //     type: `SET_${SHIPPER_ZONE}`,
            //     provinces: fetch_province_feedback.success_res.data,
            //     districts: fetch_district_feedback.success_res.data,
            //     subdistricts: fetch_sub_district_feedback.success_res.data,
            //     villages: fetch_village_feedback.success_res.data
            // })
            // set_village(villages)
        }
        // console.log("fetch_village_feedback", fetch_village_feedback)
    }, [fetch_village_feedback.success])

    useEffect(() => {
        // ##4
        if (village.value !== "") {
            const code = villages.filter((dc) => dc.id === village.value)
            dispatch({
                type: FILL_SHIPPER_FULL_ZONE,
                value: code[0]
            })
            dispatch({
                type: SET_ZONE_SHIPPER,
                province_shipper: province.value,
                city_shipper: district.value,
                district_shipper: subdistrict.value,
                subdistrict_shipper: village.value,
                district_code_shipper: code[0]?.district_code ?? ""
            })
        }
    }, [village.value])

    // -------------------------------------------------------------------------------------------------------

    useEffect(() => {
        province.setData(provinces)
    }, [provinces])

    useEffect(() => {
        district.setData(districts)
    }, [districts])

    useEffect(() => {
        subdistrict.setData(subdistricts)
    }, [subdistricts])

    useEffect(() => {
        village.setData(villages)
    }, [villages])

    // -------------------------------------------------------------------------------------------------------

    function fetch_province() {
        func_fetch_province({}, "address/province")
    }

    function fetch_district(val) {
        // fetch data district with province id
        func_fetch_district({}, `address/city/${val}`)
        // console.log("val", val)
    }

    function fetch_sub_district(val) {
        func_fetch_sub_district({}, `address/district/${val}`)
    }

    function fetch_village(val) {
        func_fetch_village({}, `address/subdistrict/${val}`)
    }

    return (
        <Stack>
            <Label title={"Provinsi"} />
            {province.select}
            <Divider />
            <Label title={"Kabupaten / Kota"} />
            {district.select}
            <Divider />
            <Label title={"Kecamatan"} />
            {subdistrict.select}
            <Divider />
            <Label title={"Kelurahan"} />
            {village.select}
            <Divider />
        </Stack>
    )
}
