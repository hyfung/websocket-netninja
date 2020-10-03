const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

let app = express();
app.use(cors('*'));

let server = app.listen(4000, '0.0.0.0', () => {
    console.log('Listening at 4000');
})

//Static files
app.use(express.static('public'));

//Socket setup
let io = socket(server);

io.on('connection', (socket) => {
    console.log('New socket detected!', socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });
});
