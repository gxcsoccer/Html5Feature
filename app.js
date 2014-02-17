var express = require('express'),
  app = express(),
  path = require('path'),
  fs = require('fs'),
  maxAge = 10368000;

app.use(express.compress({
  threshold: false
}));
app.use(express.logger());
app.use(express.static(__dirname + '/public', {
  maxAge: maxAge
}));
// app.use(express.static(__dirname + '/public'));

app.listen(8000);