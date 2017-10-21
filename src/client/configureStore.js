import {compose, createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore = (server = false) => {

    const store = createStore(reducer, server
        ? undefined
        : window.__PRELOADED_STATE__, composeWithDevTools(applyMiddleware(thunk)));

    return store;
}

export default configureStore;