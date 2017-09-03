import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';
import {throttle} from '../utils';

let CardActionCreators = {
    fetchCards() {
        AppDispatcher.dispatchAsync(KanbanAPI.fetchCards(), {
            request: constants.FETCH_CARDS,
            success: constants.FETCH_CARDS_SUCCESS,
            failure: constants.FETCH_CARDS_ERROR
        });
    },
    updateCardPosition: throttle((taskId, afterId, idcolumn) => {
        AppDispatcher.dispatch({
            type: constants.UPDATE_CARD_POSITION,
            payload: {
                taskId,
                afterId,
                idcolumn
            }
        });
    }, 500),
    updateCardColumn: throttle((taskId, idcolumn, idcolumnDragged) => {
        AppDispatcher.dispatch({
            type: constants.UPDATE_CARD_STATUS,
            payload: {
                taskId,
                idcolumn,
                idcolumnDragged
            }
        });
    }),
    saveNewPosition: (taskId, idcolumn) => {
        AppDispatcher.dispatch({
            type: constants.SAVE_NEW_TASK_POSITION,
            payload: {
                taskId,
                idcolumn
            }
        });
    },
    createNewTask: (taskText, idcolumn) =>{
        AppDispatcher.dispatch({
            type: constants.ADD_NEW_TASK_TO_COLUMN,
            payload: {
                taskText,
                idcolumn
            }
        });
    }
};

export default CardActionCreators;