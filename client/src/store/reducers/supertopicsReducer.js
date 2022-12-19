import { initialState } from '../initialState';
import * as types from '../types';

export const supertopicsReducer = ( state = initialState, action ) => {
    const { type, supertopics } = action;
    console.log('supertopics', supertopics, type)
    switch (type) {
        case types.ADD_SUPERTOPICS:
            return supertopics
            
        case types.DEL_SUPERTOPICS:
            return {
                ...state,
                supertopics: [],
            }

        default:
            return state
    }
}