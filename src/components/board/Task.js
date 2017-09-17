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
        onClickTask(membros, title, checklists, id, idcolumn, timer_status, comments, description, markers) {

            dispatch(actions.openModalTask(membros, title, checklists, id, idcolumn, timer_status, comments, description, markers));

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
    preview,
    timer_status,
    comments,
    markers,
    description
}) => {

    return connectDropTarget(connectDragSource(
        <div
            className="panel panel-default"
            id={id}
            onClick={() => onClickTask(membros, title, checklists, id, idcolumn, timer_status, comments, description, markers)}>

            <div
                className="panel-body"
                style={{
                visibility: preview
                    ? 'hidden'
                    : 'normal'
            }}>
                <div className="marcadores">
                    {markers.map(marker => (
                        <div
                            key={marker.id}
                            className="label"
                            title={marker.name}
                            style={{
                            backgroundColor: marker.color
                        }}>
                            &nbsp;&nbsp;&nbsp;
                        </div>
                    ))}
                </div>
                <p>{title}</p>
                <div id="containerInfo">
                    <div
                        style={{
                        display: (checklists.length > 0
                            ? 'normal'
                            : 'none')
                    }}
                        className="label label-default "
                        title="Esta tarefa possui um checklist">
                        <span className="fa fa-check-square"></span>
                        <span className="qtdChecklists">
                            {checklists.length}
                        </span>
                    </div>
                    &nbsp;
                    <div
                        style={{
                        display: timer_status
                            ? "normal"
                            : "none"
                    }}
                        className="label label-success"
                        title="Esta tarefa possui um marcador de tempo">
                        <span className="fa fa-clock-o"></span>
                        tempo
                    </div>
                    <div
                        style={{
                        display: comments.length
                            ? 'normal'
                            : 'none'
                    }}
                        className="label label-default"
                        title="Esta tarefa possui comentarios">
                        <span className="fa fa-commenting"></span>
                        {comments.length}
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