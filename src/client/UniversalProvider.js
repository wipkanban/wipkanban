import React from 'react';
import {Provider} from 'react-redux';
import RouterFactory from './routes/RouterFactory';
import PropTypes from 'prop-types';

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

UniversalProvider.propTypes = {
    server: PropTypes.bool,
    location: PropTypes.string,
    store: PropTypes.object.isRequired
};

export default UniversalProvider;