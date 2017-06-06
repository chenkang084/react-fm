/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory,hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './App'
import Menu from '../components/Menu'
import Home from './Home'
import Blog from './Blog'
import Nav2 from './Nav2'

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>

    </Route>
);


const Root = () => (
    <Router history={hashHistory} routes={routes} />
);


export default Root;