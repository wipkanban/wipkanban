class boardApi {

    static getAllCats() {
        return fetch('http://localhost:3000/data.json').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default boardApi;