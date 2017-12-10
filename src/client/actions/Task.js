import actionsType from "./actionsType";

export const toggleInputNewTask = id => {
  return { type: actionsType.TOGGLE_INPUT_NEW_TASK, id };
};

export const createNewTask = (text, idcolumn) => {
  return { type: actionsType.CREATE_NEW_TASK, text, idcolumn };
};

export const openModalTask = (
  members,
  title,
  checklists,
  id,
  idcolumn,
  timer_status,
  comments,
  description,
  markers,
  createdby,
  columnName
) => {
  return {
    type: actionsType.OPEN_MODAL_TASK,
    members,
    title,
    checklists,
    id,
    idcolumn,
    timer_status,
    comments,
    description,
    markers,
    createdby,
    columnName
  };
};

export const closeModal = () => {
  return { type: actionsType.CLOSE_MODAL };
};

export const updateTaskColumn = (taskId, idcolumn, idcolumnDragged) => {
  return {
    type: actionsType.UPDATE_TASK_COLUMN,
    taskId,
    idcolumn,
    idcolumnDragged
  };
};

export const updateTaskPosition = (taskId, afterId, idcolumn) => {
  return { type: actionsType.UPDATE_TASK_POSITION, taskId, afterId, idcolumn };
};
