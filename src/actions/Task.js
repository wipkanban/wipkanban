import actionsType from './actionsType';

export const toggleInputNewTask = id => {
    return {type: actionsType.TOGGLE_INPUT_NEW_TASK, id}
};

export const createNewTask = (text, idcolumn) => {
    return {type: actionsType.CREATE_NEW_TASK, text, idcolumn}
};

export const openModalTask = (idtask, idcolumn) => {
    return {type: actionsType.OPEN_MODAL_TASK, idtask, idcolumn}
};

export const closeModal = () => {
    return {type: actionsType.CLOSE_MODAL}
};

export const updateTaskColumn = (taskId, idcolumn, idcolumnDragged) => {
    return {type: actionsType.UPDATE_TASK_COLUMN, taskId, idcolumn, idcolumnDragged}
};

export const updateTaskPosition = (taskId,afterId,idcolumn) => {
    return {type: actionsType.UPDATE_TASK_POSITION, taskId,afterId,idcolumn}
};
