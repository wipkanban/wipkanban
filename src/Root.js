import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import BoardContainer from './components/board/BoardContainer';
import configureStore from './configureStore'
import {loadColumns} from './actions/boardActions';
import Task from './components/Modal/Task';

const store = configureStore();

store.dispatch(loadColumns());

const Root = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route path="/task/:id" component={Task}/>
            </div>
        </Router>
    </Provider>
);

export default Root;