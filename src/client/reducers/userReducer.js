import actionsType from '../actions/actionsType';

const initialState = {
    success: false,
    showPreloader: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionsType.CREATE_ACCOUNT_SEND:

            return {
                ...state,
                showPreloader: true
            };

        case actionsType.CREATE_ACCOUNT_SUCCESS:

            return {success: true, showPreloader: false};

        case actionsType.LOGOUT_SUCCESS:

            return {success: false, showPreloader: false};

        default:
            return state;
    }
}