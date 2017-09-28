import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/User';

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateAccount(name, lastname, email, password, confirmPassword, event) {

            dispatch(actions.createAccount(name, lastname, email, password));
            event.preventDefault();
        }
    }
};

const mapStateToProps = (state) => {
    return {state: state.userReducer}
};

const createAccount = ({state,onCreateAccount}) => {
    let name;
    let lastname;
    let email;
    let password;
    let confirmPassword;
    

    return (
        <div className="container-fluid no-padding">
            <div
                className="row justify-content-md-center justify-content-sm-center align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-primary">
                            <h2 className="text-center text-white">Create Account</h2>
                        </div>
                        <div className="card-body">
                            <form method="post" action="/"
                                onSubmit={(event) => onCreateAccount(name, lastname, email, password, confirmPassword, event)}>
                                <div className="form-group">
                                    <label>
                                        <strong>Name:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Type your name"
                                        className="form-control form-control-lg"
                                        type="text"
                                        ref={node => {
                                        name = node;
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Last Name:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Type your last name"
                                        className="form-control form-control-lg"
                                        type="text"
                                        ref={node => {
                                        lastname = node;
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Email:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Type your email"
                                        className="form-control form-control-lg"
                                        type="email"
                                        ref={node => {
                                        email = node;
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Passowrd:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Type your password"
                                        className="form-control form-control-lg"
                                        type="password"
                                        ref={node => {
                                        password = node;
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Confirm password:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Confirm your password"
                                        className="form-control form-control-lg"
                                        type="password"
                                        ref={node => {
                                        confirmPassword = node
                                    }}/>

                                </div>
                                <div className="form-group">
                                    <Link to="/" className="btn btn-lg float-left text-dark">
                                        <i className="fa fa-arrow-left"></i>
                                        Go back
                                    </Link>
                                    <button className="btn btn-primary btn-lg float-right">
                                        Create
                                        <i className="fa fa-check"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(createAccount);