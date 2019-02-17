import { connect } from "react-redux";
import { logout } from "../../../actions/Login";
import UserAccountSettings from "./UserAccountSettings";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLogout() {
      dispatch(logout());
    }
  };
};
``
const mapStateToProps = ({ userReducer: { user } }: any) => ({ user });

const UserAccountSettingsContainer: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccountSettings);

export default UserAccountSettingsContainer;
