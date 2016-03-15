'use strict';
require("babel-core/register");

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./app/api'));

app.listen(3000, function () {
  console.log('Your app is running on localhost:3000');
});
