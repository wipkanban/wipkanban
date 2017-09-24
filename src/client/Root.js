import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import BoardContainer from './components/board/BoardContainer';
import configureStore from './configureStore'
import {loadColumns} from './actions/boardActions';
import Task from './components/Modal/Task';
import Login from './components/Login/FormLogin';

const store = configureStore();

store.dispatch(loadColumns());

const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    </Provider>
);

export default Root;