import WelcomePage from "./WelcomePage";
import { connect } from "react-redux";
import { logout } from "../../actions/Login";
import { updateAccountUser } from "../../actions/User";
import { Dispatch } from "redux";

const mapStateToProps = ({ userReducer: { user } }: any) => ({ user });

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLogout() {
      dispatch(logout());
    },
    onUpdateAccountUser(user: Object) {
      dispatch(updateAccountUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
