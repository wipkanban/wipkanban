import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Preloader from '../Prealoder';
import PropTypes from 'prop-types';

class CreateAccount extends Component {

    constructor() {
        super();
    }

    handleSubmit(e) {

        const {createAccount} = this.props;

        createAccount(
            this.name.value, 
            this.lastname.value, 
            this.email.value, 
            this.password.value, 
            this.confirmPassword.value
        );

        e.preventDefault();
    }

    render() {

        let {
            state: {
                showPreloader,
                success,
                message
            }
        } = this.props;

        if(success){
            return <Redirect to="/account-created" />
        }

        return (
            <div className="container-fluid no-padding">

                {showPreloader && <Preloader/>}
                <div
                    className="row justify-content-md-center justify-content-sm-center align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                        <br/>
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h2 className="text-center text-white">Create Account</h2>
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={this
                                    .handleSubmit
                                    .bind(this)}>
                                    <div className="form-group">
                                        <label>
                                            <strong>Name:</strong>
                                        </label>
                                        <input
                                            placeholder="Type your name"
                                            className="form-control form-control-lg"
                                            type="text"
                                            ref={(el) => {
                                                this.name = el;
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <strong>Last Name:</strong>
                                        </label>
                                        <input
                                            placeholder="Type your last name"
                                            className="form-control form-control-lg"
                                            type="text"
                                            ref={(el) => {
                                                this.lastname = el;
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <strong>Email:</strong>
                                        </label>
                                        <input
                                            placeholder="Type your email"
                                            className="form-control form-control-lg"
                                            type="email"
                                            ref={(el) => {
                                                this.email = el;
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <strong>Passowrd:</strong>
                                        </label>
                                        <input
                                            placeholder="Type your password"
                                            className="form-control form-control-lg"
                                            type="password"
                                            ref={(el) => {
                                                this.password = el;
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <strong>Confirm password:</strong>
                                        </label>
                                        <input
                                            placeholder="Confirm your password"
                                            className="form-control form-control-lg"
                                            type="password"
                                            ref={(el) => {
                                                this.confirmPassword = el;
                                            }}/>

                                    </div>

                                    {message !== null && <div
                                        className={`alert alert-${success
                                        ? 'success'
                                        : 'danger'}`}>
                                        <p>{message}</p>
                                    </div>}
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
}

CreateAccount.propTypes = {
    state:PropTypes.object.isRequired,
    createAccount:PropTypes.func.isRequired
}

export default CreateAccount;