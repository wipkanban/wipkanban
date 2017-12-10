import React from "react";
import BoardContainer from "./components/board/BoardContainer";
import Task from "./components/Modal/Task";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return state.columns;
};
const App = ({ openModal }) => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <BoardContainer /> {openModal && <Task />}
      </div>
    </div>
  );
};

App.propTypes = {
  openModal: PropTypes.bool
};

export default connect(mapStateToProps)(App);
