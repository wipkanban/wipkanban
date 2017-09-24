import path from 'path'
import Express from 'express'

const app = Express()
const port = 3000

//Serve static files
app.use(Express.static(__dirname + '/../public'));

app.listen(port);
console.log("SERVER LISTEN")