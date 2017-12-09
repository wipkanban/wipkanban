import React from 'react';
import {logout} from '../../actions/Login';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const Logout = ({logout}) => {
    return (
        <a className="dropdown-item" href="#" onClick={logout}>
            <i className="fa fa-power-off"></i>&nbsp; Logout
        </a>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(undefined, {logout})(Logout);