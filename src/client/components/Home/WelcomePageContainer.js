import WelcomePage from "./WelcomePage";
import { connect } from "react-redux";
import { logout } from "../../actions/Login";

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

const mapDispatchToProps = dispatch => {
  return {
    onLogout() {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
