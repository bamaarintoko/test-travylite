import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from 'swr'
import { SECRET_KEY } from "./const";

// let host = "https://159.223.68.70/api/"
let host = "https://www.travylite.xyz/api/"

export function useGet() {
    const { authReducer: { access_token } } = useSelector(s => s)
    // console.log("access_token", access_token)
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
        // const access_token = access_token;
        const body = args;
        const url = `${host}${endpoint}`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,

            },
            params: args,
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
            console.log("error", e.message)
        })
    }
    const feedback = {
        success_res: successRes.data,
        error_res: errorRes,
        loading: loading,
        success: success,
        failed: failed,
        setFailed: setFailed,
        setSuccess: setSuccess
    }
    // console.log("feedback", feedback)
    // return [req, successRes, errorRes, loading, success, failed, setFailed, feedback]
    return [req, feedback]
}

export function usePostData(endpoint = "") {
    const { authReducer: { access_token } } = useSelector(s => s)
    const [successRes, setSuccessRes] = useState({})
    const [errorRes, setErrorRes] = useState({})

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    function req(args = {}) {
        setLoading(true)
        setSuccessRes({})
        setErrorRes({})
        // setLoading(false)
        setSuccess(false)
        setFailed(false)
        // const access_token = "";
        // const body = args;
        const url = `${host}${endpoint}`;
        console.log("url", url)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,

            },
            data: args,
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
            setSuccessRes({})
            setFailed(true)
            setSuccess(false)
            setLoading(false)
            console.log("error", e.response)
        })
    }
    const feedback = {
        success_res: successRes.data,
        error_res: errorRes,
        loading: loading,
        success: success,
        failed: failed,
        setFailed: setFailed,
        setSuccess: setSuccess
    }
    return [req, feedback]
}

export function usePost() {
    const { authReducer: { access_token } } = useSelector(s => s)
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
        // const access_token = "";
        // const body = args;
        const url = `${host}${endpoint}`;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,

            },
            data: args,
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
    const feedback = {
        success_res: successRes.data,
        error_res: errorRes,
        loading: loading,
        success: success,
        failed: failed,
        setFailed: setFailed,
        setSuccess: setSuccess
    }
    return [req, feedback]
}

export function verifyCaptcha() {
    const [captcha, setCaptcha] = useState("")
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)
    const [success_response, setSuccessResponse] = useState({})
    const [failed_response, setFailedResponse] = useState({})
    const url = `/api/verification`;

    console.log("captcha : ", captcha)
    function execute() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                captcha: captcha
            },
            url,
        };
        axios(options).then((res) => {
            setSuccess(true)
            setFailed(false)
            setSuccessResponse(res)
            setFailedResponse({})
            console.log("res : ", res)
        }).catch((e) => {
            setSuccess(false)
            setFailed(true)
            setSuccessResponse({})
            setFailedResponse(e)
            console.log("e : ", e)
        })
    }

    useEffect(() => {
        if (captcha !== "") {
            execute()
        }
    }, [captcha])
    const args = {
        captcha, setCaptcha, success, success_response, failed, failed_response
    }
    return [args]
}