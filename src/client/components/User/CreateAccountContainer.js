import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/User';
import CreateAccount from './CreateAccount';

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount(name, lastname, email, password, confirmPassword) {

            dispatch(actions.createAccount(name, lastname, email, password));

        }
    }
};

const mapStateToProps = (state) => {
    return {state: state.userReducer}
};

const CreateAccountContainer = connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

export default CreateAccountContainer;