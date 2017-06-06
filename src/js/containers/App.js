/**
 * Created by chenkang1 on 2017/6/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

class App extends Component {

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