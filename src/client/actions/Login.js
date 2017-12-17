import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";

export function login(email, password) {
  return dispatch => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return BoardApi.login(email, password)
      .then(response => {
        let { data: { success, message, token, user } } = response;

        if (success) {
          window.localStorage.setItem("token", JSON.stringify(token));
          window.localStorage.setItem("user", JSON.stringify(user));
        }

        dispatch(loginSuccess(success, message, user));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function logout() {
  return dispatch => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("state");

    dispatch(logoutSuccess());
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

export function logoutSuccess() {
  return { type: actionsType.LOGOUT_SUCCESS };
}
