import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Challenges from 'pages/Challenges';
import Challenge from 'pages/Challenge'
import Awards from 'pages/Awards'
import Teams from 'pages/Teams'
import Submit from 'pages/Submit'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/challenges/:id" component={Challenge} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/challenges?q=%27mychallenge%27" component={Challenges} />
            <Route exact path="/awards" component={Awards} />
            <Route exact path="/teams/:id" component={Teams} />
            <Route exact path="/submit" component={Submit} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
