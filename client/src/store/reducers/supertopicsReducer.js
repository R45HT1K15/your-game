import { initialState } from '../initialState';
import * as types from '../types';

export const supertopicsReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_SUPERTOPICS:
            return {
                ...state,
                supertopics: payload.supertopics,
            }
            
        case types.DEL_SUPERTOPICS:
            return {
                ...state,
                supertopics: [],
            }

        default:
            return state
    }
}