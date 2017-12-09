import React from 'react';
import Logout from '../Login/Logout'
import ButtonDropDownContainer from './ButtonDropDownContainer';
import PropTypes from 'prop-types';

const UserNavbar = ({user, toggleDropDown, dropdownClass}) => {

    return (
        <li className="nav-item dropdown">
            <a
                onClick={toggleDropDown}
                className="nav-link dropdown-toggle no-padding"
                href="#">
                <img
                    style={{
                    marginTop: '2px'
                }}
                    width="30"
                    src={user.image}
                    title={`${user.name} ${user.lastname}`}
                    className="rounded-circle"/>
            </a>
            <div className={dropdownClass}>
                <h6 className="dropdown-header">{`${user.name} ${user.lastname}`}</h6>
                <a className="dropdown-item" href="#">
                    <i className="fa fa-user"></i>&nbsp; My account
                </a>
                <div className="dropdown-divider"></div>
                <Logout/>
            </div>
        </li>
    )
}

UserNavbar.propTypes = {
    user: PropTypes.object.isRequired,
    toggleDropDown: PropTypes.func.isRequired,
    dropdownClass: PropTypes.string.isRequired
};

export default ButtonDropDownContainer(UserNavbar);