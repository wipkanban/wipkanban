import userReducer from "../userReducer";
import actionTypes from "../../actions/actionsType";

describe("USer reducer", () => {
  const initialState = {
    success: false,
    message: null,
    showPreloader: false,
    user: {}
  };

  it("should state to be equal to initial State mock", () => {
    let state = userReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it("testing action CREATE_ACCOUNT_SEND", () => {
    let action = {
      type: actionTypes.CREATE_ACCOUNT_SEND
    };
    let newState = { ...initialState, showPreloader: true };
    let state = userReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it("testing action CREATE_ACCOUNT_SUCCESS and CREATE_ACCOUNT_ERROR", () => {
    let action = {
      type: actionTypes.CREATE_ACCOUNT_SUCCESS
    };
    let newState = { ...initialState, showPreloader: false };
    let state = userReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it("testing action LOADING_LOGIN", () => {
    let action = {
      type: actionTypes.LOADING_LOGIN
    };
    let newState = { ...initialState, showPreloader: true };
    let state = userReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it("testing action LOGIN_SUCCESS", () => {
    let response = {
      message: "Login successfull!",
      success: true,
      user: { name: "username" }
    };

    let action = {
      type: actionTypes.LOGIN_SUCCESS,
      ...response
    };
    let newState = {
      ...initialState,
      ...response
    };
    let state = userReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it("testing action LOGOUT_SUCCESS", () => {
    let action = {
      type: actionTypes.LOGOUT_SUCCESS
    };
    let newState = { ...initialState, success: false };
    let state = userReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it("testing action SET_FIRST_ACCESS", () => {
    let action = {
      type: actionTypes.SET_FIRST_ACCESS,
      firstAccess: false
    };

    let state = userReducer(initialState, action);

    let newState = {
      ...state,
      user: { ...state.user, firstAccess: false }
    };

    expect(state).toEqual(newState);
  });

  it("testing action UPDATE_ACCOUNT_USER", () => {
    let user = {
      lastname: "name example",
      email: "email example",
      phone: "1111-1111",
      firstAccess: false
    };

    let action = {
      type: actionTypes.UPDATE_ACCOUNT_USER,
      user
    };

    let state = userReducer(initialState, action);

    let newState = {
      ...state,
      user: {
        ...state.user,
        lastname: action.user.lastname,
        email: action.user.email,
        phone: action.user.phone,
        firstAccess: action.user.firstAccess
      }
    };

    expect(state).toEqual(newState);
  });
});
