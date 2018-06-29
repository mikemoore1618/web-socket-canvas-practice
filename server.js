const
  express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
})