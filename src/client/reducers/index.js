import { combineReducers } from "redux";
import columns from "./columnsReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
const reducer = combineReducers({ columns, loginReducer, userReducer });

export default reducer;
