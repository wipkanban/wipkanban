import React, {Component} from 'react'
import Task from './Task'
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';

const columnTarget = {
    drop(props) {
        console.log("drop");
    },
    hover(props, monitor) {
        
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class ColumnBoard extends Component {

    render() {
        const {connectDropTarget, isOver, title, tasks, id} = this.props;

        let tasksB = tasks.map((task) => {

            return (<Task key={task.id} idcolumn={id} id={task.id} title={task.title} preview={task.preview}/>)

        });

        let column = connectDropTarget(
            <div className="sorted containerTarefas ui-sortable">
                {tasksB}
            </div>
        );

        return (
            <div className="column-board">
                <div className="task-board">
                    <h4>
                        <input
                            type="text"
                            className="hide form-control inputNomeColuna"
                            defaultValue="A fazer"/>
                        <span className="containerNomeColuna">
                            <span className="nomeColuna">
                                <b>{title}r</b>
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
                    <a href="#" className="btn btn-primary btn-block btn-xs adicionarTarefa">
                        <span className="fa fa-chevron-down"></span>
                        Adicionar tarefa
                    </a>
                    <input
                        type="text"
                        className="inputAdicionarTarefa form-control hide"
                        placeholder="Escreva a sua tarefa..."/>
                        {column}
                </div>
            </div>
        );
    }
}

ColumnBoard.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TASK, columnTarget, collect)(ColumnBoard);
