import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';

const Routes = () => (
    //Navegação por barras (home/user/perfil)
    <BrowserRouter>
        {/* Só uma rota por vez */}
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;