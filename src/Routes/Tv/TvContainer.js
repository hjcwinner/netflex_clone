import React, { useEffect, useState } from 'react';
import { tvApi } from "../../api"

const TvContainer = () => {
    const [tv, setTvs] = useState({
        today : [],
        popular : [],
        topRate : [],
        thisweek : [],
        todayError : null,
        popularError : null,
        topRateError : null,
        thisweekError : null
    })
    
    const getData = async () => {
        const [ today, todayError ] = await tvApi.today()
        const [ popular, popularError ] = await tvApi.popular()
        const [ topRate, topRateError ] = await tvApi.topRate()
        const [ thisweek, thisweekError ] = await tvApi.thisweek()

        setTvs({
            today: today,
            popular: popular,
            topRate : topRate,
            thisweek : thisweek,
            todayError : todayError,
            popularError : popularError,
            topRateError : topRateError,
            thisweekError : thisweekError
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