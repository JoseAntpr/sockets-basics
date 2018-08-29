var socket = io();

var searchParams = new URLSearchParams( window.location.search );

if( !searchParams.has('escritorio') ) {
    window.location = 'index.html';
    throw new Error('Escritorio es necesario');
}

var desk = searchParams.get('escritorio');

$('h1').text('Escritorio' + desk);

var label = $('small');

$('button').on('click', function() {
    socket.emit('attendTicket', { desk: desk }, function( res ){
        if( res === 'No hay tickets') {
            alert(res);
            label.text(res);
            return;
        }
        label.text('Ticket ' + res.ticketNumber);
    });
});
