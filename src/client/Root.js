import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import BoardContainer from './components/board/BoardContainer';
import configureStore from './configureStore'
import {loadColumns} from './actions/boardActions';
import Task from './components/Modal/Task';
import Login from './components/Login/FormLogin';
import CreateAccountContainer from './components/User/CreateAccountContainer';

const store = configureStore();

store.dispatch(loadColumns());

const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/create-account" component={CreateAccountContainer}/>
            </Switch>
        </Router>
    </Provider>
);

export default Root;