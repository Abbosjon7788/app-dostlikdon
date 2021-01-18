import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {adminNewsReducer} from "./adminNewsReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    news: adminNewsReducer
});