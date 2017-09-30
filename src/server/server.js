import path from 'path'
import Express from 'express'
import render from './ServerRender'

const app = Express()
const port = 3000

//Serve static files
app.use('/dist', Express.static(__dirname + '/../../public/dist'));
app.use('/assets', Express.static(__dirname + '/../../public/assets'));
app.use('/data.json', Express.static(__dirname + '/../../public/data.json'));
app.use(render)

app.listen(port);
console.log("SERVER LISTEN")