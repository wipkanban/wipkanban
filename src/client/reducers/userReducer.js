import actionsType from "../actions/actionsType";

const initialState = {
  success: false,
  message: null,
  showPreloader: false,
  user: {}
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

    case actionsType.LOADING_LOGIN:
      return {
        ...state,
        message: "Loading..."
      };
    case actionsType.LOGIN_SUCCESS:
    case actionsType.LOGIN_ERROR:
      var { message, success, user } = action;

      return { ...state, message, success, user };

    case actionsType.LOGOUT_SUCCESS:
      return { ...state, success: false };

    default:
      return state;
  }
}
