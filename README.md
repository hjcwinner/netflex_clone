## 주요기능
----------
* API 연동 및 받아온 정보 뿌려주기
* 인기영화, 상영영화, 영화세부내용 etc. 구현
* Movie, TV Show 메인화면 구현 (Popular, ComingSoon, Top Rated 영역)
* 검색페이지 구현, 검색 후 Movie, Tv Results 키워드 서칭에 맞게 결과 출력

## 완성 화면
----------
![movie](https://user-images.githubusercontent.com/67583080/96332484-30d45b80-109f-11eb-85a0-9c80dad0eefd.PNG)![tv](https://user-images.githubusercontent.com/67583080/96332487-32058880-109f-11eb-9b0b-d9ab3ed8c0a6.PNG)![search](https://user-images.githubusercontent.com/67583080/96332489-32058880-109f-11eb-8c49-98d6e4759078.PNG)![detail](https://user-images.githubusercontent.com/67583080/96332490-329e1f00-109f-11eb-978d-6c9c92741de8.PNG)

## 활용한 기술
----------
* react-router-dom{ HashRouter as Router, Route, Switch, Redirect, Link, withRouter, useParams, useLocation }
* Hook(useState, useEffect)
* axios를 이용한 Api 연동
* styled-components 이용한 css

## 스터디노트
------------
#### react-router-dom을 이용한 nav bar 만들고 적용하기
~~~
import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20 , 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 5px solid
        ${(props) => (props.current ? "#3498db" : "transparent")};
        transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default withRouter(({ location : { pathname }}) => (
       <Head>
           <List>
               <Item current={pathname === "/"}>
                    <SLink to="/">Movie</SLink>
               </Item>
               <Item current={pathname === "/tv"}>
                    <SLink to="/tv">Tv</SLink>
               </Item>
               <Item current={pathname === "/search"}>
                    <SLink to="/search">Search</SLink>
               </Item>
           </List>
       </Head>
    ));
~~~
    
#### react-router-dom을 이용한 Route에 component연결하기
~~~
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../Components/Header'

import Movie from '../Routes/Movies'
import Tv from '../Routes/Tvs'
import Search from '../Routes/Search'
import Detail from '../Routes/Detail'

const Routerb = () => {
    return (
      <Router>
          <Header />
          <Switch>
                <Route path="/" exact component={Movie}/>
                <Route path="/tv" exact component={Tv}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/movie/:id" exact component={Detail}/>
                <Route path="/tv/:id" exact component={Detail}/>
                <Redirect from="*" to="/" />
          </Switch>
      </Router>
    );
};

export default Routerb;
~~~

------------
#### _Axios를 이용한 API연동

* 비동기 방식으로 api를 불러오는 함수 만들기
* TMDB 사이트의 API를 활용하여 원하는 영화정보(Popular, upcoming, topRated, search, detail) 함수 만들기
~~~
import axios from 'axios'

const TMDB_KEY = "14c0fcc2177720bb7965296dc6ea68ad"

const makeRequest = (path, params) =>
    axios(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
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
    catch (e){
        return [null, e]
    }
}

export const movieApi = {
    nowPlaying : () => getAnything("/movie/now_playing"),
    popular : () => getAnything("/movie/popular"),
    topRated : () => getAnything("/movie/top_rated"),
    search: (query) => getAnything("/search/movie", {query}),
    detail: (movie_id) => getAnything(`/movie/${movie_id}`)
}

export const tvApi = {
    today : () => getAnything("/tv/airing_today"),
    popular : () => getAnything("/tv/popular"),
    topRate : () => getAnything("/tv/top_rated"),
    thisWeek : () => getAnything("/tv/on_the_air"),
    search : (query) => getAnything("/search/tv", {query}),
    detail: (tv_id) => getAnything(`/tv/${tv_id}`)
}
~~~

#### _Hook을 이용한 Keyword 검색_

* useState을 이용해 초기 상태값 정하기
* 키워드가 빈칸일 경우 return(비동기방식) 키워드가 있다면 상태값 변경
* 키워드에 대한 결과값이 0이 아니면 결과 출력
~~~
import React, {useState} from 'react';
import { movieApi, tvApi } from '../../api'
import SearchPresenter from './SearchPresenter'


const SearchContainer = () => { 
    const [ keyword, setKeyword ] = useState("")
    const [ results, setResults ] = useState({
        movies : [],
        show : [],
        movieError : null,
        showError : null,
        loading :  false
    })
    const onChange = (e) => {
        setKeyword(e.target.value)
        console.log(e.target.value)
    }

    const onSubmit = async () => {
        setResults({
            loading : true
        })

        const [ movies, movieError] = await movieApi.search(keyword)
        const [ show, showError] = await tvApi.search(keyword)

        setResults({
            movies : movies,
            show : show,
            movieError : movieError,
            showError : showError,
            loading : false
        })
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
~~~

#### _Hook과 react-router-dom 이용한 detail 만들기
~~~
import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { movieApi, tvApi } from '../../api'
import DetailPresenter from './DetailPresenter'


const DetailContainer = ({pathname}) => {

    let { id } = useParams()
    let location = useLocation()

    const [ result, setResult ] = useState({
        result : {},
        resultError : null,
        loading : true
    })

    const getData = async() => {
        const [ result, resultError ] = location.pathname.includes("/movie/") 
        ? await movieApi.detail(id) 
        : await tvApi.detail(id)

        setResult({
            result : result,
            resultError : resultError,
            loading : false
        })
    }

    useEffect(() => {
        getData()
    }, [id])


    return (
        <div>
            <DetailPresenter {...result}/>
        </div>
    );
};

export default DetailContainer;
~~~

## TO DO LIST
✔︎ 프로젝트 위주의 react 공부

✔︎ react-native를 활용한 앱 출시하기

✔︎ 보유한 node-js 기술을 접목한 풀스택 개발 & 서비스 런칭

✔︎ Database에 관련된 공부
