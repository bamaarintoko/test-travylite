import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import useInputSelect from "./useInputSelect";
import { useGet } from "../helper/request";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILL_RECIPIENT_PROVINCE_TEXT, FILL_RECIPIENT_CITY_TEXT, SET_LOCATION_RECIPIENT, SET_ZONE_RECIPIENT, FILL_RECIPIENT_FULL_ZONE } from "../reducer/customerReducer";
import { DISTRICTS_RECIPIENT, PROVINCES_RECIPIENT, RECIPIENT_DISTRICTS, RECIPIENT_PROVINCES, RECIPIENT_SUBDISTRICTS, RECIPIENT_VILLAGES, RECIPIENT_ZONE, SUB_DISTRICTS_RECIPIENT, VILLAGES_RECIPIENT } from "../reducer/regionRecipientReducer";
export default function RegionRecipient() {
    const dispatch = useDispatch()
    const {
        multilingual: { words },
        zoneRecipient: { provinces, districts, subdistricts, villages },
        customerReducer: { recipient_zone: { province_receiver, city_receiver, district_receiver, subdistrict_receiver } }
    } = useSelector(s => s)
    const [func_fetch_province, fetch_province_feedback] = useGet()
    const [func_fetch_district, fetch_district_feedback] = useGet()
    const [func_fetch_sub_district, fetch_sub_district_feedback] = useGet()
    const [func_fetch_village, fetch_village_feedback] = useGet()

    const [province] = useInputSelect()
    const [district] = useInputSelect()
    const [subdistrict] = useInputSelect()
    const [village] = useInputSelect()

    // const [province_value, province_select, province.setData, set_province, set_province_error] = useInputSelect()
    // const [district_value, district_select, set_districts, set_district, set_district_error] = useInputSelect()
    // const [sub_district_value, sub_district_select, set_sub_districts, set_subdistrict, set_subdistrict_error] = useInputSelect()
    // const [village_value, village_select, set_villages, set_village, set_village_error] = useInputSelect()

    useEffect(() => {
        fetch_province()
        province.setValue(province_receiver.value)
        district.setValue(city_receiver.value)
        subdistrict.setValue(district_receiver.value)
        village.setValue(subdistrict_receiver.value)
    }, [])

    useEffect(() => {
        province.setError(province_receiver.error)
        district.setError(city_receiver.error)
        subdistrict.setError(district_receiver.error)
        village.setError(subdistrict_receiver.error)
        // console.log("test", province_receiver.error)
    }, [province_receiver.error, city_receiver.error, district_receiver.error, subdistrict_receiver.error])
    // -------------------------------------------------------------------------------------------------------

    // #1
    useEffect(() => {
        // set data province after success hit api province
        // console.log("fetch_province_feedback", fetch_province_feedback)
        if (fetch_province_feedback.success) {
            dispatch({
                type: RECIPIENT_PROVINCES,
                provinces: fetch_province_feedback.success_res.data
            })
        }
    }, [fetch_province_feedback.success])



    useEffect(() => {
        console.log("===> ", province.value)
        // ##1
        // fetch function district after select province
        if (province.value !== "") {
            const province_text = provinces.filter(data => data.id === province.value)
            // console.log("triggered ===> ", province.value)
            console.log("province_text", province_text)

            fetch_district(province.value)
            // set id province
            dispatch({
                type: SET_ZONE_RECIPIENT,
                province_recipient: province.value,
                city_recipient: "",
                district_recipient: "",
                subdistrict_recipient: "",
                district_code_recipient: ""
            })
            dispatch({
                type: `SET_${RECIPIENT_ZONE}`,
                provinces: provinces,
                districts: [],
                subdistricts: [],
                villages: []
            })
        }
    }, [province.value])

    useEffect(() => {
        // ##2
        // fetch function district after select province
        if (district.value !== "") {
            const city_text = districts.filter(data => data.id === district.value)
            console.log("city_text", city_text)
            dispatch({
                type: SET_ZONE_RECIPIENT,
                province_recipient: province.value,
                city_recipient: district.value,
                district_recipient: "",
                subdistrict_recipient: "",
                district_code_recipient: ""
            })
            dispatch({
                type: `SET_${RECIPIENT_ZONE}`,
                provinces: provinces,
                districts: districts,
                subdistricts: [],
                villages: []
            })
            fetch_sub_district(district.value)
        }
    }, [district.value])

    useEffect(() => {
        // ##3
        if (subdistrict.value !== "") {
            dispatch({
                type: SET_ZONE_RECIPIENT,
                province_recipient: province.value,
                city_recipient: district.value,
                district_recipient: subdistrict.value,
                subdistrict_recipient: "",
                district_code_recipient: ""
            })
            dispatch({
                type: `SET_${RECIPIENT_ZONE}`,
                provinces: provinces,
                districts: districts,
                subdistricts: subdistricts,
                villages: []
            })
            fetch_village(subdistrict.value)
        }
    }, [subdistrict.value])

    useEffect(() => {
        // ##4
        if (village.value !== "") {
            const code = villages.filter((dc) => dc.id === village.value)
            console.log("villages ", code)
            // console.log("code ", code[0].district_code)
            dispatch({
                type: FILL_RECIPIENT_FULL_ZONE,
                value: code[0]
            })
            dispatch({
                type: SET_ZONE_RECIPIENT,
                province_recipient: province.value,
                city_recipient: district.value,
                district_recipient: subdistrict.value,
                subdistrict_recipient: village.value,
                district_code_recipient: code[0]?.district_code ?? ""
            })
        }
    }, [village.value])

    useEffect(() => {
        // #2
        if (fetch_district_feedback.success) {
            dispatch({
                type: RECIPIENT_DISTRICTS,
                districts: fetch_district_feedback.success_res.data
            })
            // set_district(districts)
        }
    }, [fetch_district_feedback.success])

    // #3
    useEffect(() => {
        if (fetch_sub_district_feedback.success) {

            dispatch({
                type: RECIPIENT_SUBDISTRICTS,
                subdistricts: fetch_sub_district_feedback.success_res.data
            })
            // set_sub_district(subdistricts)
        }
    }, [fetch_sub_district_feedback.success])

    // #4
    useEffect(() => {
        if (fetch_village_feedback.success) {

            dispatch({
                type: RECIPIENT_VILLAGES,
                villages: fetch_village_feedback.success_res.data
            })
            // set_village(villages)
        }
        // console.log("fetch_village_feedback", fetch_village_feedback)
    }, [fetch_village_feedback.success])
    // -------------------------------------------------------------------------------------------------------

    useEffect(() => {

        console.log("provinces", provinces)
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
        // fetch data province from api
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
            {/* <Label title={"Kode Pos"} />
            {zip_code_select}
            <Divider /> */}
        </Stack>
    )
}
