import actionsType from "./actionsType";
import BoardApi from "../api/BoardApi";

export function createAccount(email, password) {
  return dispatch => {
    dispatch({ type: actionsType.CREATE_ACCOUNT_SEND });

    return BoardApi.createAccount(email, password).then(({ data }) => {
      dispatch(accountCreated(data));
    });
  };
}

export function accountCreated(response) {
  return { type: actionsType.CREATE_ACCOUNT_SUCCESS, response };
}
