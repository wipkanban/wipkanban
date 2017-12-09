import React from 'react';
import {StaticRouter} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import PropTypes from 'prop-types';

const RouterFactory = ({server, location}) => {

    if (server) {
        return (
            <StaticRouter location={location} context={{}}>
                <Routes/>
            </StaticRouter>
        )
    }

    return (
        <Router>
            <Routes/>
        </Router>
    )

};

RouterFactory.propTypes = {
    server: PropTypes.bool,
    location: PropTypes.string
};

export default RouterFactory;