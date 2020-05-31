import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Challenges from 'pages/Challenges';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/challenges" component={Challenges} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
