// node app.js
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

// Using a catch all route middleware in my node/Express server as follows (put it after the router)
app.use(function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});