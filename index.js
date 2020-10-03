const express = require('express');
const socket = require('socket.io');


let app = express();

let server = app.listen(4000, () => {
    console.log('Listening at 4000');
})

//Static files
app.use(express.static('public'));

//Socket setup
let io = socket(server);

io.on('connection', (socket) => {
    console.log('New socket detected!');
});
