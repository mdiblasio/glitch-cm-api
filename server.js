// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const x = new RegExp(/\/sign(?:in|up)/);

app.post(x, (req, res) => {
  console.log("HERE");
  console.log(req.body);
  // console.log(req);
  res.cookie('email', req.body.email);

  res.status(200).send();
  //   res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
  // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  //   // res.sendStatus(200);
});

// http://expressjs.com/en/starter/static-files.html
// app.use(/.*\.html$/, express.static('views'));
app.use(express.static('public'));

// process.env.PORT = process.env.PORT || 8080;

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});