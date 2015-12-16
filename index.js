var Hapi = require('hapi');
var db = require('./database/connector');
var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route(require('./config/routes'));

server.start(function(){
	console.log('Server started: '+server.info.uri);
});