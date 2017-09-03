import React, {Component} from 'react'
import Task from './Task'
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DropTarget} from 'react-dnd';
import CardActionCreators from '../../actions/CardActionCreators';

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

class ColumnBoard extends Component {

    constructor() {
        super(...arguments);

        this.state = {
            showInputNewTask: false,
            showInputEditNameColumn: false
        }
    }

    /**
     * Show/hidden the input for to create the new task
     * @param {Object} event
     */
    showInputNewtask(event) {

        this.setState({
            showInputNewTask: !this.state.showInputNewTask
        })

        setTimeout(() => {
            this
                .refs
                .inputNewTask
                .focus();
        }, 1);

    }

    createTask(event) {
        if (event.keyCode == 13) {
            
            CardActionCreators.createNewTask(event.target.value, this.props.id);

            event.target.value = '';
            this.setState({showInputNewTask:false})
        }
    }

    render() {
        const {connectDropTarget, title, tasks, id} = this.props;

        let tasksB = tasks.map((task) => {

            return (<Task
                key={task.id}
                idcolumn={id}
                id={task.id}
                title={task.title}
                preview={task.preview}/>)

        });

        let column = connectDropTarget(
            <div className="sorted containerTarefas ui-sortable">
                {tasksB}
            </div>
        );

        let classInputNameColumn = (this.state.showInputEditNameColumn
            ? ''
            : 'hide') + " form-control inputNomeColuna";

        let classInputNewTask = (this.state.showInputNewTask
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
                        onClick={this
                        .showInputNewtask
                        .bind(this)}
                        className="btn btn-primary btn-block btn-xs adicionarTarefa">
                        <span className="fa fa-chevron-down"></span>
                        Adicionar tarefa
                    </button>
                    <input
                        ref="inputNewTask"
                        onKeyUp={this
                        .createTask
                        .bind(this)}
                        type="text"
                        className={classInputNewTask}
                        placeholder="Escreva a sua tarefa..."/> {column}
                </div>
            </div>
        );
    }
}

ColumnBoard.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TASK, columnTarget, collect)(ColumnBoard);
