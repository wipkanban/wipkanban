import { connect } from "react-redux";
import { login, oauthFacebook } from "../../actions/Login";
import FormLogin from "./index";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLogin(email: string, password: string) {
      dispatch(login(email, password));
    },
    oauthFacebook(accessToken: string) {
      dispatch(oauthFacebook(accessToken));
    }
  };
};

const mapStateToProps = (state:any) => ({ state: state.userReducer });

const FormLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLogin);

export default FormLoginContainer;
