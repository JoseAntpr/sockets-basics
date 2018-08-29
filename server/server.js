const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = back communication
let io = socketIO(server);

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('enviarMensaje', {
        user: 'Admin',
        message: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('User disconnect');
    });

    // Listen client
    client.on('enviarMensaje', (message, callback) => {
        //console.log(menssage);

        if( message.user) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!'
            });
        }

        
    });
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});