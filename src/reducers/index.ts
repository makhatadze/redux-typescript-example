import {combineReducers} from "redux";
import {todosReducer} from "./todos";


export const reducers = combineReducers({
   counter: () => 1,
   todos: todosReducer
});