import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";

export function createAccount(email, password) {
  return dispatch => {
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

export function accountCreated(response) {
  return { type: actionsType.CREATE_ACCOUNT_SUCCESS, response };
}

export function accountCreatedError(error) {
  return { type: actionsType.CREATE_ACCOUNT_ERROR, error };
}

export function setFirstAccess(userId, firstAccess) {
  return dispatch => {
    return BoardApi.setFirstAccess(userId, firstAccess).then(() => {
      dispatch({
        type: actionsType.SET_FIRST_ACCESS,
        firstAccess: firstAccess
      });
    });
  };
}

export function updateAccountUser(user) {
  return dispatch => {
    return BoardApi.updateAccountUser(user).then(() => {
      dispatch({
        type: actionsType.UPDATE_ACCOUNT_USER,
        user
      });
    });
  };
}
