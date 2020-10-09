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
        loading : true
    })

    const getData = async() => {
        const [ result, resultError] = location.pathname.includes("/movie/")
        ? await movieApi.detail(id)
        : await tvApi.detail(id)

        setItem({
            result : result,
            resultError : resultError,
            loading : false
        })
        console.log(result)
    }

    useEffect(() => {
        //networking
        getData()
    })

    return ( 
            <DetailPresenter {...item}/>
    );
};

export default DetailContainer;