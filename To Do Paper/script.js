//To Do Paper
//alert("Here will be my project");
let toDoItems = [];

var start = function() {
		$.getJSON( "todos.json", function(data) {
			console.log(data.data);	
			toDoItems = data.data;
		}).done(function(){
			viewToDoListDom("all");
		});
	};
start();