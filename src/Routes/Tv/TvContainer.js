import React, { useEffect, useState } from 'react';
import { tvApi } from "../../api"

const TvContainer = () => {
    const[tv, setMovies] = useState({
        results: [],
        error: null,
    })
    
    const getData = async () => {
        const [ results, error ] = await tvApi.today()
        setMovies({
            results: results,
            error
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>tvdata is {tv.results.length}</h1>
        </div>
    );
};

export default TvContainer;