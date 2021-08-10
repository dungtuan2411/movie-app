import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CommonReducer } from "./CommonReducer";
import { MovieReducer } from "./MovieReducer";

export const rootReducer = combineReducers({
    movie: MovieReducer,
    common: CommonReducer,
    auth: AuthReducer,
});
