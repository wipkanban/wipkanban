import { connect } from "react-redux";
import AddBoard from "./AddBoard";
import { addBoard as createBoard } from "../../actions/Board";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addBoard(name: String) {
      dispatch(createBoard(name));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddBoard);
