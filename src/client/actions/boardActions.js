import boardApi from '../api/boardApi';
import actionsType from './actionsType';

/**
 *  Fetch all columns
 */
export function loadColumns() {

    return (dispatch) => {
        
        dispatch({type:actionsType.LOADING_COLUMNS});

        return boardApi
            .getAllCats()
            .then(columns => {
                dispatch(loadColumnsSuccess(columns));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function loadColumnsSuccess(columns) {
    return {type: actionsType.LOAD_COLUMNS_SUCCESS, columns};
}