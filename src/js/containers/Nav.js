/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Link } from 'react-router';


const Nav = () => (
    <div className="link">
        <Link to="/">全部</Link>
        <Link to="/">归档</Link>
        <Link to="/">标签</Link>
    </div>
)


export default Nav;