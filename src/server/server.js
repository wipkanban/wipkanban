import path from 'path';
import Express from 'express';
import render from './ServerRender';
import api from './apiRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = Express();
const port = 3000
mongoose.connect("mongodb://192.168.0.18:27017/wipkanban");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', api);

//Serve static files
app.use('/dist', Express.static(__dirname + '/../../public/dist'));
app.use('/assets', Express.static(__dirname + '/../../public/assets'));
app.use('/data.json', Express.static(__dirname + '/../../public/data.json'));
app.use(render)

app.listen(port);
console.log("SERVER LISTEN")