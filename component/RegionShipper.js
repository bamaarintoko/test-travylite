import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGet } from "../helper/request";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import { UPDATE_VALUE_SHIPPER } from "../reducer/dataShipper";
import { CLEAR_SHIPPER_ZONE, FILL_SHIPPER_FULL_ZONE, FILL_SHIPPER_ZONE } from "../reducer/zoneShipper";
import useInputSelect from "./useInputSelect";

export default function RegionShipper() {
    const dispatch = useDispatch()
    const {
        multilingual: { words },
        zoneShipper: { provinces, districts, subdistricts, villages },
        dataShipper: {
            province_shipper, city_shipper, district_shipper, subdistrict_shipper
        }
    } = useSelector(s => s)

    const [func_fetch_province, fetch_province_feedback] = useGet()
    const [func_fetch_district, fetch_district_feedback] = useGet()
    const [func_fetch_sub_district, fetch_sub_district_feedback] = useGet()
    const [func_fetch_village, fetch_village_feedback] = useGet()

    const [province] = useInputSelect("province_shipper")
    const [district] = useInputSelect("city_shipper")
    const [subdistrict] = useInputSelect("district_shipper")
    const [village] = useInputSelect("subdistrict_shipper")

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
        // #1 FILL ARRAY PROVINCES
        if (fetch_province_feedback.success) {

            dispatch({
                type: FILL_SHIPPER_ZONE,
                field: 'provinces',
                value: fetch_province_feedback.success_res.data
            })
        }
    }, [fetch_province_feedback.success])

    useEffect(() => {
        // ##1
        if (province.value !== "") {
            // console.log("fuck")
            fetch_district(province.value)
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'province_shipper',
                value: province.value
            })
            dispatch({
                type: CLEAR_SHIPPER_ZONE,
                clear: {
                    districts: true,
                    subdistricts: true,
                    villages: true
                }
            })
        }
    }, [province.value])

    useEffect(() => {
        // #2 FILL ARRAY DISTRICT / CITY (KABUPATEN/KOTA)
        if (fetch_district_feedback.success) {
            dispatch({
                type: FILL_SHIPPER_ZONE,
                field: 'districts',
                value: fetch_district_feedback.success_res.data
            })
        }
    }, [fetch_district_feedback.success])

    useEffect(() => {
        // ##2
        // fetch function district after select province
        if (district.value !== "") {
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'city_shipper',
                value: district.value
            })
            dispatch({
                type: CLEAR_SHIPPER_ZONE,
                clear: {
                    subdistricts: true,
                    villages: true
                }
            })
            fetch_sub_district(district.value)
        }
    }, [district.value])

    useEffect(() => {
        // #3 FILL ARRAY SUB DISTRICT (KECAMATAN)
        if (fetch_sub_district_feedback.success) {
            dispatch({
                type: FILL_SHIPPER_ZONE,
                field: 'subdistricts',
                value: fetch_sub_district_feedback.success_res.data
            })
        }
    }, [fetch_sub_district_feedback.success])

    useEffect(() => {
        // ##3
        if (subdistrict.value !== "") {
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'district_shipper',
                value: subdistrict.value
            })
            dispatch({
                type: CLEAR_SHIPPER_ZONE,
                clear: {
                    villages: true
                }
            })
            fetch_village(subdistrict.value)
        }
    }, [subdistrict.value])

    useEffect(() => {
        // #4 FILL ARRAY VILLAGES  (KELURAHAN)
        if (fetch_village_feedback.success) {
            dispatch({
                type: FILL_SHIPPER_ZONE,
                field: 'villages',
                value: fetch_village_feedback.success_res.data
            })
        }
        // console.log("fetch_village_feedback", fetch_village_feedback)
    }, [fetch_village_feedback.success])

    useEffect(() => {
        // ##4
        if (village.value !== "") {
            const code = villages.filter((dc) => dc.id === village.value)
            console.log("code : ", code)
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'subdistrict_shipper',
                value: village.value
            })
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'district_code_shipper',
                value: code[0].district_code
            })
            dispatch({
                type: UPDATE_VALUE_SHIPPER,
                field: 'postalcode_shipper',
                value: code[0].postal_code
            })
            dispatch({
                type: FILL_SHIPPER_FULL_ZONE,
                value: code[0]
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
            <Label title={words.province} />
            {province.select}
            <Divider />
            <Label title={words.district_or_city} />
            {district.select}
            <Divider />
            <Label title={words.sub_district} />
            {subdistrict.select}
            <Divider />
            <Label title={words.village} />
            {village.select}
            <Divider />
        </Stack>
    )
}
