import actionsType from "./actionsType";
import boardApi from "../api/boardApi";

export function createAccount(name, lastname, email, password) {
  return dispatch => {
    dispatch({ type: actionsType.CREATE_ACCOUNT_SEND });

    return boardApi
      .createAccount(name, lastname, email, password)
      .then(({ data }) => {
        dispatch(accountCreated(data));
      })
      .catch(error => {
        dispatch(accountCreatedError(error));
      });
  };
}

export function accountCreated(response) {
  return { type: actionsType.CREATE_ACCOUNT_SUCCESS, response };
}

export function accountCreatedError(error) {
  return { type: actionsType.CREATE_ACCOUNT_ERROR, error };
}
