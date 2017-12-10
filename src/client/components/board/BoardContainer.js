import React from "react";
import Board from "./Board";

const BoardContainer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content">
            <div className="tab-pane" id="dashboard" />

            <div className="tab-pane active">
              <br />
              <Board />

              <div id="gantt" className="hide">
                <br />
                <div id="gantt_chart" />
              </div>
            </div>
            <div className="tab-pane" id="team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardContainer;
