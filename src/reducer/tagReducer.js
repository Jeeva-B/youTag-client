import { SET_REQUESTING, SET_TAGS, CLEAR_TAGS } from "../action/ActionCreator";

const initialState = {
    isRequesting: false,
    tags: [],
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

        default:
            break;
    }
    return state;
};
