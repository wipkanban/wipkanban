import React, {Component} from 'react'
import TitleBoard from './TitleBoard'
import DescriptionBoard from './DescriptionBoard'
import Board from './Board'

const BoardContainer = () => {

    return (
        <div>
            <div className="row">

                <TitleBoard title="Projeto Inova"/>

            </div>
            <div className="row">
                <DescriptionBoard/>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tab-content">
                        <div className="tab-pane" id="dashboard"></div>

                        <div className="tab-pane active" id="tasks">
                            <div className="text-right hide">
                                <div className="btn-group">
                                    <button id="btnMostrarQuadro" type="button" className="btn btn-blue active">Quadro</button>
                                    <button id="btnMostrarGantt" type="button" className="btn btn-blue">Gantt</button>
                                </div>
                            </div>

                            <Board/>

                            <div id="gantt" className="hide"><br/>
                                <div id="gantt_chart"></div>
                            </div>
                        </div>
                        <div className="tab-pane" id="team"></div>
                    </div>

                </div>
            </div>
        </div>

    )

};

export default BoardContainer;