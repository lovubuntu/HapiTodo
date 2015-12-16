var TodosHandler = require('../handlers/todosHandler');

var Routes = [{
	path: '/todos',
	method: 'GET',
	handler: TodosHandler.index
},
{
	path: '/todos',
	method: 'POST',
	handler: TodosHandler.create
},
{
	path: '/todos/{id}',
	method: 'PUT',
	handler: TodosHandler.update
},
{
	path: '/todos/{id}',
	method: 'DELETE',
	handler: TodosHandler.delete
},
{
	path: '/todos/{id}',
	method: 'GET',
	handler: TodosHandler.show
}];

module.exports = Routes;