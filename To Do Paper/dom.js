function addToDoItemDom (toDoItem = toDoItemTest){
	if (addToDoItem(toDoItem)){
	
		document.getElementById("todo-items").appendChild(createToDo(toDoItem));
	}
}

function createToDo(toDoItem){
	let div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;
	let todoHtml;
	if (toDoItem.completed===true){
		todoHtml = `<p > Id: ${toDoItem.id}</p> 
						<p class = "textToDo"> ${toDoItem.text}</p>
						<!--<p> Completed: ${toDoItem.completed}</p>-->
						<form> 
						<label> Completed </label>
						<input type = "checkbox"	checked> 
						</form>
						<br><br>`;
	}
	else{
		todoHtml = `<p > Id: ${toDoItem.id}</p> 
						<p class = "textToDo">  ${toDoItem.text}</p>
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
	}
	
}



function editToDoItemDom(toDoItemId,newText){
		if(editToDoItem(toDoItemId,newText)){
			//viewToDoListDom("all");
			document.getElementById(toDoItemId).getElementsByClassName("textToDo")[0].innerHTML = newText;		
		}
		else{
			alert(`It is impossible to edit TODO with ID = ${toDoItemId}`);
		}
		//
}

function deleteToDoItemDom(toDoItemId){
		if(deleteToDoItem(toDoItemId)){
			// viewToDoListDom("all");
			document.getElementById(toDoItemId).remove();
		}
		else{
			alert(`TODO with ID = ${toDoItemId}  doesn't exist`);
		}
}

//function completeToDoItemDom(toDoItem){}
	