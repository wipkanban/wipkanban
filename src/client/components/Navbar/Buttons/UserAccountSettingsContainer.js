import { connect } from "react-redux";
import { logout } from "../../../actions/Login";
import UserAccountSettings from "./UserAccountSettings";

const mapDispatchToProps = dispatch => {
  return {
    onLogout() {
      dispatch(logout());
    }
  };
};

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

const UserAccountSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccountSettings);

export default UserAccountSettingsContainer;
