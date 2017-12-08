import React from 'react';
import {Link} from 'react-router-dom'
import UserNavbar from './UserNavbar';
import BtnAddResources from './BtnAddResources'
const Navbar = ({user}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-murrey-dark py-1">
            <a className="navbar-brand" href="#">WIPKanban</a>
            <button className="navbar-toggler navbar-toggler-right" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Companies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Boards
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Teams
                        </a>
                    </li>
                </ul>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <BtnAddResources/> {user && <UserNavbar user={user}/>}
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;