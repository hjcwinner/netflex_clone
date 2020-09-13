import React, { useEffect, useState } from 'react';
import { movieApi } from "../../api"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null,
        loading: true,
    })

    const getData = async () => {
        const [ nowPlaying, nowPlayingError ] = await movieApi.nowPlaying()
        const [ popular, popularError ] = await movieApi.popular()
        const [ upcoming, upcomingError ] = await movieApi.upcoming()
        

        setMovies({
          nowPlaying: nowPlaying,
          popular: popular,
          upcoming: upcoming,
          nowPlayingError : nowPlayingError,
          popularError : popularError,
          upcomingError : upcomingError
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