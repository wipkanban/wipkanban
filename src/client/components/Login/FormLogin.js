import React from 'react';
import {Redirect, Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const FormLogin = ({
    state: {
        success,
        message
    },
    onLogin
}) => {
    let email;
    let password;
    
    if ((typeof window !== 'undefined') && window.localStorage.getItem('token')) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container">
            <div
                className="row justify-content-md-center justify-content-sm-center align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-murrey">
                            <h2 className="text-center text-white">WIPKanban</h2>
                        </div>
                        <p
                            className={success
                            ? 'alert-success'
                            : 'alert-danger'}>
                            {message}
                        </p>
                        <div className="card-body">
                            <form
                                onSubmit={(event) => onLogin(email.value, password.value, event)}
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
                                        email = node;
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
                                    <button className="btn btn-murrey btn-lg">
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

FormLogin.propTypes = {
    state: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default FormLogin;