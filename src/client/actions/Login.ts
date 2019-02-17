// @flow
import actionsType from "./actionsType";
import UserApi from "../api/UserApi";
import { Dispatch } from "redux";
import axios from "axios";

function processLogin(dispatch: Dispatch, data: any) {
  let { success, message, token, user } = data;

  if (!success) {
    throw data;
  }

  if (success) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  }

  axios.defaults.headers.common["Authorization"] = JSON.stringify(token);
  dispatch(loginSuccess(success, message, user));
}

export function login(email: string, password: string): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return UserApi.login(email, password)
      .then(({ data }) => {
        processLogin(dispatch, data);
      })
      .catch(({ success, message }) => {
        dispatch(loginError(success, message, {}));
      });
  };
}

export function oauthFacebook(data: String): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return UserApi.facebookLogin(data)
      .then(({ data }) => {
        processLogin(dispatch, data);
      })
      .catch(({ success, message }) => {
        dispatch(loginError(success, message, {}));
      });
  };
}

export function logout(): any {
  return (dispatch: Dispatch) => {
    return UserApi.logout().then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("state");
      dispatch(logoutSuccess());
    });
  };
}

export function loginSuccess(
  success: boolean,
  message?: string | null,
  user?: Object
): any {
  return {
    type: actionsType.LOGIN_SUCCESS,
    success: success,
    message: message,
    user
  };
}

export function loginError(
  success: boolean,
  message: string,
  user: Object
): any {
  return {
    type: actionsType.LOGIN_ERROR,
    success: success,
    message: message,
    user
  };
}

export function logoutSuccess(): any {
  return { type: actionsType.LOGOUT_SUCCESS };
}
