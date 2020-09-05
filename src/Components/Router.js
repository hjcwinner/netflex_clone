import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "../Routes/Home"
import Search from "../Routes/Search"
import TV from "../Routes/TV"

export default () => {
    return (
       <Router>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/Search" exact component={Search} />
                <Redirect from="*" to="/" />
           </Switch>
       </Router>
    );
};
