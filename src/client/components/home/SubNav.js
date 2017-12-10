import React from "react";

const SubNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-murrey py-0">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a title="Add a new company" className="nav-link" href="#">
              <i className="fa fa-plus" />
              &nbsp;Company
            </a>
          </li>
          <li className="nav-item">
            <a title="Add a new project" className="nav-link" href="#">
              <i className="fa fa-plus" />
              &nbsp;Project
            </a>
          </li>
          <li className="nav-item">
            <a title="Add a new board" className="nav-link" href="#">
              <i className="fa fa-plus" />
              &nbsp;Board
            </a>
          </li>
          <li className="nav-item">
            <a title="Add a new team" className="nav-link" href="#">
              <i className="fa fa-plus" />
              &nbsp;Team
            </a>
          </li>
          <li className="nav-item">
            <a title="Add a new user" className="nav-link" href="#">
              <i className="fa fa-plus" />
              &nbsp;User
            </a>
          </li>
        </ul>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                title="How does it work ?"
                className="nav-link text-white"
                href="#"
              >
                <i className="fa fa-question-circle-o" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
