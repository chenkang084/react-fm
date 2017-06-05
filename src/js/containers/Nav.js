/**
 * Created by chenkang1 on 2017/6/5.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Nav, NavItem} from 'react-bootstrap';

class TopNav extends Component {
    render() {
        return (
            <Nav bsStyle="pills" activeKey={1} >
                <NavItem eventKey={1} href="#/home">Home</NavItem>
                <NavItem eventKey={2} href="#/blog">Blog</NavItem>
                <NavItem eventKey={3} disabled>Articles</NavItem>
            </Nav>
        )
    }
}

export default TopNav