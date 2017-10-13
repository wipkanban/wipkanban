import axios from 'axios';

class boardApi {

    static getAllCats() {
        return fetch('http://localhost:3000/data.json').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static login(username, password) {
        return fetch('http://localhost:3000/user.json').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createAccount(name, lastname, email, password) {

        return axios
            .post('http://localhost:3000/api/v1/createAccount', {name, lastname, email, password})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}

export default boardApi;