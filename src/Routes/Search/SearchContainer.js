import React, {useState} from 'react';
import { movieApi, tvApi } from '../../api'
import SearchPresenter from './SearchPresenter'


const SearchContainer = () => {
    const [keyword, setKeyword ] = useState("")
    const [ results, setResults ] = useState({
        movies : [],
        shows : [],
        movieError : null,
        showError : null,
        loading : false
    })

    const onChange = (text) => {
       setKeyword(text)
    }

    const onSubmit = async () => {

    }


    return (
       <SearchPresenter
            {...results} 
            onChange={onChange}
            onSubmit={onSubmit}
            keyword={keyword}
       />
    );
};

export default SearchContainer;