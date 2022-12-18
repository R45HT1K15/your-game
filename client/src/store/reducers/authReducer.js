import { initialState } from '../initialState';
import * as types from '../types';

export const authReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_PROFILE:
            return {
                ...state,
                id: payload.id,
                name: payload.name,
            }
            
        case types.DEL_PROFILE:
            return {
                ...state,
                id: 'id',
                name: 'name',
            }

        default:
            return state
    }
}