import React from 'react';
import {Link} from 'react-router-dom';

const AccountCreated = () => {
    return (
        <div className="text-center">
            <h1>Your account has been successfully created.<br/> Click the link below to login</h1>
            <p>
                <Link to="/login" className="btn btn-success">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default AccountCreated;