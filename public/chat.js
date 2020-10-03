let socket = io.connect('http://192.168.0.21:4000');

//Query DOM
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let send = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

//
send.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

//
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
    feedback.innerHTML = '';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});

console.log("Socket ID is: " + socket.id);
