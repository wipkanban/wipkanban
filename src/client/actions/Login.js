import actionsType from './actionsType';

export function login(username,password) {
    
        return (dispatch) => {
            
            dispatch({type:actionsType.LOADING_COLUMNS});
    
            /*return boardApi
                .getAllCats()
                .then(columns => {
                    dispatch(loadColumnsSuccess(columns));
                })
                .catch(error => {
                    throw(error);
                });*/
        };
    }