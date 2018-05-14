const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const PORT = '8080';
const HOST = 'localhost';
// app.use(function (error, req, res, next) {
//   // Any request to this server will get here, and will send an HTTP
//   // response with the error message 'woops'
//   console.log(req);

//   console.error(err.stack);

//   // res.status(500).send('Wtf! Something broke!');
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function UTC() {
  let date = new Date();
  let utc = date.toLocaleString('ru-RU');
  return utc;
}

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/favicon.ico', function(req, res) {
  res.sendFile(__dirname + '/favicon.ico');
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
