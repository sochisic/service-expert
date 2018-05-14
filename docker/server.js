const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const path = require('path');

const PORT = '8080';
const HOST = 'localhost';

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());

function UTC() {
  let date = new Date();
  let utc = date.toLocaleString('ru-RU');
  return utc;
}

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:file', function(req, res) {
  res.sendFile(__dirname + '/' + req.params.file);
});

app.get('/service-worker.js', function(req, res) {
  res.sendFile(__dirname + '/service-worker.js');
});

app.get('/static/:path/:name', function(req, res, next) {
  var options = {
    root: __dirname + '/static/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };

  let path = req.params.path;
  let fileName = req.params.name;
  res.sendFile(path + '/' + fileName, options, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(UTC(), ' Sent: ', fileName);
    }
  });
});

app.post('/sendmail', upload.array(), function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, HOST);
console.log(`Listening on ${HOST}:${PORT}`);

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/test')
  .then(() => console.log(UTC() + ' Connection to DB: Success!'))
  .catch(e => console.log('Connection to DB failed: ' + e));
