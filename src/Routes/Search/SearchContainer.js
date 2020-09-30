// import React, {useState} from 'react';
// import { movieApi, tvApi } from '../../api'
// import SearchPresenter from './SearchPresenter'


// const SearchContainer = () => {
//     const [keyword, setKeyword ] = useState("")
//     const [ results, setResults ] = useState({
//         movies : [],
//         shows : [],
//         movieError : null,
//         showError : null,
//         loading : false
//     })

//     const onChange = (e) => {
//        setKeyword(e.target.value)
//     }

//     const onSubmit = async () => {
        
//     }


//     return (
//        <SearchPresenter
//             {...results} 
//             onChange={onChange}
//             onSubmit={onSubmit}
//             keyword={keyword}
//        />
//     );
// };

// export default SearchContainer;

import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter'
import { movieApi, tvApi } from '../../api'

const SearchContainer = () => {
    const [ keyword, setKeyword] = useState("")
    const [ results, setResults] = useState({
        movieResults : [],
        tvResults : [],
        movieError : null,
        tvError : null,
        loading : false,
        error : null
    })

    const onChange = (e) => {
        setKeyword(e.target.value)
        console.log(e.target.value)
    }

    const onSubmit = async () => {
        // networking 태우기
        setResults({
            loading : true,
        })

        const [ movieResults, movieError ] = await movieApi.search(keyword)
        const [ tvResults, tvError] = await tvApi.search(keyword)

        setResults({
            movieResults : movieResults,
            tvResults : tvResults,
            movieError : movieError,
            tvError : tvError,
            loading : false,
        })


        console.log("search is ", movieResults)
    }



    return (
        <SearchPresenter 
            {...results}
            keyword={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );

};

export default SearchContainer;