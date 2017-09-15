import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DragSource, DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import * as actions from '../../actions/Task';

const taskDragSource = {
    beginDrag(props) {
        return {id: props.id, idcolumn: props.idcolumn};
    },
    endDrag(props) {
        console.log("endDrag");
    }
};

const taskDropSpec = {
    hover(props, monitor) {

        const draggedId = monitor
            .getItem()
            .id;

        if (props.id !== draggedId) {
            props.updateTaskPosition(draggedId, props.id, props.idcolumn);
        }
    },
    drop() {
        console.log("DROSPEC- END DROP")
    }
}

let collectDrag = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

let collectDrop = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickTask(id, idcolumn) {

            dispatch(actions.openModalTask(id, idcolumn));

        },
        updateTaskPosition(draggedId, id, idcolumn) {

            dispatch(actions.updateTaskPosition(draggedId, id, idcolumn));

        }
    }
};

const Task = ({
    updateTaskPosition,
    membros,
    title,
    checklists,
    connectDropTarget,
    connectDragSource,
    isDragging,
    id,
    onClickTask,
    idcolumn,
    preview
}) => {

    let showChecklist = checklists !== ''
        ? true
        : false;

    return connectDropTarget(connectDragSource(
        <div
            className="panel panel-default"
            id={id}
            onClick={() => onClickTask(id, idcolumn)}>

            <div
                className="panel-body"
                style={{
                visibility: preview
                    ? 'hidden'
                    : 'normal'
            }}>
                <div className="marcadores"></div>
                <p>{title}</p>
                <div id="containerInfo">
                    <div
                        style={{
                        display: (showChecklist
                            ? 'normal'
                            : 'none')
                    }}
                        className="label label-default "
                        title="Esta tarefa possui um checklist">
                        <span className="fa fa-check-square"></span>
                        <span className="qtdChecklists">
                            {showChecklist
                                ? checklists
                                : 'N'}
                        </span>
                    </div>
                    &nbsp;
                    <div
                        className="label label-success"
                        title="Esta tarefa possui um marcador de tempo">
                        <span className="fa fa-clock-o"></span>
                        tempo
                    </div>
                </div>
            </div>
            <div
                className="task-footer text-right membrosTarefa"
                style={{
                visibility: preview
                    ? 'hidden'
                    : 'normal'
            }}>
                {membros.map(membro => <img
                    width="20"
                    key={membro.image}
                    src={membro.image}
                    title={membro.nome}
                    className="img-circle"/>)}

            </div>
        </div>
    ));

};

Task.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

const dragHighOrderCard = DragSource(ItemTypes.TASK, taskDragSource, collectDrag)(connect(null, mapDispatchToProps)(Task));
const dragDropHighOrderCard = DropTarget(ItemTypes.TASK, taskDropSpec, collectDrop)(dragHighOrderCard);
export default connect(null, mapDispatchToProps)(dragDropHighOrderCard)