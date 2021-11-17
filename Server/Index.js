const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.use('/Index.html', express.static(__dirname + '/public/Index.html'));

app.get('/', (req, res) => {
  res.send('CPAC4 First Web Server!');
})

app.get('/route', (req, res) => {
    res.send('This is Route!');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})