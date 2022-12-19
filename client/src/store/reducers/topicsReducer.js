import { initialState } from '../initialState';
import * as types from '../types';

export const topicsReducer = ( state = initialState, action ) => {
    const { type, topics } = action;
    switch (type) {
        case types.ADD_TOPICS:
            
            return topics;

        case types.DEL_TOPICS:
            return {
                ...state,
                topics: '',
            }

        default:
            return state
    }
}