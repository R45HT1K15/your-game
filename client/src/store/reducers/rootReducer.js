import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { supertopicsReducer } from "./supertopicsReducer";

export const rootReducer = combineReducers ({
    profile: authReducer,
    supertopics: supertopicsReducer
});