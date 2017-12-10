import React from "react";

const ContainerChecklists = () => {
  return (
    <div className="row" id="containerChecklist">
      <div id="nomeChecklist" className="hide">
        <hr />
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do checklist e aperte enter"
        />
      </div>
      <div className="col-lg-12 checklistTarefa" data-idchecklist="124">
        <hr />
        <h4>
          <b>Atividades</b>
          <input
            type="text"
            className="form-control hide"
            defaultValue="Atividades"
          />
          <small>
            <a href="#124" className="text-danger pull-right excluirChecklist">
              <b>Excluir</b>
            </a>
          </small>
        </h4>
        <small className="tarefasCompletadas" data-total="1" data-concluido="0">
          0/1 tarefas completadas | 0,00%
        </small>
        <div className="progress">
          <div
            className="progress-bar progress-bar-warning"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "0%" }}
          >
            <span className="sr-only">0% Completo (sucesso)</span>
          </div>
        </div>
        <div className="containerItensChecklist">
          <div className="checkbox">
            <label>
              <input type="checkbox" defaultValue="453" />
            </label>
            <span className="text-uppercase">
              Organizar projetos em excução
            </span>
            &nbsp;&nbsp;<a href="#453" className="text-danger">
              remover
            </a>
          </div>
        </div>
        <div className="inputNovoItemChecklist hide">
          <p>
            <input type="text" placeholder="nome do item" />
          </p>
        </div>

        <p>
          <a href="#" className="adicionarItem">
            + adicionar item
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContainerChecklists;
