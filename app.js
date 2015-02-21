// node app.js
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

// Using a catch all route middleware in my node/Express server as follows (put it after the router)
app.use(function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

app.use(function(req, res, next) {
  var schema = req.headers['x-forwarded-proto'];

  if (schema === 'http') {
    // Already https; don't do anything special.
    next();
  }
  else {
    // Redirect to https.
    res.redirect('http://' + req.headers.host + req.url);
  }
});