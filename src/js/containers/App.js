/**
 * Created by chenkang1 on 2017/6/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {CONFIG} from '../constants/Config';
import NProgress from 'nprogress'

class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isFetching) {
            document.title = CONFIG.title;
            NProgress.done();
        }

        console.log('app receive props')
    }

    render() {
        return (
            <div>
                <div id="logo">
                    <a href="#/">cobish.github.io</a>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        isFetching,
        items
    } = state || {
        isFetching: true,
        items: []
    };

    return {
        isFetching,
        items
    }
};

export default connect(mapStateToProps)(App);