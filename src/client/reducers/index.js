import { combineReducers } from "redux";
import columns from "./columnsReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({ columns, userReducer });

export default reducer;
