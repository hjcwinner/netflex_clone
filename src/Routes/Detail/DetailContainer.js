import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { movieApi, tvApi} from '../../api'
import DetailPresenter from './DetailPresenter'

const DetailContainer = ({pathname}) => {
    let { id } = useParams()
    let location = useLocation()

    const [item, setItem] = useState({
        result: {},
        resultError : null,
        similar : {},
        similarError : null,
        keyword : [],
        keywordError : null,
        loading : true
    })


    const getData = async() => {
        const [ result, resultError] = location.pathname.includes("/movie/")
        ? await movieApi.detail(id)
        : await tvApi.detail(id)

        const [ similar, similarError] = location.pathname.includes("/movie/")
        ? await movieApi.similar(id)
        : await tvApi.similar(id)

        const [ keyword, keywordError] = location.pathname.includes("/movie/")
        ? await movieApi.keyword(id)
        : await tvApi.keyword(id)

        setItem({
            result : result,
            resultError : resultError,
            similar : similar,
            similarError : similarError,
            keyword : keyword.keywords ? keyword.keywords : keyword.results,
            keywordError : keywordError,
            loading : false
        })
        console.log("+++++++++++++++++++++++++++++++++",keyword)
    }

    useEffect(() => {
        //networking
        getData()
    }, [id])

    return ( 
            <DetailPresenter 
            {...item}
            />
    );
};

export default DetailContainer;
