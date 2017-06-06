/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory,hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './App'
import Menu from '../components/Menu'
import {CONFIG} from '../constants/Config'
import NProgress from 'nprogress';
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

let All = (location,cb)=>{
    document.title = CONFIG.titleLoad;
    NProgress.start();
    require.ensure([],require =>{
        cb(null,require('../containers/All.js').default)
    },'all');
};


let Archive = (location,cb)=>{
    document.title = CONFIG.titleLoad;
    NProgress.start();
    require.ensure([],require =>{
        cb(null,require('../containers/Archive.js').default)
    },'archive');
};


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Route path="/all" getComponent={All}/>
        <Route path="/archive" getComponent={Archive}/>

    </Route>
);


const Root = () => (
    <Router history={hashHistory} routes={routes} />
);


export default Root;