import Express from 'express';
import CreateAccount from './controllers/CreateAccount'

const api = Express.Router()

api.post('/createAccount', CreateAccount);

export default api;