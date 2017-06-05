/**
 * Created by chenkang1 on 2017/6/5.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


class Nav extends Component {
    render() {
        return (
            <div className="link">
                <Link to="/">home</Link>
                <Link to="/artciles">artciles</Link>
                <Link to="/blog">blog</Link>
                <Link to="/about">about me</Link>
            </div>
        )
    }
}

export default Nav