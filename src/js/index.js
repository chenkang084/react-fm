/**
 * Created by chenkang1 on 2017/6/3.
 */
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import reducer from './reducers'
import App from './containers/App'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)