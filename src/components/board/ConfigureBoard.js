import React, {Component} from 'react'

class ConfigureBoard extends Component {
    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-default dropdown-toggle btn-xs"
                    data-toggle="dropdown">
                    <span className="fa fa-ellipsis-h"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                    <li>
                        <a href="#" id="btnExcluirQuadro">
                            <span className="fa fa-trash-o"></span>
                            Excluir quadro
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ConfigureBoard;