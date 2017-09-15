import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import BoardContainer from './components/board/BoardContainer';
import configureStore from './configureStore'
import {loadColumns} from './actions/boardActions';

const store = configureStore();

store.dispatch(loadColumns());

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
);

export default Root;