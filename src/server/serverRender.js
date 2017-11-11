import React from 'react'
import path from 'path'
import {renderToString} from 'react-dom/server'
import {Route, Switch} from 'react-router-dom'
import {StaticRouter} from 'react-router'
import template from './template'
import {Provider} from 'react-redux';
import configureStore from '../client/configureStore'
import App from '../client/App';
import FormLoginContainer from '../client/components/Login/FormLoginContainer';
import CreateAccountContainer from '../client/components/User/CreateAccountContainer';

export default function render(req, res) {

    const store = configureStore(true);
 
    const context = {};

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={FormLoginContainer}/>
                    <Route path="/create-account" component={CreateAccountContainer}/>
                </Switch>
            </StaticRouter>
        </Provider>
    );

    const status = 200;
    return res
        .status(status)
        .end(template(html, store.getState()));

}