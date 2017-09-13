import actionsType from './actionsType';

export const showInputNewTask = id => {
    return {type: actionsType.SHOW_INPUT_NEW_TASK, id}
};

export const createNewTask = id => {
    return {type: actionsType.SHOW_INPUT_NEW_TASK, id}
};
