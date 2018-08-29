var socket = io();

var label1 = $('#lblTicket1');
var label2 = $('#lblTicket2');
var label3 = $('#lblTicket3');
var label4 = $('#lblTicket4');

var lblDesk1 = $('#lblEscritorio1');
var lblDesk2 = $('#lblEscritorio2');
var lblDesk3 = $('#lblEscritorio3');
var lblDesk4 = $('#lblEscritorio4');

var lblTickets = [label1, label2, label3, label4];
var lblDesks = [lblDesk1, lblDesk2, lblDesk3, lblDesk4];

socket.on('actualState', function(data){
    updateHtml(data.last4);
});

socket.on('last4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3')
    audio.play();
    updateHtml(data.last4);
});

function updateHtml ( last4 ) {
    for( var i = 0; i <= last4.length - 1; i++) {
        lblTickets[i].text('Ticket' + last4[i].ticketNumber);
        lblDesks[i].text('Escritorio' + last4[i].desk);
    }
}