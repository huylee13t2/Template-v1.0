var express = require('express'),
    app = express();

var http = require('http').Server(app);
    var io = require('socket.io')(http);
    var path = require('path');


// Đăng ký các sự kiện của socket
io.on('connection', function(socket){
  socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
  });
  socket.on('notifyUser', function(user){
    io.emit('notifyUser', user);
  });
});

app.use(express.static(__dirname + ''));

// app.listen(8088)

http.listen(8088, function(){
  console.log('listening on *:8088');
});
