import WelcomePage from "./WelcomePage";
import { connect } from "react-redux";
import { logout } from "../../actions/Login";
import { updateAccountUser } from "../../actions/User";

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

const mapDispatchToProps = dispatch => {
  return {
    onLogout() {
      dispatch(logout());
    },
    onUpdateAccountUser(user) {
      dispatch(updateAccountUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
