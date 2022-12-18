import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { overallRaitingReducer } from "./overallRaitingReducer";
import { supertopicsReducer } from "./supertopicsReducer";
import { topicsReducer } from "./topicsReducer";

export const rootReducer = combineReducers ({
    profile: authReducer,
    supertopics: supertopicsReducer,
    topics: topicsReducer,
    overallRating: overallRaitingReducer
});