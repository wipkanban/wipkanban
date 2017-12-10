import React from "react";

const Timer = () => {
  return (
    <div className="row" id="marcarTempo">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right ">
        <h1>01:02:01</h1>
        <button
          title="Marcar tempo"
          id="btnPlay"
          className="btn btn-primary hide"
        >
          <i className="fa fa-play" />
        </button>
        <button
          title="Pausar contador"
          id="btnPause"
          className="btn btn-default"
        >
          <i className="fa fa-pause" />
        </button>
        <button
          title="Para contador e zerar"
          id="btnStop"
          className="btn btn-default"
        >
          <i className="fa fa-stop" />
        </button>
        <button
          title="Concluir marcador"
          id="btnConcluir"
          className="btn btn-success"
        >
          <i className="fa fa-check" />
        </button>
        <div id="reiniciarTempo" className="hide">
          <span className="label label-success">TEMPO CONCLUÌDO</span>
          <br />
          <br />
          <a id="btnReiniciarTempo" href="#" className="text-danger">
            <i className="fa fa-clock-o" />
            reiniciar tempo
          </a>
          <a />
        </div>
        <a>
          <hr />
        </a>
      </div>
    </div>
  );
};

export default Timer;
