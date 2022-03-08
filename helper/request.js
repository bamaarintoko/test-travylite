import axios from "axios";
import { useState } from "react";
import useSWR from 'swr'

let host = "http://159.223.68.70/api/"

export function useGet() {

}

export function usePost() {
    const [successRes, setSuccessRes] = useState({})
    const [errorRes, setErrorRes] = useState({})

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    function req(args = {}, endpoint = "") {
        setLoading(true)
        setSuccessRes({})
        setErrorRes({})
        // setLoading(false)
        setSuccess(false)
        setFailed(false)
        const access_token = "";
        const body = args;
        const url = `${host}${endpoint}`;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,

            },
            data: body,
            url,
        };
        axios(options).then((res) => {
            console.log("res", res)
            setSuccessRes(res)
            setFailed(false)
            setSuccess(true)
            setLoading(false)
        }).catch((e) => {
            setErrorRes(e.response)
            setFailed(true)
            setSuccess(false)
            setLoading(false)
            console.log("error", e.response)
        })
    }

    return [req, successRes, errorRes, loading, success, failed, setFailed]
}