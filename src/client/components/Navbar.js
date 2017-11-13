import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './Login/Logout'

const Navbar = (props) => {
    
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
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link no-padding">
                                <img
                                    style={{
                                    marginTop: '2px'
                                }}
                                    width="30"
                                    src="/images/734-foto-apresentacao_small.jpg"
                                    title="Robisson Oliveira"
                                    className="rounded-circle"/>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;