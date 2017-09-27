import React, {Component} from 'react'
import Task from './Task'
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import actionsType from '../../actions/actionsType';
import * as actions from '../../actions/Task';

const columnTarget = {
    drop(props, monitor) {},
    hover(props, monitor, component) {

        const dragged = monitor.getItem();

        if (dragged.idcolumn !== props.id) {
            props.updateTaskColumn(dragged.id, props.id, dragged.idcolumn);
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
        handleShowInputNewtask(id, input) {
            dispatch(actions.toggleInputNewTask(id));
            setTimeout(() => input.focus(), 100);
        },
        createTask(event, idcolumn) {
            if (event.keyCode == 13) {

                dispatch(actions.createNewTask(event.target.value, idcolumn))

                event.target.value = '';

                dispatch(actions.toggleInputNewTask(idcolumn));

            }
        },
        updateTaskColumn(draggedId, id, draggedIdcolumn) {

            dispatch(actions.updateTaskColumn(draggedId, id, draggedIdcolumn));

        }
    }
};

const ColumnBoard = ({
    connectDropTarget,
    title,
    tasks,
    id,
    updateTaskColumn,
    showInputNewTask,
    showInputEditNameColumn,
    handleShowInputNewtask,
    createTask
}) => {

    let input;

    let column = connectDropTarget(
        <div className="sorted containerTarefas ui-sortable">
            {tasks.map(task => <Task key={task.id} columnName={title} idcolumn={id} {...task}/>)}
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
                        <small>
                            <b>{title}</b>
                        </small>
                        <div className="btn-group float-right" role="group">
                            <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-sm btn-secondary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="text-danger fa fa-ellipsis-h"></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                    </span>
                </h4>
                <button
                    onClick={(event) => handleShowInputNewtask(id, input)}
                    className="btn btn-dark btn-sm btn-block adicionarTarefa">
                    <span className="fa fa-chevron-down"></span>
                    Adicionar tarefa
                </button>
                <input
                    ref={node => input = node}
                    onKeyUp={(event) => createTask(event, id)}
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

export default connect(null, mapDispatchToProps)(DropTarget(ItemTypes.TASK, columnTarget, collect)(ColumnBoard));
