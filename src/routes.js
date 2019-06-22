import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Character from './pages/Character';
import Episode from './pages/Episode';
import Sugestion from './pages/Sugestion';

function routes() {
    return (
        <Switch>
            <Route exact path="/" component={Character} />
            <Route path="/episode" component={Episode} />
            <Route path="/sugestion" component={Sugestion} />
        </Switch>
    );
}

export default routes;