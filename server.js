const
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  PORT = process.env.PORT || 3000

app.use(express.static('public'))

io.on('connection', (socket) => {
  socket.on('sendArt', (mouse) => {
    io.emit('getArt', mouse)
  })
})


server.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT} :)`)
})


