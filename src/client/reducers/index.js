import {combineReducers} from 'redux';
import columns from './columnsReducer';
import loginReducer from './loginReducer';

const reducer = combineReducers({columns,loginReducer});

export default reducer;