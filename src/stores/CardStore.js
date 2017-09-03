import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

class CardStore extends ReduceStore {

    getInitialState() {
        return [];
    }

    getCard(id) {
        return this
            ._state
            .find((card) => card.id === id);
    }
    getTaskIndex(idtask, columnIndex) {

        return this
            ._state[columnIndex]
            .tasks
            .findIndex((task) => task.id === idtask);
    }

    getColumnIndex(idcolumn) {
        return this
            ._state
            .findIndex((column) => column.id === idcolumn);
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.FETCH_CARDS_SUCCESS:
                return action.payload.response;

            case constants.UPDATE_CARD_POSITION:
                if (action.payload.cardId !== action.payload.afterId) {

                    let columnIndex = this.getColumnIndex(action.payload.idcolumn);
                    let cardIndex = this.getTaskIndex(action.payload.taskId, columnIndex);
                    let card = this.getState()[columnIndex].tasks[cardIndex];
                    let afterIndex = this.getTaskIndex(action.payload.afterId, columnIndex);

                    return update(this.getState(), {
                        [columnIndex]: {
                            tasks: {
                                $splice: [
                                    [
                                        cardIndex, 1
                                    ],
                                    [afterIndex, 0, card]
                                ]
                            }
                        }
                    });

                }

            case constants.UPDATE_CARD_STATUS:

                let columnIndex = this.getColumnIndex(action.payload.idcolumn);
                let columnIndexDragged = this.getColumnIndex(action.payload.idcolumnDragged);
                let cardIndex = this.getTaskIndex(action.payload.taskId, columnIndexDragged);
                let card = this.getState()[columnIndexDragged].tasks[cardIndex];

                return update(this.getState(), {
                    [columnIndexDragged]: {
                        tasks: {
                            $splice: [
                                [cardIndex, 1]
                            ]
                        }
                    },
                    [columnIndex]: {
                        tasks: {
                            $push: [card]
                        }
                    }
                });

            case constants.SAVE_NEW_TASK_POSITION:
                
                return state;

            case constants.ADD_NEW_TASK_TO_COLUMN:
                
                let newCard = {
                    id:Date.now(),
                    title: action.payload.taskText
                };

                columnIndex = this.getColumnIndex(action.payload.idcolumn);

                return update(this.getState(), {
                    [columnIndex]: {
                        tasks: {
                            $push: [newCard]
                        }
                    }
                });

            default:
                return state;
        }
    }
}
export default new CardStore(AppDispatcher);