import { connect } from "react-redux";
import ModalFirstAccess from "./ModalFirstAccess";
import { setFirstAccess } from "../../actions/User";

let mapDispachToProps = dispatch => {
  return {
    onUpdateProfile() {
      dispatch({});
    },
    onCloseModal() {
      dispatch(setFirstAccess(false));
    }
  };
};

const mapStateToProps = ({userReducer:{user}}) => ({ user: user });

let ModalFirstAccessContainer = connect(mapStateToProps, mapDispachToProps)(
  ModalFirstAccess
);

export default ModalFirstAccessContainer;
