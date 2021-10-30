import React from "react";
import {Switch, Route, BrowserRouter,useHistory } from 'react-router-dom';

import Login from "./pages/Login"
import Home from "./pages/Home"
import Posts from "./pages/posts"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/posts" component={Posts} />
            </Switch> 
        </BrowserRouter>
    )
}