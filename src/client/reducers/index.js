import {combineReducers} from 'redux';
import columns from './columnsReducer';

const reducer = combineReducers({columns});

export default reducer;