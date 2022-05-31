import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Divider, Label } from "../pages/bagasi/ekstra-bagasi/page-detail-pengirim";
import useInputSelect from "./useInputSelect";
import { useGet } from "../helper/request";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_VALUE_RECEIVER } from "../reducer/dataReceiver";
import { CLEAR_RECIPIENT_ZONE, FILL_RECIPIENT_ZONE, } from "../reducer/zoneRecipient";
export default function RegionRecipient() {
    const dispatch = useDispatch()
    const {
        multilingual: { words },
        zoneRecipient: { provinces, districts, subdistricts, villages },
        dataReceiver: {
            province_receiver, city_receiver, district_receiver, subdistrict_receiver, district_code_receiver
        }
    } = useSelector(s => s)
    const [func_fetch_province, fetch_province_feedback] = useGet()
    const [func_fetch_district, fetch_district_feedback] = useGet()
    const [func_fetch_sub_district, fetch_sub_district_feedback] = useGet()
    const [func_fetch_village, fetch_village_feedback] = useGet()

    const [province] = useInputSelect()
    const [district] = useInputSelect()
    const [subdistrict] = useInputSelect()
    const [village] = useInputSelect()

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

    // #1 FILL ARRAY PROVINCES
    useEffect(() => {
        // set data province after success hit api province
        if (fetch_province_feedback.success) {
            dispatch({
                type: FILL_RECIPIENT_ZONE,
                field: 'provinces',
                value: fetch_province_feedback.success_res.data
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
            dispatch({
                type: UPDATE_VALUE_RECEIVER,
                field: 'province_receiver',
                value: province.value
            })
            dispatch({
                type: CLEAR_RECIPIENT_ZONE,
                clear: {
                    districts: true,
                    subdistricts: true,
                    villages: true
                }
            })
            fetch_district(province.value)
        }
    }, [province.value])

    useEffect(() => {
        // ##2
        // fetch function district after select province
        if (district.value !== "") {
            const city_text = districts.filter(data => data.id === district.value)
            console.log("city_text", city_text)
            dispatch({
                type: UPDATE_VALUE_RECEIVER,
                field: 'city_receiver',
                value: district.value
            })
            dispatch({
                type: CLEAR_RECIPIENT_ZONE,
                clear: {
                    subdistricts: true,
                    villages: true
                }
            })
            fetch_sub_district(district.value)
        }
    }, [district.value])

    useEffect(() => {
        // ##3
        if (subdistrict.value !== "") {
            dispatch({
                type: UPDATE_VALUE_RECEIVER,
                field: 'district_receiver',
                value: subdistrict.value
            })
            dispatch({
                type: CLEAR_RECIPIENT_ZONE,
                clear: {
                    villages: true
                }
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
                type: UPDATE_VALUE_RECEIVER,
                field: 'subdistrict_receiver',
                value: village.value
            })
            dispatch({
                type: UPDATE_VALUE_RECEIVER,
                field: 'district_code_receiver',
                value: code[0].district_code
            })
            dispatch({
                type: UPDATE_VALUE_RECEIVER,
                field: 'postalcode_receiver',
                value: code[0].postal_code
            })

            // dispatch({
            //     type: FILL_RECIPIENT_FULL_ZONE,
            //     value: code[0]
            // })
        }
    }, [village.value])

    useEffect(() => {
        // #2 FILL ARRAY DISTRICT / CITY (KABUPATEN / KOTA)
        if (fetch_district_feedback.success) {
            dispatch({
                type: FILL_RECIPIENT_ZONE,
                field: 'districts',
                value: fetch_district_feedback.success_res.data
            })
        }
    }, [fetch_district_feedback.success])

    // #3 FILL ARRAY SUB DISTRICT (KECAMATAN)
    useEffect(() => {
        if (fetch_sub_district_feedback.success) {
            dispatch({
                type: FILL_RECIPIENT_ZONE,
                field: 'subdistricts',
                value: fetch_sub_district_feedback.success_res.data,

            })
        }
    }, [fetch_sub_district_feedback.success])

    // #4 FILL ARRAY VILLAGES (KELURAHAN)
    useEffect(() => {
        if (fetch_village_feedback.success) {
            dispatch({
                type: FILL_RECIPIENT_ZONE,
                field: 'villages',
                value: fetch_village_feedback.success_res.data
            })
        }
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
