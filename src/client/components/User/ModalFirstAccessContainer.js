import { connect } from "react-redux";
import ModalFirstAccess from "./ModalFirstAccess";
import { setFirstAccess } from "../../actions/User";

let mapDispachToProps = dispatch => {
  return {
    onUpdateProfile() {
      dispatch({});
    },
    onCloseModal(userId) {
      dispatch(setFirstAccess(userId, false));
    }
  };
};

const mapStateToProps = ({ userReducer: { user } }) => ({ user: user });

let ModalFirstAccessContainer = connect(mapStateToProps, mapDispachToProps)(
  ModalFirstAccess
);

export default ModalFirstAccessContainer;
