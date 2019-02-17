import React from "react";
import FormLoginContainer from "./Login/LoginContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent: any) {
  const mapStateToProps = ({ userReducer: { success } }: any) => {
    return {
      authenticated: success
    };
  };

  const Authentication: React.StatelessComponent<any> = (props: any) => {
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
