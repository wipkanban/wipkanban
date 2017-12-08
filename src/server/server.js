import path from 'path';
import Express from 'express';
import render from './ServerRender';
import api from './apiRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {decode} from './controllers/Authentication'

const app = Express();
const port = 3000
mongoose.connect("mongodb://10.10.10.238:27017/wipkanban");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//verify jwt
app.use(decode)

app.use('/api/v1', api);

//Serve static files
app.use('/dist', Express.static(__dirname + '/../../public/dist'));
app.use('/assets', Express.static(__dirname + '/../../public/assets'));
app.use('/images', Express.static(__dirname + '/../../public/images'));
app.use('/data.json', Express.static(__dirname + '/../../public/data.json'));
app.use(render)

app.listen(port);
console.log("SERVER LISTEN");

export default app;