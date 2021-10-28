import React from "react";
import {Switch, Route, BrowserRouter,useHistory } from 'react-router-dom';

import Login from "./pages/Login"
import Home from "./pages/Home"
import Content from "./pages/Content"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/content" component={Content} />
            </Switch> 
        </BrowserRouter>
    )
}