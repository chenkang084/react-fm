/**
 * Created by chenkang1 on 2017/6/3.
 */
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'
import configureStore from './stores'
import "../css/index.scss"


let store = configureStore();

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);