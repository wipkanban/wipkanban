import React from 'react'
import {renderToString} from 'react-dom/server'
import template from './template'
import configureStore from '../client/configureStore'
import UniversalProvider from '../client/UniversalProvider';

export default function render(req, res) {

    const store = configureStore(true);

    const context = {};

    const html = renderToString(<UniversalProvider server={true} store={store}/>);

    const status = 200;
    return res
        .status(status)
        .end(template(html, store.getState()));

}