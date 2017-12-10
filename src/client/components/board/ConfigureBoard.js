import React, { Component } from "react";

class ConfigureBoard extends Component {
  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle btn-sm"
          data-toggle="dropdown"
        >
          <span className="fa fa-ellipsis-h" />
        </button>
        <ul className="dropdown-menu" role="menu">
          <li>
            <button id="btnExcluirQuadro">
              <span className="fa fa-trash-o" />
              Excluir quadro
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ConfigureBoard;
