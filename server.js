process.env.ENV_NODE = process.env.ENV_NODE || 'development';
process.env.DEBUG = process.env.DEBUG || require("./config/config.js").debug;
var port = 8080;
var http = require('http');
var app = require('./config/express')();

var server = http.createServer(app)
server.listen(port,function() {
  console.log('Server start at port: '+port);
})