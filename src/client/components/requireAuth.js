import React from "react";
import FormLoginContainer from "./Login/FormLoginContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  const mapStateToProps = state => ({
    authenticated: state.loginReducer.success
  });

  class Authentication extends React.Component {
    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }

      return <FormLoginContainer />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps)(Authentication);
}
