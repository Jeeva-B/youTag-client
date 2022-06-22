import axios from 'axios';
import { host } from '../constant/config';
import { SET_TAGS, SET_REQUESTING } from './ActionCreator';

export const setTags = data => ({ type: SET_TAGS, payload: data });
export const setRequesting = data => ({ type: SET_REQUESTING, payload: data });

// ------------------------------------------- call's -------------------------------------------------------------------------

export const getTags = title => dispatch => {
    dispatch(setRequesting(true));
    axios.get(`${host}/tags?title=${title}`, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
        if (!res.data.message && res.data) dispatch(setTags(res.data));
        else dispatch(setRequesting(false));
    }).catch(() => {
        dispatch(setRequesting(false));
    });
};