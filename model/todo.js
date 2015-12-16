var mongoose = require('mongoose');
var todoSchema = mongoose.Schema({
	task: String,
	status: Boolean
});

todoSchema.methods.markComplete = function(){
	this.status = true;
	this.save();
}

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;