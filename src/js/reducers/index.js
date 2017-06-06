/**
 * Created by chenkang1 on 2017/6/3.
 */
import {combineReducers} from 'redux'
import mynav from './home.reducer'
import test from './blog.reducer'

export default combineReducers({
    mynav,
    test
})