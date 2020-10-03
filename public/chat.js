let socket = io.connect('http://192.168.0.21:4000');

//Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let send = document.getElementById('send');
let output = document.getElementById('output');

//
send.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

//
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
});

console.log("Socket ID is: " + socket.id)
