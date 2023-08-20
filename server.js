// index.js
const express = require('express')
const serverless = require("serverless-http");

const app = express()
app.use(express.static('public'))
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
module.exports.handler = serverless(app);