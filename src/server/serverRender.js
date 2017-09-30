import React from 'react'
import {renderToString} from 'react-dom/server'
import {Route, Switch} from 'react-router-dom'
import {StaticRouter} from 'react-router'
import template from './template'
import {Provider} from 'react-redux';
import configureStore from '../client/configureStore'
import App from '../client/App';
import Login from '../client/components/Login/FormLogin';
import createAccount from '../client/components/User/createAccount';

export default function render(req, res) {

    const store = configureStore(true);
    const context = {};

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/create-account" component={createAccount}/>
                </Switch>
            </StaticRouter>
        </Provider>
    );

    const status = 200;
    res
        .status(status)
        .send(template(html, {}))

}