/**
 * Created by chenkang1 on 2017/6/6.
 */
import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


export default function (preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    )
}