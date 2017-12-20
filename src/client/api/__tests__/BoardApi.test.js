import { login, logout } from "../../actions/Login";
import configureStore from "../../configureStore";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "jest-localstorage-mock";

describe("Action Login", () => {
  let store;
  let mock;
  beforeEach(() => {
    store = configureStore();
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  it("Shoud to authenticate a user and set token localstorage", () => {
    let response = {
      success: true,
      message: "Login User successfull!",
      token: "asijaosijas1109281029812",
      user: { name: "Name example", email: "email@example.com" },
      showPreloader: false
    };

    mock.onPost("/api/v1/login").reply(200, response);

    const expectedState = [
      {
        success: response.success,
        message: response.message,
        user: response.user,
        showPreloader: response.showPreloader
      }
    ];

    store.dispatch(login(response.user.email, 12345)).then(() => {
      expect([store.getState().userReducer]).toEqual(expectedState);
      expect(response.token).toEqual(JSON.parse(localStorage.getItem("token")));
      expect(response.user).toEqual(JSON.parse(localStorage.getItem("user")));
    });
  });

  it("Shoud logout a user and clean token and user in the localstorage", () => {
    store.dispatch(logout());
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("user")).toEqual(null);
  });
});
