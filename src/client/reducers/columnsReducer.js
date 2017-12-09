import actionsType from '../actions/actionsType';
import initialState from './initialState';
import update from 'immutability-helper';

function getTaskIndex(state, idtask, columnIndex) {

    return state[columnIndex]
        .tasks
        .findIndex((task) => task.id === idtask);
}

function getColumnIndex(state, idcolumn) {
    return state.findIndex((column) => column.id === idcolumn);
}

export default function columnsReducer(state = initialState, action) {

    let indexColumn;

    switch (action.type) {
        case actionsType.LOADING_COLUMNS:

            return state;

        case actionsType.LOAD_COLUMNS_SUCCESS:

            var columns = action
                .columns
                .map(column => {
                    return {
                        ...column,
                        "showInputEditNameColumn": false,
                        "showInputNewTask": false
                    }
                });

            return {
                ...state,
                columns
            };

        case actionsType.TOGGLE_INPUT_NEW_TASK:
            indexColumn = state
                .columns
                .findIndex((column) => column.id === action.id);

            var showInputNewTask = !state.columns[indexColumn].showInputNewTask;

            var newState = update(state, {
                columns: {
                    [indexColumn]: {
                        showInputNewTask: {
                            $set: showInputNewTask
                        }
                    }
                }
            });

            return newState;

        case actionsType.CREATE_NEW_TASK:
            
            indexColumn = state
                .columns
                .findIndex((column) => column.id === action.idcolumn);

            var task = {
                "id": Date.now(),
                "title": action.text,
                "preview": false,
                "checklists": [],
                "markers": [],
                "comments":[],
                "members":[]
            };

            return update(state, {
                columns: {
                    [indexColumn]: {
                        tasks: {
                            $push: [task]
                        }
                    }
                }
            });
        case actionsType.OPEN_MODAL_TASK:

            var modalData = {...action};

            return {
                ...state,
                openModal: true,
                modalData
            }

        case actionsType.CLOSE_MODAL:

            return {
                ...state,
                openModal: false,
                modalData:null
            }

        case actionsType.UPDATE_TASK_COLUMN:

            var columnIndex = getColumnIndex(state.columns, action.idcolumn);

            var columnIndexDragged = getColumnIndex(state.columns, action.idcolumnDragged);

            var cardIndex = getTaskIndex(state.columns, action.taskId, columnIndexDragged);

            if (cardIndex == -1) {
                return state;
            }

            var card = state.columns[columnIndexDragged].tasks[cardIndex];

            return update(state, {
                columns: {
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
                }
            });
        case actionsType.UPDATE_TASK_POSITION:

            if (action.cardId !== action.afterId) {

                let columnIndex = getColumnIndex(state.columns, action.idcolumn);
                let cardIndex = getTaskIndex(state.columns, action.taskId, columnIndex);
                let card = state.columns[columnIndex].tasks[cardIndex];
                let afterIndex = getTaskIndex(state.columns, action.afterId, columnIndex);

                return update(state, {
                    columns: {
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
                    }
                });

            }

            return state

        default:
            return state;
    }
}