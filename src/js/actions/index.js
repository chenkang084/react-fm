/**
 * Created by chenkang1 on 2017/6/6.
 */
import fetch from 'isomorphic-fetch'
import {REQUEST_ISSUES, RECEIVE_ISSUES} from '../constants/ActionTypes'
import { CONFIG } from '../constants/Config.js';

function requestIssues(filter, perPage) {
    return {
        type: REQUEST_ISSUES,
        filter,
        perPage
    }
}

function receiveIssues(json) {
    return {
        type: RECEIVE_ISSUES,
        posts: json
    }
}

export function fetchIssues(filter, perPage, getState) {
    return (dispatch, getState) => {
        dispatch(requestIssues(filter,perPage));

        let url = `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/issues`,
            href = `https://github.com/${CONFIG.owner}/${CONFIG.repo}/issues`;

        url += `?filter=${filter}&per_page=${perPage}`;

        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveIssues(json)))
            .catch(e => {
                // window.location.href = href;
                console.log(e)
            })
    }
}

function shouldFetchIssues(state) {
    if (!state){
        return true;
    }

    return !state.items.length;
}

export function fetchIssuesIfNeeded(filter,perPage) {
    return function (dispatch,getState) {
        if (shouldFetchIssues(getState())){
            return dispatch(fetchIssues(filter,perPage,getState))
        }else {
            return Promise.resolve()
        }
    }
}