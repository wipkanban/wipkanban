//@flow
import React from "react";
import { connect } from "react-redux";
import BoardList from "./BoardList";
import { listAllBoards } from "../../actions/Board";

const mapDispatchToProps = dispatch => {
  return {
    listAllBoards(idUser: Number) {
      dispatch(listAllBoards(idUser));
    }
  };
};

const mapStateToProps = ({ boardReducer: boards }) => {
  return { boards: boards };
};

type Props = {
  listAllBoards: Function,
  boards: Array<Object>
};

class BoardListContainer extends React.Component<Props> {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.props.listAllBoards(user._id);
  }

  render() {
    return <BoardList boards={this.props.boards} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardListContainer);
