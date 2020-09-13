import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './Header'
import Movie from '../Routes/Movies'
import Search from '../Routes/Search'
import Tv from "../Routes/Tv"

export default () => {
    return (
       <Router>
           <>
            <Header />
            <Switch>
                    <Route path="/" exact component={Movie} />
                    <Route path="/tv" exact component={Tv} />
                    <Route path="/Search" exact component={Search} />
                    <Redirect from="*" to="/" />
            </Switch>
           </>
       </Router>
    );
};
