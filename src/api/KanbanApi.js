import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = './data.json';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
}
let KanbanAPI = {
    fetchCards() {
        return fetch(API_URL, {headers: API_HEADERS}).then((response) => response.json())
    }
};

export default KanbanAPI;