var socket = io();
        // Listen
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });
        // Listen
        socket.on('disconnect', function() {
            console.log('Perdimos conexión con el servidor');
        });
        
        // send info
        socket.emit('enviarMensaje', {
            user: 'Jose',
            message: 'Hello World'
        }, function(resp){
            console.log('respuesta server: ', resp);
        });

        // Listen info
        socket.on('enviarMensaje', function(mensaje){
            console.log(mensaje);
        });