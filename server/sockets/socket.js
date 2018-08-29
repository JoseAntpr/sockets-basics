
const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

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
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            data
        });

        // if( message.user) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     });
        // }

        
    });
});