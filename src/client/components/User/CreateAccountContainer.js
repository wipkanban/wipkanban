import { connect } from "react-redux";
import { createAccount } from "../../actions/User";
import CreateAccount from "./CreateAccount";

const mapDispatchToProps = dispatch => {
  return {
    createAccount(email, password) {
      dispatch(createAccount(email, password));
    }
  };
};

const mapStateToProps = state => {
  return { state: state.userReducer };
};

const CreateAccountContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateAccount
);

export default CreateAccountContainer;
