import React from 'react';
import {StaticRouter} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';

const RouterFactory = ({server}) => {

    if (server) {
        return (
            <StaticRouter>
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