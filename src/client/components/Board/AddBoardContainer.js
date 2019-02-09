import { connect } from "react-redux";
import AddBoard from "./AddBoard";
import { addBoard as createBoard } from "../../actions/Board";

const mapDispatchToProps = dispatch => {
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
