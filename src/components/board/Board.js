import React, {Component} from 'react'
import ColumnBoard from './ColumnBoard'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {connect} from 'react-redux'
import actionsType from '../../actions/actionsType'
import * as actions from '../../actions/Task'

const mapStateToProps = state => state.task;

const Board = ({columns, handleShowInputNewtask}) => {

    return (
        <div id="board">
            <div className="draggable-portlets" id="canvas-board">
                <div className="column-sorted ui-sortable">

                    {columns.map(column => <ColumnBoard
                        handleShowInputNewtask={handleShowInputNewtask}
                        key={column.id}
                        {...column}/>)}

                </div>
            </div>
        </div>
    );

}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(Board));