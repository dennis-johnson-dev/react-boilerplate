(function() {
  var app, bodyParser, express, path;

  express = require('express');

  path = require('path');

  bodyParser = require('body-parser');

  app = express();

  app.use(bodyParser.json());

  app.use(express["static"](path.join(__dirname + '../../../public')));

  app.listen(3000);

}).call(this);
