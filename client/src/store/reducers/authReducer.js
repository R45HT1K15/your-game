import { initialState } from '../initialState';
import * as types from '../types';

export const authReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    console.log('payload', payload)
    switch (type) {
        case types.ADD_PROFILE:
            return {
                ...state,
                id: payload.id,
                name: payload.name,
                rating: payload.rating
            }
            
        case types.DEL_PROFILE:
            return {
                ...state,
                id: 0,
                name: '',
            }

        default:
            return state
    }
}