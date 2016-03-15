import graphqlHTTP from 'express-graphql';
import { MovieSchema } from './movieSchema.js';

import express from 'express';

const app = express();

app.use('/', graphqlHTTP({ schema: MovieSchema }));

app.listen(3000, function () {
  console.log('Your app is running on localhost:3000');
});
