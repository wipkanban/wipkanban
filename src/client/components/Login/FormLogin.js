import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/Login';

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(username, password) {

            dispatch(actions.login(username, password));

        }
    }
};

const FormLogin = ({onLogin}) => {
    let username;
    let password;

    return (
        <div className="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
            <div className="form-group">
                <label>Email:</label>
                <input
                    className="form-control input-lg"
                    type="text"
                    ref={node => {
                    username = node
                }}/>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    className="form-control input-lg"
                    type="text"
                    ref={node => {
                    password = node
                }}/>
            </div>
            <div className="form-group text-right">
                <button onClick={() => onLogin(username, password)} className="btn btn-success btn-lg">Entrar</button>
            </div>

        </div>
    )
};

export default connect(null, mapDispatchToProps)(FormLogin);