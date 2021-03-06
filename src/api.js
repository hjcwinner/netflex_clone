import axios from 'axios'

const TMDB_KEY = "14c0fcc2177720bb7965296dc6ea68ad"

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        }
    })

const getAnything = async (path, params = {}) => {
    try{
        const {
            data: { results },
            data,
        } = await makeRequest(path, params)
        return [results || data, null]

    }
    catch (e) {
        return [null, e]
    }
}


export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    topRated: () => getAnything("/movie/top_rated"),
    upcoming: () => getAnything("/movie/upcoming"),
    search: (query) => getAnything("/search/movie", {query}),
    detail: (movie_id) => getAnything(`/movie/${movie_id}`),
    similar: (movie_id) => getAnything(`/movie/${movie_id}/similar`),
    keyword: (movie_id) => getAnything(`/movie/${movie_id}/keywords`)
}

export const tvApi = {
    today : () => getAnything("/tv/airing_today"),
    popular : () => getAnything("/tv/popular"),
    topRate : () => getAnything("/tv/top_rated"),
    thisWeek : () => getAnything("/tv/on_the_air"),
    search: (query) => getAnything("/search/tv", {query}),
    detail : (tv_id) => getAnything(`/tv/${tv_id}`),
    similar: (tv_id) => getAnything(`/tv/${tv_id}/similar`),
    keyword: (tv_id) => getAnything(`/tv/${tv_id}/keywords`)
}

