import { connect } from "react-redux";
import { login } from "../../actions/Login";
import FormLogin from "./index";

const mapDispatchToProps = dispatch => {
  return {
    onLogin(email, password) {
      dispatch(login(email.value, password.value));
    }
  };
};

const mapStateToProps = state => ({ state: state.userReducer });

const FormLoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  FormLogin
);

export default FormLoginContainer;
