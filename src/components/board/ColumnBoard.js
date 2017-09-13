import React, {Component} from 'react'
import Task from './Task'
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import CardActionCreators from '../../actions/CardActionCreators';
import {connect} from 'react-redux'
import actionsType from '../../actions/actionsType'
import * as actions from '../../actions/Task'

const columnTarget = {
    drop(props, monitor) {
        let item = monitor.getItem();
        CardActionCreators.saveNewPosition(item.id, props.id);
    },
    hover(props, monitor) {

        const dragged = monitor.getItem();
        if (dragged.idcolumn !== props.id) {
            CardActionCreators.updateCardColumn(dragged.id, props.id, dragged.idcolumn);
        }

    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleShowInputNewtask(id) {
            dispatch(actions.showInputNewTask(id));
        },
        createTask(event) {
            console.log("createTask")
        }
    }
};

const ColumnBoard = ({
    connectDropTarget,
    title,
    tasks,
    id,
    showInputNewTask,
    showInputEditNameColumn,
    handleShowInputNewtask,
    createTask
}) => {

    let column = connectDropTarget(
        <div className="sorted containerTarefas ui-sortable">
            {tasks.map(task => <Task key={task.id} idcolumn={id} {...task}/>)}
        </div>
    );

    let classInputNameColumn = (showInputEditNameColumn
        ? ''
        : 'hide') + " form-control inputNomeColuna";

    let classInputNewTask = (showInputNewTask
        ? ''
        : 'hide') + " inputAdicionarTarefa form-control";

    return (
        <div className="column-board">
            <div className="task-board">
                <h4>
                    <input type="text" className={classInputNameColumn} defaultValue="A fazer"/>
                    <span className="containerNomeColuna">
                        <span className="nomeColuna">
                            <b>{title}</b>
                        </span>
                        <div className="btn-group pull-right">
                            <button
                                type="button"
                                className="btn btn-default dropdown-toggle btn-xs"
                                data-toggle="dropdown">
                                <span className="text-danger fa fa-ellipsis-h"></span>
                            </button>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#209" className="arquivarColuna">
                                        <span className="fa fa-folder-open"></span>
                                        Arquivar Coluna
                                    </a>
                                </li>
                                <li>
                                    <a href="#209" className="removerColuna">
                                        <span className="fa fa-trash-o"></span>
                                        Excluir Coluna
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </span>
                </h4>
                <button
                    onClick={(event) => handleShowInputNewtask(id)}
                    className="btn btn-primary btn-block btn-xs adicionarTarefa">
                    <span className="fa fa-chevron-down"></span>
                    Adicionar tarefa
                </button>
                <input
                    onKeyUp={(event) => createTask(event)}
                    type="text"
                    className={classInputNewTask}
                    placeholder="Escreva a sua tarefa..."/> {column}
            </div>
        </div>
    );

}

ColumnBoard.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TASK, columnTarget, collect)(connect(null,mapDispatchToProps)(ColumnBoard));
