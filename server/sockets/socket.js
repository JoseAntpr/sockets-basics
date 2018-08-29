
const { io } = require('../server');

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