var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

// Dependencies
var appDependency = [
    'ngRoute'
    ,'ngResource'
] || appDependency;

// Module
var wheatherApp = angular.module('weatherApp', appDependency);