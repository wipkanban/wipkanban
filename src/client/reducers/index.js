import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boardReducer from "./boardReducer";

const reducer = combineReducers({ userReducer, boardReducer });

export default reducer;
