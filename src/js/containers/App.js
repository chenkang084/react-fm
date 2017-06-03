/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Nav from './Nav'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Route path="/" component={Nav}>


    </Route>
);


const App = () => (
    <Router history={appHistory} routes={routes} />
)


export default App;