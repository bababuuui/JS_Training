//To Do Paper
//alert("Here will be my project");
let toDoItems = [];

var loadToDos = function() {
		$.getJSON( "todos.json", function(data) {
			console.log(data.data);	
			toDoItems = data.data;
		});
	};
loadToDos();