//To Do Paper
alert("Here will be my project");

var toDoItems = [];

var toDoItemTest = {
	text:"DO",
	completed: false,
	id: 1
	
}

function addToDoItem (toDoItem ) {
	//console.log(toDoItem);
	// body...
	if (toDoItem.text== undefined && toDoItem.complete== undefined && toDoItem.id== undefined && toDoItem.text ==="")
		return false;
	for(var i=0;i<toDoItems.length;i++){
		if (toDoItem.id === toDoItems[i].id)
			return false;
			break;
	}
	if (toDoItem.text==="")
	return false;
	else {
		toDoItems.push(toDoItem);
		return true;
	}
}

function viewToDoList (itemsType){
	var obj = [];
	if (itemsType === ""){
		return false;
	}
	
	else if (itemsType==="completed"){
		toDoItems.forEach( function(element, index) {
			if(element.completed)
			obj.push(element);
		});
	}
	else if (itemsType==="not_completed"){
		toDoItems.forEach( function(element, index) {
			if(!element.completed)
			obj.push(element);
		});
	}
	else {
		toDoItems.forEach( function(element, index) {
			obj.push(element);
		});
	}
	return obj;
}

function editToDoItem(toDoItemId, newText){
	if(newText==="")
		return false;
	else{
		toDoItems.forEach( function(element, index) {
			if(toDoItemId===element.id)
				element.text=newText;
		});
		return true;
	}
}

function deleteToDoItem(toDoItemId){
	for(var i=0;i<toDoItems.length;i++){
		if (toDoItems[i].id===toDoItemId){
			toDoItems[i] = null;
			delete toDoItems[i];	
			return true;
			break;
			}
		}
}

function completeToDoItem(toDoItemId){
	for(var i=0;i<toDoItems.length;i++){
		if (toDoItems[i].id===toDoItemId){
			toDoItems[i].completed=true;
			break;
			}
		}

}




console.log(addToDoItem(toDoItemTest));
console.log(addToDoItem(toDoItemTest));

console.log(editToDoItem(1,"Hey"));
//console.log(deleteToDoItem(1));

completeToDoItem(1);

console.log(viewToDoList("completed"));

