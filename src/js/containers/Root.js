/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory,hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './App'
import Nav from './Nav'
import Nav2 from './Nav2'

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Route path="/" component={App}>
        <Route path="/Nav" component={Nav}/>
        <Route path="/Nav2" component={Nav2}/>

    </Route>
);


const Root = () => (
    <Router history={hashHistory} routes={routes} />
)


export default Root;