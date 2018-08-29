
const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    
    client.on('nextTicket', (data, callback) => {
        let next = ticketControl.nextTicket();
        console.log(next);

        callback(next);
    });
});