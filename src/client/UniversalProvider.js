import React from 'react';
import {Provider} from 'react-redux';
import RouterFactory from './routes/RouterFactory'
import configureStore from './configureStore'

const UniversalProvider = ({
    server = false,
    location,
    store
}) => {

    return (
        <Provider store={store}>
            <RouterFactory location={location} server={server}/>
        </Provider>
    )
};

export default UniversalProvider;