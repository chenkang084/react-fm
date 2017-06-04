/**
 * Created by chenkang1 on 2017/6/3.
 */
import React from 'react'
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import {Link} from 'react-router';
import {connect} from 'react-redux'

const Nav2 = ({mynav, test, dispatch}) => {

    dispatch({type: 'test'})

    return (
        <div className="link">
            <Link to="/">全部2</Link>
            <Link to="/">归档2</Link>
            <Link to="/">标签2</Link>
        </div>
    )
}


const mapStateToProps = state => ({
    mynav: state.mynav,
    test: state.test,
})

export default connect(mapStateToProps)(Nav2);