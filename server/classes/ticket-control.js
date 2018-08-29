const fs = require('fs');


class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();

        let data = require('../data/data.json');

        if ( data.today === this.today ) {

        } else {
            this.resetCont();
        }
    }

    resetCont() {
        let jsonData = {
            last: this.last,
            today: this.today
        };

        let jsonDataString = JSON.stringify(jsonData);
        
        fs.writeFileSync('./server/data/data.json', jsonDataString);

        console.log('Reset system');
    }

}

module.exports = {
    TicketControl
}