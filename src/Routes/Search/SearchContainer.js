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

const SearchContainer = () => {
    const [ keyword, setKeyword] = useState("")
    const [ results, setResults] = useState({
        movieResults : [],
        tvResults : [],
        loading : false,
        error : null
    })

    return (

        <SearchPresenter />
    );
};

export default SearchContainer;