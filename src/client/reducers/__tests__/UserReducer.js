import userReducer from "../userReducer";
import actionTypes from "../../actions/actionsType";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

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
    let newState = { ...initialState, message: "Loading..." };
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
});
