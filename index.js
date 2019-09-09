

const path= require('path');// se encarga de unir directorios
const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio.listen(server);

app.set('port',process.env.PORT||3000);
require('./sockets')(io);
//   envio archivos estaticos.
console.log(path.join(__dirname,'sockets'));
app.use(express.static(path.join(__dirname,'public')));
//
server.listen(3000,()=>{
    console.log('Server Online');
});
//