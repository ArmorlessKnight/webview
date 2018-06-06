'use strict';

const
  bodyParser = require('body-parser'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request'),
  fs = require('fs');

// Get certificates.
let key = fs.readFileSync('creds/key.pem');
let cert = fs.readFileSync('creds/server.crt');
 
let options = {
  key: key,
  cert: cert
};

let app = express();
//app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/test', (req, res, next) => {
  res.status(200).json({ message: 'This is a test' });
});

//Start HTTPS Server
https.createServer(options, app).listen(443);
// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
// app.listen(app.get('port'), function () {
//  console.log('Node app is running on port', app.get('port'));
// });

module.exports = app;
