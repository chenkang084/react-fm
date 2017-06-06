/**
 * Created by chenkang1 on 2017/6/3.
 */
import {REQUEST_ISSUES,RECEIVE_ISSUES} from "../constants/ActionTypes"
import objectAssign from 'object-assign'
const defaultIssuesState = {
    isFetching:false,
    items:[]
};

function postIssues(defaultIssuesState,action) {
    switch (action.type){
        case REQUEST_ISSUES:
            return objectAssign({},defaultIssuesState,{
                isFetching:true
            });
        case RECEIVE_ISSUES:
            return objectAssign({},defaultIssuesState,{
                isFetching:false,
                items:action.posts
            });
        default:
            return defaultIssuesState;
    }
}

export default postIssues;
