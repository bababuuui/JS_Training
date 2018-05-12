//To Do Paper
//alert("Here will be my project");


var start = function() {
		$.getJSON( "todos.json", function(data) {
			console.log(data.data);	
			toDoItems = data.data;
		}).done(function(){
			//test
			//completeToDoItem(11);
			//viewToDoListDom("all");
			viewToDoListDom(viewToDoList("all"));
			//editToDoItemDom(2,"Changed");
			//editToDoItemDom(2,"");// invaild text
			//addToDoItemDom(toDoItemTest);
			//addToDoItemDom(toDoItemTest2); // attempt to add todo with the same id
			//deleteToDoItemDom(13);
			//deleteToDoItemDom(100); // ID doesn't exist

		});
	};
start();