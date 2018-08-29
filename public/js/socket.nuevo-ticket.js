

// Stablish communication with server
var socket = io();

var label =$('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado con el servidor');
});

$('button').on('click', function(){
    socket.emit('nextTicket', null, function(nextTicket) {
        label.text(nextTicket);
    });
});