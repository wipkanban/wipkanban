import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";

export function createAccount(email, password) {
  return dispatch => {
    dispatch({ type: actionsType.CREATE_ACCOUNT_SEND });

    return BoardApi
      .createAccount(email, password)
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
