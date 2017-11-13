import React from 'react';

const SubNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-murrey py-0">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"></i>
                            &nbsp;Company
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"></i>
                            &nbsp;Project
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"></i>
                            &nbsp;Board
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SubNav;