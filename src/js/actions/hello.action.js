import fetch from 'isomorphic-fetch';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../constants/ActionTypes.js';
import { CONFIG } from '../constants/Config.js';


export function helloAction() {

    return (dispatch) => {
        // dispatch({
        //     type: 'hh'
        // })

        fetch('https://api.github.com/repos/cobish/cobish.github.io/issues?fliter=created&per_page=10000')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveIssues(json))
            )
            .catch(e => {
                // window.location.href = href;
            });


        
    }
}