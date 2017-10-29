import Express from 'express';
import CreateAccount from './controllers/CreateAccount'
import {login} from './controllers/Authentication'

const api = Express.Router()

api.post('/createAccount', CreateAccount);
api.post('/login', login);

export default api;