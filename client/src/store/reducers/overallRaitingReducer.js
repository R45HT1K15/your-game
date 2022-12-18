import { initialState } from '../initialState';
import * as types from '../types';

export const overallRaitingReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_OVERALRAITING:
            return {
                ...state,
                overallRating: payload.overallRating,
            }
            
        case types.DEL_OVERALRAITING:
            return {
                ...state,
                overallRating: [],
            }

        default:
            return state
    }
}