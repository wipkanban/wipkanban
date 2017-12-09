import React from 'react';
import PropTypes from 'prop-types';

const Markers = ({markers}) => {
    return (
        <div className="col-lg-6 col-md-6">
            <p>Marcadores |
                <a href="#" id="mostrarForm">+ Adicionar
                    <span className="fa fa-tag"></span>
                </a>
            </p>
            <div className="form-group form-inline hide" id="formMarcador">
                <input
                    id="inputMarcador"
                    type="text"
                    className="form-control"
                    placeholder="nome do marcador (opcional)"/>
                <div className="btn-group">
                    <button
                        id="btnCor"
                        type="button"
                        className="btn  dropdown-toggle"
                        data-toggle="dropdown">
                        Cor
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li>
                            <a
                                style={{
                                backgroundColor: "#00a651"
                            }}
                                className="btn btn-success btn-block btnMarcador"><br/></a>
                        </li>
                        <li>
                            <a
                                style={{
                                backgroundColor: "rgb(250, 216, 57)"
                            }}
                                className="btn btn-warning btn-block btnMarcador">disrcunstancial</a>
                        </li>
                        <li>
                            <a
                                style={{
                                backgroundColor: "rgb(169, 30, 30)"
                            }}
                                className="btn btn-danger btn-block btnMarcador">urgente</a>

                        </li>
                        <li>
                            <a
                                style={{
                                backgroundColor: "rgb(0, 89, 147)"
                            }}
                                className="btn btn-blue btn-block btnMarcador">importante</a>
                        </li>
                        <li>
                            <a className="btn  btn-block">+ cores</a>
                        </li>
                    </ul>
                </div>
                <button id="btnAdicionarMarcador" className="btn ">Adicionar
                    <span className="fa fa-tag"></span>
                </button>
            </div>
            <div id="containerMarcadores">
                {markers.map(marker => (
                    <div
                        key={marker.id}
                        className="badge"
                        title="Clique uma vez para remover"
                        style={{
                        backgroundColor: marker.color
                    }}>
                        {marker.name}
                        <span className="fa fa-tag"></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

Markers.propTypes = {
    markers: PropTypes.array.isRequired
}

export default Markers;