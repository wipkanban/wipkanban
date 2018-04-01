import { login, logout } from "../../actions/Login";
import { setFirstAccess, updateAccountUser } from "../../actions/User";
import configureStore from "../../configureStore";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "jest-localstorage-mock";

describe("Board API", () => {
  let store = configureStore();
  let mock;

  store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()));
  });

  beforeEach(() => {
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
      user: {
        name: "Name example",
        email: "email@example.com",
        firstAccess: true
      },
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

  it("Shoud to set first access of the user to false", () => {
    let response = {
      success: true
    };
    mock.onPost("/api/v1/user/setFirstAccess").reply(200, response);

    store.dispatch(setFirstAccess("randomID", false)).then(() => {
      let userFirstAcess = store.getState().userReducer.user.firstAccess;
      let userFirstAccessLocalStorage = JSON.parse(
        localStorage.getItem("state")
      ).userReducer.user.firstAccess;

      expect(userFirstAcess).toEqual(false);
      expect(userFirstAccessLocalStorage).toEqual(false);
    });
  });

  it("Shoud to update user account", () => {
    let response = {
      success: true
    };

    let user = {
      name: "nameExample",
      email: "email@example.com",
      lastname: "lastname example",
      phone: "1111-1111",
      firstAccess: false
    };
    let _id = "12121212";

    mock.onPut(`/api/v1/user/${_id}`).reply(200, response);

    store.dispatch(updateAccountUser(user)).then(() => {
      let expectedUserState = store.getState().userReducer.user;

      expect(expectedUserState).toEqual(user);
    });
  });

  it("Shoud logout a user and clean token and user in the localstorage", () => {
    store.dispatch(logout());
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("user")).toEqual(null);
  });
});
