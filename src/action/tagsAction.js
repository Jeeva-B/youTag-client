import axios from 'axios';
import { host } from '../constant/config';
import { SET_TAGS, SET_TAGS_BY_ID, SET_REQUESTING, CLEAR_TAGS, CLEAR_VIDEO_TAG, SET_REQUESTING_FOR_VIDEO_TAG } from './ActionCreator';

export const setTags = data => ({ type: SET_TAGS, payload: data });
export const setTagsById = data => ({ type: SET_TAGS_BY_ID, payload: data });
export const setRequesting = data => ({ type: SET_REQUESTING, payload: data });
export const setRequestingForVideoTag = data => ({ type: SET_REQUESTING_FOR_VIDEO_TAG, payload: data });
export const clearTags = isClearTag => ({ type: isClearTag === 'tag' ? CLEAR_TAGS : CLEAR_VIDEO_TAG });

// ------------------------------------------- call's -------------------------------------------------------------------------

export const getTags = title => dispatch => {
    dispatch(setRequesting(true));
    dispatch(clearTags('tag'));
    axios.get(`${host}/tags?title=${title}`, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
        if (!res.data.message && res.data) dispatch(setTags(res.data));
        else dispatch(setRequesting(false));
    }).catch(() => {
        dispatch(setRequesting(false));
    });
};

export const getTagsById = id => dispatch => {
    dispatch(setRequestingForVideoTag(true));
    dispatch(clearTags('videoTag'));
    axios.get(`${host}/tags/video?id=${id}`, {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
        if (!res.data.message && res.data) dispatch(setTagsById(res.data));
        else dispatch(setRequestingForVideoTag(false));
    }).catch(() => {
        dispatch(setRequestingForVideoTag(false));
    });
};
