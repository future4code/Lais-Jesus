import { useState, useEffect } from "react"
import axios from "axios"

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData()
    }, [endpoint])

    const getData = () => {
        const token = window.localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz${endpoint}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }

    return [data, getData]
}

export default useRequestData