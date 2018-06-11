import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import connection from './database';
import schema from './entities';

const app = express();

const index = () => {
  // Middlewares should be inserted here

  app.use('/api', bodyParser.json(), graphqlExpress({ schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/api' }));
}

connection(index);
export default app;