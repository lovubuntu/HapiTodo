var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');
var db = mongoose.connection;

db.on('open', function(){
	console.log('Connected to db');
});
db.on('error', console.error.bind(console, 'DB connection error'));