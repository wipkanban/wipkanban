import actionsType from "../actions/actionsType";

const initialState = {
  success: false,
  message: null,
  showPreloader: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CREATE_ACCOUNT_SEND:
      return {
        ...state,
        showPreloader: true
      };

    case actionsType.CREATE_ACCOUNT_SUCCESS:
    case actionsType.CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        showPreloader: false,
        ...action.response
      };

    case actionsType.LOGOUT_SUCCESS:
      return { success: false, showPreloader: false };

    default:
      return state;
  }
}
