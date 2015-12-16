var mongoose = require('mongoose');
var connectionString = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/todo';
mongoose.connect(connectionString);
var db = mongoose.connection;

db.on('open', function(){
	console.log('Connected to db');
});
db.on('error', console.error.bind(console, 'DB connection error'));