import axios from 'axios';
import { host } from '../constant/config';
import { SET_TAGS, SET_REQUESTING, CLEAR_TAGS } from './ActionCreator';

export const setTags = data => ({ type: SET_TAGS, payload: data });
export const setRequesting = data => ({ type: SET_REQUESTING, payload: data });
export const clearTags = () => ({ type: CLEAR_TAGS });

// ------------------------------------------- call's -------------------------------------------------------------------------

export const getTags = title => dispatch => {
    dispatch(setRequesting(true));
    dispatch(clearTags());
    axios.get(`${host}/tags?title=${title}`, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
        if (!res.data.message && res.data) dispatch(setTags(res.data));
        else dispatch(setRequesting(false));
    }).catch(() => {
        dispatch(setRequesting(false));
    });
};