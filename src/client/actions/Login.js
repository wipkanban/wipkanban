import actionsType from './actionsType';
import boardApi from '../api/boardApi';

export function login(email, password) {

    return (dispatch) => {

        dispatch({type: actionsType.LOADING_LOGIN});

        return boardApi
            .login(email, password)
            .then(response => {
                
                let {data:{success,message,token}} = response;
                
                if(success){
                    window
                        .localStorage
                        .setItem('token', JSON.stringify(token));
                }

                dispatch(loginSuccess(success,message));
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
            .removeItem('token');
        dispatch(logoutSuccess());
    };
}

export function loginSuccess(success,message) {
    
    return {type: actionsType.LOGIN_SUCCESS,success:success,message:message};
}

export function logoutSuccess() {
    return {type: actionsType.LOGOUT_SUCCESS};
}