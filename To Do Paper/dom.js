function addToDoItemDom (toDoItem = toDoItemTest){
	if (addToDoItem(toDoItem)){
		/*var div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;
		let todoHtml = `<p > Id: ${toDoItem.id}</p> 
						<p> Text:${toDoItem.text}</p>
						<p> Completed: ${toDoItem.completed}</p>
						<br>`;
		div.innerHTML = todoHtml;*/
		document.getElementById("todo-items").appendChild(createToDo(toDoItem));
		return true;
	}
	else
		return false;
}

function createToDo(toDoItem){
	let div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;
	let todoHtml;
	if (toDoItem.completed===true){
		todoHtml = `<p > Id: ${toDoItem.id}</p> 
						<p> Text:${toDoItem.text}</p>
						<!--<p> Completed: ${toDoItem.completed}</p>-->
						<form> 
						<label> Completed </label>
						<input type = "checkbox"	checked> 
						</form>
						<br><br>`;
	}
	else{
		todoHtml = `<p > Id: ${toDoItem.id}</p> 
						<p> Text:${toDoItem.text}</p>
						<!--<p> Completed: ${toDoItem.completed}</p>-->
						<form> 
						<label> Completed </label>
						<input type = "checkbox"> 
						</form>
						<br><br>`;
	}
	div.innerHTML = todoHtml;
	return div;
}

function viewToDoListDom (itemsType){
	document.getElementById("todo-items").innerHTML= "";
	if(viewToDoList(itemsType)){
		let todoList = viewToDoList(itemsType) ;

		for(let i =0 ; i<todoList.length;i++){
		document.getElementById("todo-items").appendChild(createToDo(todoList[i]));
		}
		return true;
	}
	else 
		return false;

	
}


function editToDoItemDom(toDoItemId,newText){
		if(editToDoItem(toDoItemId,newText)){
			viewToDoListDom("all");
		}
}

function deleteToDoItemDom(toDoItemId){
		if(deleteToDoItem(toDoItemId)){
			 viewToDoListDom("all");
		}
}

console.log(viewToDoListDom("all"));