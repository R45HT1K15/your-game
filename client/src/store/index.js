import { createStore } from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
)