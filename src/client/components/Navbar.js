import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './Login/Logout'

const Navbar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-toggleable-md navbar-dark bg-murrey-dark py-1">
                <button className="navbar-toggler navbar-toggler-right" type="button">
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
                        <Logout/>
                    </div>
                </div>
            </nav>
            <nav
                className="navbar navbar-expand-lg navbar-toggleable-md navbar-dark bg-murrey py-0">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Board</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Membros</a>
                        </li>
                    </ul>
                    <div>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Filtros</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;