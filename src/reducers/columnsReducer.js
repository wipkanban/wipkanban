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

            console.log("MOSTRANDO PRELOADER");

            return state;

        case actionsType.LOAD_COLUMNS_SUCCESS:

            let columns = action
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

            let showInputNewTask = !state.columns[indexColumn].showInputNewTask;

            let newState = update(state, {
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

            let task = {
                "id": Date.now(),
                "title": action.text,
                "preview": false,
                "checklists": "",
                "membros": []
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

            let modalData = {...action};

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

            let columnIndex = getColumnIndex(state.columns, action.idcolumn);

            let columnIndexDragged = getColumnIndex(state.columns, action.idcolumnDragged);

            let cardIndex = getTaskIndex(state.columns, action.taskId, columnIndexDragged);

            if (cardIndex == -1) {
                return state;
            }

            let card = state.columns[columnIndexDragged].tasks[cardIndex];

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