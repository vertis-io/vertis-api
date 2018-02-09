require('babel-register');
require('babel-polyfill');

let fs = require('fs');
let path = require('path');
let env = require('dotenv');

if (!fs.readFileSync(path.resolve(__dirname, '../.env'))) {
  console.log('.env configuration file must exist inside of the socket-server root');
  process.exit();
}

env.config({
  path: path.resolve(__dirname, '../.env')
});

require('../src');