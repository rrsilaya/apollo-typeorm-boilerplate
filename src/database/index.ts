import { createConnection } from 'typeorm';
import { log } from '../util';

import College from '../entities/college/model';
import Entry from '../entities/entry/model';

const connection = (app) => createConnection({
  type: 'mysql', // mysql or mariadb
  host: 'localhost',
  port: 3306,
  synchronize: true,
  logging: false,
  dropSchema: false,

  // Update database credentials here
  username: '',
  password: '',
  database: '',

  entities: [
    College,
    Entry
  ]
}).then(() => {
  log('Successfully connected to database', 'DATABASE');

  app();
}).catch(({ code, sqlMessage }) => {
  log(`Failure to connect to database: ${sqlMessage}`, code, true);
});

export default connection;