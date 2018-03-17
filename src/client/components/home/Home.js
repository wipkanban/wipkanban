import React from "react";
import NavbarContainer from "../navbar/NavbarContainer";
import { Link } from "react-router-dom";
import SubNav from "./SubNav";
import PropTypes from "prop-types";
import ModalFirstAccessContainer from "../User/ModalFirstAccessContainer";

const Home = ({ user:{firstAccess} }) => {

  return (
    <div>
      {firstAccess && <ModalFirstAccessContainer />}
      <NavbarContainer />
      <SubNav />
      <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h6>
              My companies&nbsp;|&nbsp;
              <Link to="/companys" className="text-murrey">
                View all
              </Link>
            </h6>
            <br />
            <h5>You do not have any registered companies yet.</h5>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6>
              My projetcs&nbsp;|&nbsp;
              <Link to="/projetcs" className="text-murrey">
                View all
              </Link>
            </h6>
            <h5>You do not have any registered projects yet.</h5>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>
              My boards&nbsp;|&nbsp;
              <Link to="/boards" className="text-murrey">
                View all
              </Link>
            </h6>
            <h5>You do not have any registered boards yet.</h5>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>
              My teams&nbsp;|&nbsp;
              <Link to="/boards" className="text-murrey">
                View all
              </Link>
            </h6>
            <h5>You do not have any registered teams yet.</h5>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired
};

export default Home;
