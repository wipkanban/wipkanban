import React, {Component} from 'react'
import ColumnBoard from './ColumnBoard'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
    render() {

        let {columns} = this.props;

        columns = columns.map((column) => {

            return (<ColumnBoard
                updateCardPosition={this.props.updateCardPosition}
                key={column.id}

                id={column.id}

                title={column.title}
                tasks={column.tasks}/>)

        });

        let cardModal = this.props.children && React.cloneElement(this.props.children, {
            cards: this.props.cards,
            cardCallbacks: this.props.cardCallbacks
        });

        return (
            <div id="board">
                <div className="draggable-portlets" id="canvas-board">
                    <div className="column-sorted ui-sortable">

                        {columns}
                        {cardModal}
                    </div>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);