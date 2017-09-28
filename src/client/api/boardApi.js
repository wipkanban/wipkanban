class boardApi {

    static getAllCats() {
        return fetch('http://localhost:3000/data.json').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    
    static login(username,password) {
        return fetch('http://localhost:3000/user.json').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    
    static createAccount(name,lastname,email, password) {
        return fetch('http://localhost:3000/api/v1/createAccount').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default boardApi;