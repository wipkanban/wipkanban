import React from 'react';
import {Link} from 'react-router-dom'
import Logout from './Login/Logout'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-murrey-dark py-1">
                <a className="navbar-brand" href="#">WIPKanban</a>
                <button className="navbar-toggler navbar-toggler-right" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Guarida Imóveis&nbsp;
                                <i className="fa fa-chevron-down"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                |
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Projeto Inova&nbsp;
                                <i className="fa fa-chevron-down"></i>
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-murrey py-0">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-chevron-left"></i>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <i className="fa fa-tasks"></i>
                                &nbsp;Kanban
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-dashboard"></i>
                                &nbsp;Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-users"></i>
                                &nbsp;Members
                            </a>
                        </li>
                    </ul>
                    <div>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-filter"></i>
                                    &nbsp;Filters
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;