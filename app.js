var express = require('express'),
  app = express(),
  path = require('path'),
  fs = require('fs');

app.use(express.logger());
app.use(express.static(path.join(__dirname, '/public')));
app.listen(8000);