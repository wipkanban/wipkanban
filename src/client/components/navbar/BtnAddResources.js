import React from 'react';
import ButtonDropDownContainer from './ButtonDropDownContainer';
import PropTypes from 'prop-types';

const BtnAddResources = ({dropdownClass, toggleDropDown}) => {

    return (
        <li className="nav-item dropdown active">
            <a onClick={toggleDropDown} className="nav-link" href="#">
                <i className="fa fa-plus"></i>
            </a>
            <div className={dropdownClass}>
                <a title="Add a new company" className="dropdown-item" href="#">
                    <i className="fa fa-plus"></i>&nbsp; Add company
                </a>
                <a title="Add a new project" className="dropdown-item" href="#">
                    <i className="fa fa-plus"></i>&nbsp; Add project
                </a>
                <a title="Add a new board" className="dropdown-item" href="#">
                    <i className="fa fa-plus"></i>&nbsp; Add board
                </a>
                <a title="Add a new team" className="dropdown-item" href="#">
                    <i className="fa fa-plus"></i>&nbsp; Add team
                </a>
                <a title="Add a new user" className="dropdown-item" href="#">
                    <i className="fa fa-plus"></i>&nbsp; Add user
                </a>
            </div>
        </li>
    )

}

BtnAddResources.propTypes = {
    dropdownClass: PropTypes.string.isRequired,
    toggleDropDown: PropTypes.func.isRequired
};

export default ButtonDropDownContainer(BtnAddResources);