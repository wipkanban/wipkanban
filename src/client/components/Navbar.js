import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './Login/Logout'

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-faded">
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">WIPKanban</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </ul>
                <div>
                    <Logout />
                </div>
            </div>
        </nav>

    )
}

export default Navbar;