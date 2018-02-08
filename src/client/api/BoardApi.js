import axios from "axios";

class boardApi {
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
}

export default boardApi;
