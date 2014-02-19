var express = require('express'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  io = require('socket.io').listen(server),
  maxAge = 10368000;

// app.use(express.compress({
//   threshold: false
// }));
app.use(express.logger());
// app.use(express.static(__dirname + '/public', {
//   maxAge: maxAge
// }));
app.use(express.static(__dirname + '/public'));

server.listen(8000);

var count = 0;

io.sockets.on('connection', function(socket) {
  count++;

  io.sockets.emit('new', {
    id: socket.id,
    count: count
  });
  // socket.broadcast.emit('online', {
  //   id: socket.id
  // });

  socket.on('disconnect', function() {
    count--;
    io.sockets.emit('offline', {
      id: socket.id,
      count: count
    });
  });
});