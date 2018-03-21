import axios from "axios";

class boardApi {
  static getAllCats() {
    return fetch("/data.json")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static login(email, password) {
    return axios
      .post("/api/v1/login", { email, password })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static createAccount(email, password) {
    return axios
      .post("/api/v1/user", {
        email,
        password
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }

  static setFirstAccess(userId, firstAccess) {
    return axios
      .post("/api/v1/user/setFirstAccess", {
        userId,
        firstAccess
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default boardApi;
