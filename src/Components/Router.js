import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './Header'
import Home from "../Routes/Home"
import Search from "../Routes/Search"
import TV from "../Routes/TV"

export default () => {
    return (
       <Router>
           <>
            <Header />
            <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" exact component={TV} />
                    <Route path="/Search" exact component={Search} />
                    <Redirect from="*" to="/" />
            </Switch>
           </>
       </Router>
    );
};
