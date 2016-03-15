'use strict';
require("babel-core/register");

let graphqlHTTP = require('express-graphql');
let MovieSchema = require('./app/movieSchema.js').MovieSchema;

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(require('./app/api'));

app.use('/graphql', graphqlHTTP({ schema: MovieSchema, graphiql: true }));

app.listen(3000, function () {
  console.log('Your app is running on localhost:3000');
});
