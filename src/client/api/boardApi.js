import axios from "axios";

class boardApi {
  static getAllCats() {
    return fetch("http://localhost:3000/data.json")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static login(email, password) {
    return axios
      .post("http://localhost:3000/api/v1/login", { email, password })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static createAccount(name, lastname, email, password) {
    return axios
      .post("http://localhost:3000/api/v1/createAccount", {
        name,
        lastname,
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
