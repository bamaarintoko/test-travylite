import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGet } from "../helper/request";
import { FILL_BOOTHS } from "../reducer/boothTravyliteReducer";

export default function useGetBoothTravylite() {
    const dispatch = useDispatch()
    const [fetch_booth, response_booth] = useGet()

    function execute() {
        fetch_booth({}, "port")
    }

    useEffect(() => {
        console.log("response_booth : ", response_booth)
        if (response_booth.success) {
            dispatch({
                type: FILL_BOOTHS,
                value: response_booth.success_res.data
            })
        }
    }, [response_booth.success, response_booth.failed])
    const args = {
        execute,
        response: response_booth
    }

    return [args]
}