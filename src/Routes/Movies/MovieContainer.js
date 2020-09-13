import React, { useEffect, useState } from 'react';
import { movieApi } from "../../api"
import MoviePresenter from "./MoviePresenter"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        topRate: [],
        nowPlayingError: null,
        popularError: null,
        topRateError: null,
        loading: true,
    })

    const getData = async () => {
        const [ nowPlaying, nowPlayingError ] = await movieApi.nowPlaying()
        const [ popular, popularError ] = await movieApi.popular()
        const [ topRate, topRateError ] = await movieApi.topRated()
        

        setMovies({
          nowPlaying: nowPlaying,
          popular: popular,
          topRate: topRate,
          nowPlayingError : nowPlayingError,
          popularError : popularError,
          topRateError : topRateError
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