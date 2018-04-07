import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";

export function login(email, password) {
  return dispatch => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return BoardApi.login(email, password)
      .then(response => {
        let { data: { success, message, token, user } } = response;

        if (success) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(user));
        }

        dispatch(loginSuccess(success, message, user));
      })
      .catch(error => {
        dispatch(loginError(false, error, {}));
      });
  };
}

export function logout() {
  return dispatch => {
    return BoardApi.logout().then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("state");
      dispatch(logoutSuccess());
    });
  };
}

export function loginSuccess(success, message, user) {
  return {
    type: actionsType.LOGIN_SUCCESS,
    success: success,
    message: message,
    user
  };
}

export function loginError(success, message, user) {
  return {
    type: actionsType.LOGIN_ERROR,
    success: success,
    message: message,
    user
  };
}

export function logoutSuccess() {
  return { type: actionsType.LOGOUT_SUCCESS };
}
