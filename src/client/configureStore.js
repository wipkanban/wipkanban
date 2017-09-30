import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = (server = false) => {

    const store = createStore(reducer, server
        ? undefined
        : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

    return store;
}

export default configureStore;