import React, {Component} from 'react'
import ColumnBoard from './ColumnBoard'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {connect} from 'react-redux'

const mapStateToProps = state => state.columns;

const Board = ({columns}) => {

    return (
        <div id="board">
            <div className="draggable-portlets" id="canvas-board">
                <div className="column-sorted ui-sortable">

                    {columns.map(column => <ColumnBoard key={column.id} {...column}/>)}
                    <div className="add-column">
                        <div className="pull-left form-group hide" id="divNovaColuna">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="digite o nome da coluna"/>
                        </div>
                        &nbsp;&nbsp;
                        <a id="addColuna" href="#">+Adicionar coluna</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(Board));