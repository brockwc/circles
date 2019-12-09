var io = require('socket.io')();

// Listen for new connection from the clients (socket)
io.on('connection', function (socket) {
  console.log('Client connected to socket.io');

  socket.on('add-circle', function (data) {
    io.emit('add-circle', data);
  })

  socket.on('remove-circles', function () {
    io.emit('remove-circles')
  });
});

module.exports = io;