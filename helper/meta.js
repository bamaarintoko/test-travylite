import axios from "axios"

let host = "http://159.223.68.70/api/"

export const fetcher = (url, args, access_token) => axios.get({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token,

    },
    data: body,
    url: `${host}${url}`,
}).then(res => res.data)
