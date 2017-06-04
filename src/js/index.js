/**
 * Created by chenkang1 on 2017/6/3.
 */
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import reducer from './reducers'
import Root from './containers/Root'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ];


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store} >
        <Root/>
    </Provider>
    ,
    document.getElementById('root')
)