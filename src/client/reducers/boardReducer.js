import actionsType, { ADD_BOARD_LOADED } from "../actions/actionsType";

const boards = [];

export default function boardReducer(state = boards, action) {
  switch (action.type) {
    case actionsType.BOARDS_LOADED_SUCCESS:
      return [...action.boards];

    case ADD_BOARD_LOADED:
      return [...state, action.board];

    default:
      return state;
  }
}
