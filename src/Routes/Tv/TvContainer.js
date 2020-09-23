import React, { useEffect, useState } from 'react';
import { tvApi } from "../../api"
import TvPresenter from "./TvPresenter"

const TvContainer = () => {
    const [tv, setTvs] = useState({
        today : [],
        popular : [],
        topRate : [],
        thisWeek : [],
        todayError : null,
        popularError : null,
        topRateError : null,
        thisWeekError : null,
        loading : true
    })
    
    const getData = async () => {
        const [ today, todayError ] = await tvApi.today()
        const [ popular, popularError ] = await tvApi.popular()
        const [ topRate, topRateError ] = await tvApi.topRate()
        const [ thisWeek, thisWeekError ] = await tvApi.thisweek()

        setTvs({
            today: today,
            popular: popular,
            topRate : topRate,
            thisWeek : thisWeek,
            todayError : todayError,
            popularError : popularError,
            topRateError : topRateError,
            thisWeekError : thisWeekError,
            loading : false
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
           <TvPresenter {...tv} />
    );
};

export default TvContainer;