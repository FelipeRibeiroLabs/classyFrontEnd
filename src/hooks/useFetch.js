import axios from 'axios'
import {useState, useEffect} from 'react'


const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

const checkStatus = response => {
    if(response.ok){
        return response.data
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then( e => {
            error.error = e;
        });
        return Promise.reject(error)
    }
}

export function useFetch(url) {
    
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        api.get(url)
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(err => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [data])

    return {data, isFetching, error}
}