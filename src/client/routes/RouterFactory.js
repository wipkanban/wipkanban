import React from 'react';
import {StaticRouter} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';

const RouterFactory = ({server, location}) => {

    if (server) {
        return (
            <StaticRouter location={location} context={{}}>
                <Routes/>
            </StaticRouter>
        )
    } else {
        return (
            <Router>
                <Routes/>
            </Router>
        )
    }

};

export default RouterFactory;