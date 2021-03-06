// canvas setup adapted from: https://www.html5canvastutorials.com/labs/html5-canvas-paint-application/

var canvas = document.getElementById('myCanvas')
var painting = document.getElementById('paint')
var ctx = canvas.getContext('2d')
var paint_style = getComputedStyle(painting)
canvas.width = 500
canvas.height = 500

var socket = io()

// object that stores coordinates for painting pixels
var mouse = { x: 0, y: 0 }

// whenever mouse moves over canvas, record mouse coordinates in mouse object above:
canvas.addEventListener('mousemove', function (evt) {
  mouse.x = evt.pageX - this.offsetLeft
  mouse.y = evt.pageY - this.offsetTop
}, false)

// define styles for "paintbrush"
ctx.lineWidth = 3
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.strokeStyle = '#00CC99'

// while the mouse is being held down over the canvas:
canvas.addEventListener('mousedown', function () {
  // draw on the canvas whenever mouse moves
  ctx.beginPath()
  ctx.moveTo(mouse.x, mouse.y)
  canvas.addEventListener('mousemove', onPaint)
})

// when the mouse is released from the canvas:
canvas.addEventListener('mouseup', function () {
  // stop drawing whenver the mouse moves
  canvas.removeEventListener('mousemove', onPaint)
})

// function that draws while mouse is held down and moving across canvas
var onPaint = function () {
  socket.emit('sendArt', mouse)
  ctx.lineTo(mouse.x, mouse.y)
  ctx.stroke()
}

///////////////////////////////////

canvas.addEventListener('click', () => {
  console.log("Sent Art", mouse)
  socket.emit('sendArt', mouse)
})

socket.on('getArt', (mouse) => {
  console.log("Got Art", mouse)
  ctx.lineTo(mouse.x, mouse.y)//lineTo- draw a line inbetween individual dots browser uses to render drawing so that it appears fluid
  ctx.stroke()
})
