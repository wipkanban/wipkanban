import React, {Component} from 'react'

class DescriptionBoard extends Component {

    render() {
        return (
            <div>
                <div className="col-lg-12"><br/>
                    <p className="lead text-black" id="descricaoQuadro">
                        DESCRICAO
                    </p>
                    <div
                        className="form-group hide col-lg-8 col-md-8 col-sm-12 col-xs-12"
                        id="campoDescricaoQuadro">
                        <textarea
                            rows="6"
                            name="descricao"
                            className="form-control"
                            defaultValue="descricao"></textarea>
                        <p className="text-right"><br/>
                            <button className="btn btn-success" id="btnSalvarDescricao">
                                Salvar
                                <span className="fa fa-check"></span>
                            </button>
                        </p>
                    </div>
                    <div className="clearfix"></div>
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#tasks" data-toggle="tab">Quadro</a>
                        </li>
                        <li>
                            <a href="#dashboard" data-toggle="tab" id="carregarDashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="#team" data-toggle="tab">Time</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default DescriptionBoard;