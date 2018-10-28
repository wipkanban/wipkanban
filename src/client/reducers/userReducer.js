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
        showPreloader: true,
        message: null
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
        showPreloader: true
      };
    case actionsType.LOGIN_SUCCESS:
    case actionsType.LOGIN_ERROR:
      var { message, success, user } = action;

      return { ...state, showPreloader: false, message, success, user };

    case actionsType.LOGOUT_SUCCESS:
      return { ...initialState };

    case actionsType.SET_FIRST_ACCESS:
      return {
        ...state,
        user: { ...state.user, firstAccess: action.firstAccess }
      };
    case actionsType.UPDATE_ACCOUNT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.user.name,
          lastname: action.user.lastname,
          email: action.user.email,
          phone: action.user.phone,
          firstAccess: action.user.firstAccess,
          image: action.user.image
        }
      };

    default:
      return state;
  }
}
