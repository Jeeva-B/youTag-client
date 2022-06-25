import { SET_REQUESTING, SET_REQUESTING_FOR_VIDEO_TAG, SET_TAGS, SET_TAGS_BY_ID, CLEAR_TAGS, CLEAR_VIDEO_TAG } from "../action/ActionCreator";

const initialState = {
    isRequesting: false,
    tags: [],
    isRequestingForVideoTag: false,
    videoTags: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAGS: {
            state = { ...state, tags: action.payload, isRequesting: false };
            break;
        }

        case SET_REQUESTING: {
            state = { ...state, isRequesting: action.payload };
            break;
        }

        case CLEAR_TAGS: {
            state = { ...state, tags: [] };
            break;
        }

        case SET_TAGS_BY_ID: {
            state = { ...state, videoTags: action.payload, isRequestingForVideoTag: false };
            break;
        }

        case SET_REQUESTING_FOR_VIDEO_TAG: {
            state = { ...state, isRequestingForVideoTag: action.payload };
            break;
        }

        case CLEAR_VIDEO_TAG: {
            state = { ...state, videoTags: [] };
            break;
        }

        default:
            break;
    }
    return state;
};
