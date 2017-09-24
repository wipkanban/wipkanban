import actionsType from '../actions/actionsType';

const initialState = {
    success: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionsType.LOADING_LOGIN:

            return state;
        case actionsType.LOGIN_SUCCESS:

            return {
                success:true
            };

        default:
            return state;
    }
}