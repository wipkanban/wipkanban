import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DragSource, DropTarget} from 'react-dnd';
import CardActionCreators from '../../actions/CardActionCreators';

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
            CardActionCreators.updateCardPosition(draggedId, props.id, props.idcolumn);
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

class Task extends Component {
    render() {

        const {connectDropTarget, connectDragSource, isDragging, id, preview} = this.props;

        return connectDropTarget(connectDragSource(
            <div className="panel panel-default" id={id}>

                <div
                    className="panel-body"
                    style={{
                    visibility: preview
                        ? 'hidden'
                        : 'normal'
                }}>
                    <div className="marcadores"></div>
                    <p>{this.props.title}</p>
                    <div id="containerInfo">
                        <div className="label label-default " title="Esta tarefa possui um checklist">
                            <span className="fa fa-check-square"></span>
                            <span className="qtdChecklists">3/4</span>
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
                    <img
                        width="20"
                        src="/images/734-foto-apresentacao_small.jpg"
                        title="LEONARDO AMERICO KEISMAN"
                        className="img-circle"/>
                    <img
                        width="20"
                        src="/images/3363-foto-apresentacao_small.jpg"
                        title="MAICON MORETTO DOS SANTOS"
                        className="img-circle"/>
                </div>
            </div>
        ));
    }
}

Task.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

const dragHighOrderCard = DragSource(ItemTypes.TASK, taskDragSource, collectDrag)(Task);
const dragDropHighOrderCard = DropTarget(ItemTypes.TASK, taskDropSpec, collectDrop)(dragHighOrderCard);
export default dragDropHighOrderCard