// @flow
import * as React from "react";
import BoardContainer from "./components/board/BoardContainer";
import Task from "./components/Modal/Task";
import { connect } from "react-redux";

const mapStateToProps: (state: Object) => Array<{}> = state => {
  return state.columns;
};

type Props = {
  openModal: boolean
};

const App: (props: Props) => React.Element<"div"> = ({
  openModal
}: Props): React.Element<"div"> => {
  return (
    <div>
      <div className="container-fluid">
        <BoardContainer /> {openModal && <Task />}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(App);
