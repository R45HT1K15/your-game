import { initialState } from '../initialState';
import * as types from '../types';

export const scoreReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_SCORES:
            return {
                ...state,
                scores: payload.scores,
            }

        case types.DEL_SCORES:
            return {
                ...state,
                scores: 0,
            }

        default:
            return state
    }
}