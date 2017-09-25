import actionsType from './actionsType';
import boardApi from '../api/boardApi';

export function login(username, password) {

    return (dispatch) => {

        dispatch({type: actionsType.LOADING_LOGIN});

        return boardApi
            .login(username, password)
            .then(user => {

                window
                    .localStorage
                    .setItem('user', JSON.stringify(user));

                dispatch(loginSuccess());
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function logout() {
    return (dispatch) => {
        window
            .localStorage
            .removeItem('user');
        dispatch(logoutSuccess());
    };
}

export function loginSuccess(user) {
    return {type: actionsType.LOGIN_SUCCESS};
}

export function logoutSuccess() {
    return {type: actionsType.LOGOUT_SUCCESS};
}