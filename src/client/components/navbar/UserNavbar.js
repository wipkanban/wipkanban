import React from "react";
import Logout from "../Login/Logout";
import ButtonDropDownContainer from "./ButtonDropDownContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserNavbar = ({ user, toggleDropDown, dropdownClass }) => {
  return (
    <li className="nav-item dropdown">
      <a
        onClick={toggleDropDown}
        className="nav-link dropdown-toggle no-padding"
        href="#"
      >
        <img
          style={{
            marginTop: "2px"
          }}
          width="30"
          src={user.image}
          title={`${user.name} ${user.lastname}`}
          className="rounded-circle"
        />
      </a>
      <div className={dropdownClass}>
        <h6 className="dropdown-header">{`${user.name} ${user.lastname}`}</h6>
        <Link to="/myaccount" className="dropdown-item">
          <i className="fa fa-user" />&nbsp; My account
        </Link>
        <div className="dropdown-divider" />
        <Logout />
      </div>
    </li>
  );
};

UserNavbar.propTypes = {
  user: PropTypes.object.isRequired,
  toggleDropDown: PropTypes.func.isRequired,
  dropdownClass: PropTypes.string.isRequired
};

export default ButtonDropDownContainer(UserNavbar);
