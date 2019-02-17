import { connect } from "react-redux";
import { createAccount } from "../../actions/User";
import Signup from "./index";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onCreateAccount(email: string, password: string) {
      dispatch(createAccount(email, password));
    }
  };
};

const mapStateToProps = ({
  userReducer: { success, message, showPreloader }
}: any) => {
  return {
    success,
    message,
    showPreloader
  };
};

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default SignupContainer;
