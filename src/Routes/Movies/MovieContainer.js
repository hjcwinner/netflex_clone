import React, { useEffect, useState } from 'react';
import { movieApi } from "../../api"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        results: [],
        error: null,
    })

    const getData = async () => {
        const [ results, error ] = await movieApi.nowPlaying()
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
            <h1>{movies.results.length}</h1>
        </div>
    );
};

export default MovieContainer;