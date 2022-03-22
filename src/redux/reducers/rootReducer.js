import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import {scenesReducer} from './scenesReducer';

export const rootReducer = combineReducers({
    news: newsReducer,
    scene: scenesReducer,
})