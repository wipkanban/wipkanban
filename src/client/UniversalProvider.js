import React from 'react';
import {Provider} from 'react-redux';
import RouterFactory from './routes/RouterFactory'

const UniversalProvider = ({
    server = false,
    store
}) => {

    return (
        <Provider store={store}>
            <RouterFactory server={server}/>
        </Provider>
    )
};

export default UniversalProvider;