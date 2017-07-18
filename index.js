var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

const port = 2000;
serv.listen(port, () => {
  console.log('Server started on ' + port)
});
