/**
 * Created by chenkang1 on 2017/6/3.
 */
import {combineReducers} from 'redux'
import mynav from './nav.reducer'
import test from './test.reducer'

export default combineReducers({
    mynav,
    test
})