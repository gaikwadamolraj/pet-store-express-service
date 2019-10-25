import http from 'http'
import express from 'express'

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import fs from 'fs';
import path from 'path';

const hostname = '127.0.0.1';
const {NODE_PORT: port = 9400 , NODE_ENV : env = 'dev' }  = process.env;

const app = express()
const server = http.createServer(app);

if(env !== 'test') {
  var accessLogStream = fs.createWriteStream(path.join(__dirname , '../log/access.log'), {flags: 'a'});
  app.use(logger('combined', {"stream": accessLogStream}));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;