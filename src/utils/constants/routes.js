import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Challenges from 'pages/Challenges';
import Awards from 'pages/Awards'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/awards" component={Awards} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
