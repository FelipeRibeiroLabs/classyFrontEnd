import axios from 'axios'
import {useState, useEffect} from 'react'


const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export function useFetch(url) {
    
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        api.get(url)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return {data, isFetching, error}
}