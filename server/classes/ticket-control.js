const fs = require('fs');

class Ticket {
    constructor(ticketNumber, desk) {
        this.ticketNumber = ticketNumber;
        this.desk = desk;
    }
}


class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];

        let data = require('../data/data.json');

        if ( data.today === this.today ) {

            this.last = data.last;
            this.tickets = data.tickets;

        } else {
            this.resetCont();
        }
    }

    nextTicket() {
        this.last += 1;
        
        let ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);
        
        this.saveFile();

        return `Ticket ${ this.last }`
    }

    getLastTicket() {
        return `Ticket ${ this.last }`
    }

    resetCont() {
        this.last = 0;
        console.log('Reset System');
        this.saveFile();
    }

    saveFile() {

        let jsonData = {
            last: this.last,
            today: this.today,
            tickets: this.tickets
        };

        let jsonDataString = JSON.stringify(jsonData);
        
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

}

module.exports = {
    TicketControl
}