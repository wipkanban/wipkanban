import React from "react";
import FormLoginContainer from "./Login/FormLoginContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  const mapStateToProps = ({ userReducer: { success } }) => {

    return {
      authenticated: success
    };
  };

  const Authentication = props => {
    if (props.authenticated) {
      return <ComposedComponent {...props} />;
    }

    return <FormLoginContainer />;
  };

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps)(Authentication);
}
