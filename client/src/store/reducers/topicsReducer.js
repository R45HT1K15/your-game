import { initialState } from '../initialState';
import * as types from '../types';

export const topicsReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_TOPICS:
            return {
                ...state,
                supertopics: payload.topics,
            }
            
        case types.DEL_TOPICS:
            return {
                ...state,
                supertopics: [],
            }

        default:
            return state
    }
}