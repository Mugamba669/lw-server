const express = require('express');
const app = express()
app.all('/', (req, res) => {

  res.send("Am working")
  res.end();
})
app.listen(process.env.PORT || 5054);
