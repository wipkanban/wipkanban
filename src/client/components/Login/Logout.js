import React from 'react';
import * as actions from '../../actions/Login';
import {connect} from 'react-redux'

const Logout = ({logout}) => {
    return (
        <a href="#" onClick={logout}>Logout</a>
    )
}

export default connect(undefined, {logout: actions.logout})(Logout);