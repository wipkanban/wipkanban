import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/Login';
import {Redirect, Link} from 'react-router-dom'

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(username, password, event) {

            dispatch(actions.login(username, password));
            event.preventDefault();
        }
    }
};

const mapStateToProps = (state) => {
    return {state: state.loginReducer}
};

const FormLogin = ({state, onLogin}) => {
    let username;
    let password;

    let user = window
        .localStorage
        .getItem('user');

    if (user !== null) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container">
            <div
                className="row justify-content-md-center justify-content-sm-center align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-primary">
                            <h2 className="text-center text-white">WIPKanban</h2>
                        </div>
                        <div className="card-body">
                            <form
                                onSubmit={(event) => onLogin(username, password, event)}
                                method="post"
                                action="/api/v1/login">
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
                                        username = node;
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Password:</strong>
                                    </label>
                                    <input
                                        required="required"
                                        placeholder="Type your password"
                                        className="form-control form-control-lg"
                                        type="password"
                                        ref={node => {
                                        password = node
                                    }}/>
                                    <a className="text-danger" href="#">I forgot my password</a><br/>
                                </div>
                                <div className="form-group text-right">
                                    <button className="btn btn-primary btn-lg">
                                        Login
                                        <i className="fa fa-check"></i>
                                    </button>
                                </div>
                                <small>
                                    <Link to="/create-account" className="text-dark">
                                        <strong>No account yet? Create one now!</strong>
                                    </Link>
                                </small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);