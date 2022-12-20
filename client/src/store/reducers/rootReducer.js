import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { overallRaitingReducer } from "./overallRaitingReducer";
import { supertopicsReducer } from "./supertopicsReducer";
import { scoreReducer } from "./scoreReducer";

export const rootReducer = combineReducers ({
    profile: authReducer,
    supertopics: supertopicsReducer,
    scores: scoreReducer,
    overallRating: overallRaitingReducer
});