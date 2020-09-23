import React, { useEffect, useState } from 'react';
import { movieApi } from "../../api"
import MoviePresenter from "./MoviePresenter"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        topRate: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        topRateError: null,
        upcomingError: null,
        loading: true,
    })

    const getData = async () => {
        const [ nowPlaying, nowPlayingError ] = await movieApi.nowPlaying()
        const [ popular, popularError ] = await movieApi.popular()
        const [ topRate, topRateError ] = await movieApi.topRated()
        const [ upcoming, upcomingError] = await movieApi.upcoming()
        

        setMovies({
          nowPlaying: nowPlaying,
          popular: popular,
          topRate: topRate,
          upcoming: upcoming,
          nowPlayingError : nowPlayingError,
          popularError : popularError,
          topRateError : topRateError,
          upcomingError: upcomingError,
          loading : false
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <MoviePresenter {...movies} />
    );
};

export default MovieContainer;