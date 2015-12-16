var TodosHandler = {};
var Todo = require('../model/todo');

TodosHandler.index = function(request, reply){
	reply(Todo.find());
}

TodosHandler.create = function(request, reply){
	var todo = new Todo(request.payload);
	todo.save(function(err, todo){
		if (err) { return reply(err) };
		return reply(todo);
	});
}

TodosHandler.update = function(request, reply){
	Todo.findByIdAndUpdate(request.params.id, 
			{ $set: request.payload },
			{new: true}, 
			function(err, todo){
				console.log(todo);
				if (err) { reply(err) };
				reply(todo);
	});
}

TodosHandler.delete = function(request, reply){
	Todo.findByIdAndRemove(request.params.id, function(err, todo){
		if (err) {reply(err)};
		reply(todo);
	});
}

TodosHandler.show = function(request, reply){
	Todo.findById(request.params.id, function(err, todo){
		if (err) {reply(err)};
		reply(todo);
	});
}

module.exports = TodosHandler;