import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";

// vai combinar todos os reducers

const rootReducer = combineReducers({ 
    todo: todoReducer
})

export default rootReducer