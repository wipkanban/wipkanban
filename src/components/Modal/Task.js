import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/Task'
import findDomNode from 'react-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal(event) {

            if (event.target.getAttribute('role') === 'dialog' || event.target.getAttribute('role') == 'close-button') {
                dispatch(actions.closeModal());
            }
        }
    }
};

const mapStateToProps = state => {

    return {
        data: {
            ...state.columns.modalData
        }
    }
}

const Task = ({match,data, onCloseModal}) => {
    document.body.classList.add('modal-open'); 
    return (
        <div>
            <div className="modal-backdrop fade in"></div>
            <div
                onClick={onCloseModal}
                className="modal fade in"
                id="modalTarefa"
                role="dialog"
                data-idtarefa="513"
                aria-hidden="false"
                style={{
                display: "block"
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div id="modal-is-dragover"></div>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                <span onClick={onCloseModal} role="close-button" aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <h3 className="modal-title">
                                <b>{data.title}</b>
                                <input
                                    type="text"
                                    className="form-control hide nomeTarefa"
                                    defaultValue={data.title}/>
                            </h3>

                            <i>criado por</i>
                            ROBISSON CARDOSO DE OLIVEIRA<i>
                                na coluna
                            </i>Aguardando retorno
                            <br/><br/>
                            <div>
                                <a id="addChecklist" href="#" className="btn btn-xs btn-primary">
                                    <span className="fa fa-check-square"></span>
                                    Checklist
                                </a>
                                <span id="containerDataTarefa">
                                    <span>
                                        <a href="#" id="btnMostrarDatepicker" className="hide btn btn-xs btn-primary">
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
                                            <button id="btnDefinirData" className="btn btn-success btn-xs">OK</button>
                                        </span>
                                        <span className="" id="dataSelecionada">
                                            <span className="label label-success">
                                                <input type="checkbox"/>
                                                <span title="Clique para alterar a data" id="dataTarefa">14/08/2017</span>
                                            </span>
                                            <button id="btnRemover" className="btn btn-xs btn-danger" title="Remover data">
                                                <i className="fa fa-remove"></i>
                                            </button>
                                        </span>
                                    </span>
                                </span>
                                <a id="btnMarcarTempo" href="#" className="btn btn-xs btn-primary">
                                    <span className="fa fa-clock-o"></span>
                                    Marcar tempo
                                </a>
                                <a href="#" className="btn btn-xs btn-danger" id="excluirTarefa">
                                    <span className="fa fa-remove"></span>
                                    Excluir
                                </a>
                            </div><hr/>

                            <div className="row" id="marcarTempo">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right ">
                                    <h1>01:02:01</h1>
                                    <button title="Marcar tempo" id="btnPlay" className="btn btn-primary hide">
                                        <i className="fa fa-play"></i>
                                    </button>
                                    <button title="Pausar contador" id="btnPause" className="btn btn-default">
                                        <i className="fa fa-pause"></i>
                                    </button>
                                    <button title="Para contador e zerar" id="btnStop" className="btn btn-default">
                                        <i className="fa fa-stop"></i>
                                    </button>
                                    <button title="Concluir marcador" id="btnConcluir" className="btn btn-success">
                                        <i className="fa fa-check"></i>
                                    </button>
                                    <div id="reiniciarTempo" className="hide">
                                        <span className="label label-success">TEMPO CONCLUÌDO</span><br/><br/>
                                        <a id="btnReiniciarTempo" href="#" className="text-danger">
                                            <i className="fa fa-clock-o"></i>
                                            reiniciar tempo
                                        </a>
                                        <a></a>
                                    </div>
                                    <a>
                                        <hr/>

                                    </a>
                                </div>
                            </div>
                            <div className="row" id="membrosEMarcadores">
                                <div className="col-lg-6 col-md-6">
                                    <p id="pAdicionarMembros">Membros |
                                        <a id="adicionarMembros" href="#">+ Adicionar
                                            <span className="fa fa-users"></span>
                                        </a>
                                    </p>

                                    <p id="containerMembros">
                                        {data
                                            .membros
                                            .map(membro => (
                                                <div key={membro.idusuario}>
                                                    <img src={membro.image} title={membro.nome} width="30" className="img-circle"/><br/>
                                                    <a title="Remover membro" className="text-danger" href="#">remover</a>
                                                </div>
                                            ))}
                                    </p>
                                    <div className="clearfix"></div>
                                </div>
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
                                                className="btn btn-default dropdown-toggle"
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
                                                    <a className="btn btn-default btn-block">+ cores</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <button id="btnAdicionarMarcador" className="btn btn-default">Adicionar
                                            <span className="fa fa-tag"></span>
                                        </button>
                                    </div>
                                    <div id="containerMarcadores">
                                        {data
                                            .markers
                                            .map(marker => (
                                                <div
                                                    key={marker.id}
                                                    className="label"
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
                            </div>
                            <div className="row" id="containerChecklist">
                                <div id="nomeChecklist" className="hide">
                                    <hr/>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite o nome do checklist e aperte enter"/>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <h4>
                                    <b>Descrição:</b>
                                </h4>
                                <div id="descricao">Adicionar descrição</div>

                            </div>
                            <p>
                                <a id="btnAnexos" href="#">+ Anexos
                                    <i className="fa fa-files-o"></i>
                                </a>
                            </p><hr/>
                            <div id="containerAnexos">
                                <div>
                                    <form
                                        id="formAnexos"
                                        className="box text-center hide"
                                        method="post"
                                        action="/inova/QuadroTarefas/uploadAnexos"
                                        encType="multipart/form-data">
                                        <br/>
                                        <input className="box__file" type="file" name="files[]" id="file" multiple=""/>
                                        <label htmlFor="file">
                                            <h3>Clique aqui or arraste e solte os arquivos</h3>
                                        </label><br/>
                                    </form>

                                    <div id="anexosTarefa"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <hr/>
                                    <p>
                                        <b>Comentários</b>
                                    </p>
                                    <div id="containerComentarios">
                                        <div className="comentario" data-idcomentario="272">
                                            <img
                                                src="/guarida/server-ftp/programas/usuarios/funcionarios/361-foto-apresentacao_small.jpg"
                                                title="ROBISSON CARDOSO DE OLIVEIRA"
                                                className="pull-left img-circle"
                                                width="30"/>
                                            <a
                                                title="Editar comentário"
                                                href="#"
                                                className="btnEditarComentario pull-right btn btn-default btn-xs">
                                                <i className="fa fa-edit"></i>
                                            </a>
                                            <a
                                                title="Excluir comentário"
                                                href="#"
                                                className="btnRemoverComentario pull-right btn btn-default btn-xs text-danger">
                                                <i className="fa fa-remove"></i>
                                            </a>
                                            <div>
                                                <p>&nbsp;&nbsp;&nbsp;
                                                    <b>ROBISSON CARDOSO DE OLIVEIRA</b><br/>
                                                    &nbsp;&nbsp;&nbsp;14/08/2017 17:45
                                                </p>
                                            </div>
                                            <div className="text-comentario">Enviei email para o Heitor</div>
                                        </div>
                                    </div><hr/>
                                    <div className="clearfix"></div>
                                    <div>
                                        <div className="pull-left">
                                            <img
                                                src="/guarida/server-ftp/programas/usuarios/funcionarios/361-foto-apresentacao_small.jpg"
                                                className="img-circle"
                                                width="25"/>
                                        </div>
                                        <div className="pull-left col-lg-11 col-md-11 col-sm-11 col-xs-10">
                                            <div
                                                id="conteudoComentario"
                                                placeholder="Escreva uma comentário"
                                                contentEditable="true"
                                                style={{
                                                width: "100%",
                                                minHeight: "50px",
                                                border: "1px solid #c7c1c1"
                                            }}></div>
                                            <div className="alert-warning">
                                                <p>
                                                    <b>Você pode marcar qualquer membro do quadro digitando "@" e o nome do membro.
                                                        O membro marcado recebe um email do comentário.</b>
                                                </p>

                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-success" id="btnEnviarComentário">
                                                    Enviar
                                                    <i className="fa fa-save"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Task);