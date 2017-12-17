import BoardApi from "../api/BoardApi";
import actionsType from "./actionsType";

/**
 *  Fetch all columns
 */
export function loadColumns() {
  return dispatch => {
    dispatch({ type: actionsType.LOADING_COLUMNS });

    return BoardApi
      .getAllCats()
      .then(columns => {
        dispatch(loadColumnsSuccess(columns));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadColumnsSuccess(columns) {
  return { type: actionsType.LOAD_COLUMNS_SUCCESS, columns };
}
