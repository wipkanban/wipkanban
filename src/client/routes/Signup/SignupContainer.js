import { connect } from "react-redux";
import { createAccount } from "../../actions/User";
import Signup from "./index";

const mapDispatchToProps = dispatch => {
  return {
    onCreateAccount(email, password) {
      dispatch(createAccount(email, password));
    }
  };
};

const mapStateToProps = state => {
  return { state: state.userReducer };
};

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(
  Signup
);

export default SignupContainer;
