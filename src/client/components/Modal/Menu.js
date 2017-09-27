import React from 'react';

const Menu = () => {
    return (
        <div>
            <a id="addChecklist" href="#" className="btn btn-sm btn-primary">
                <span className="fa fa-check-square"></span>
                Checklist
            </a>
            <span id="containerDataTarefa">
                <span>
                    <a href="#" id="btnMostrarDatepicker" className="hide btn btn-sm btn-primary">
                        <span className="fa fa-calendar"></span>
                        Definir data
                    </a>
                    <span id="datePickerDataTarefa" className="hide">
                        <input
                            size="8"
                            maxLength="10"
                            type="text"
                            defaultValue="14/08/2017"
                            className="datepicker text-center"/>
                        <button id="btnDefinirData" className="btn btn-success btn-sm">OK</button>
                    </span>
                    <span className="" id="dataSelecionada">
                        <span className="badge badge-success">
                            <input type="checkbox"/>
                            <span title="Clique para alterar a data" id="dataTarefa">14/08/2017</span>
                        </span>
                        <button id="btnRemover" className="btn btn-sm btn-danger" title="Remover data">
                            <i className="fa fa-remove"></i>
                        </button>
                    </span>
                </span>
            </span>
            <a id="btnMarcarTempo" href="#" className="btn btn-sm btn-primary">
                <span className="fa fa-clock-o"></span>
                Marcar tempo
            </a>
            <a href="#" className="btn btn-sm btn-danger" id="excluirTarefa">
                <span className="fa fa-remove"></span>
                Excluir
            </a>
        </div>
    );
}

export default Menu;