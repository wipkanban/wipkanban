// @flow
import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";
import { type Dispatch } from "redux";

export function createAccount(email: string, password: string): Function {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.CREATE_ACCOUNT_SEND });

    return BoardApi.createAccount(email, password)
      .then(({ data }) => {
        dispatch(accountCreated(data));
      })
      .catch(error => {
        dispatch(accountCreatedError(error));
      });
  };
}

export function accountCreated(response: Object): Object {
  return { type: actionsType.CREATE_ACCOUNT_SUCCESS, response };
}

export function accountCreatedError(error: Object): Object {
  return { type: actionsType.CREATE_ACCOUNT_ERROR, error };
}

export function setFirstAccess(userId: number, firstAccess: boolean): Function {
  return (dispatch: Dispatch) => {
    return BoardApi.setFirstAccess(userId, firstAccess).then(() => {
      dispatch({
        type: actionsType.SET_FIRST_ACCESS,
        firstAccess: firstAccess
      });
    });
  };
}

export function updateAccountUser(user: Object): Function {
  return (dispatch: Dispatch) => {
    return BoardApi.updateAccountUser(user).then(() => {
      dispatch({
        type: actionsType.UPDATE_ACCOUNT_USER,
        user
      });
    });
  };
}
