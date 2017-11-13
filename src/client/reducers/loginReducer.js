import actionsType from '../actions/actionsType';

const initialState = {
    success: false,
    message: '',
    user: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionsType.LOADING_LOGIN:

            return {
                message: 'Loading...',
                ...state
            };
        case actionsType.LOGIN_SUCCESS:
            let {message, success, user} = action;
            return {message, success, user};

        case actionsType.LOGOUT_SUCCESS:

            return {success: false};

        default:
            return state;
    }
}