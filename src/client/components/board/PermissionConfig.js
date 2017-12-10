import React, { Component } from "react";

class PermissionConfig extends Component {
  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle btn-sm"
          data-toggle="dropdown"
        >
          <span className="fa fa-lock" />
          <span className="caret" />
        </button>
        <ul className="dropdown-menu" role="menu">
          <li>
            <a href="#1" className="visibilidade">
              Apenas eu e pessoas específicas (time)
              <br />
              podem ver e contribuir com o quadro.
            </a>
          </li>
          <li className="divider" />

          <li>
            <a href="#3" className="visibilidade">
              Qualquer pessoa da Guarida pode ver e
              <br />contribuir no quadro.
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PermissionConfig;
