// @flow
import actionsType from "./actionsType";
import UserApi from "../api/UserApi";
import { Dispatch } from "redux";

export function createAccount(email: string, password: string): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.CREATE_ACCOUNT_SEND });

    return UserApi.createAccount(email, password)
      .then(({ data }) => {
        dispatch(accountCreated(data));
      })
      .catch(error => {
        dispatch(accountCreatedError(error));
      });
  };
}

export function accountCreated(response: Object): any {
  return { type: actionsType.CREATE_ACCOUNT_SUCCESS, response };
}

export function accountCreatedError(error: Object): any {
  return { type: actionsType.CREATE_ACCOUNT_ERROR, error };
}

export function updateAccountUser(user: Object): any {
  return (dispatch: Dispatch) => {
    return UserApi.updateAccountUser(user).then(({ data: { imageUser } }) => {
      dispatch({
        type: actionsType.UPDATE_ACCOUNT_USER,
        user: { ...user, image: imageUser }
      });
    });
  };
}
