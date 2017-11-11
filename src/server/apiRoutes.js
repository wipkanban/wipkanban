import Express from 'express';
import CreateAccount from './controllers/CreateAccount'
import {login} from './controllers/Authentication'
import verify from './controllers/Authentication/verify'
const api = Express.Router()

api.post('/createAccount', CreateAccount);
api.post('/login', login);
//api.use(verify);
export default api;