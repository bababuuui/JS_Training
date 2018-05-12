const todoItems =document.getElementById("todo-items");
const selectView = document.getElementById("selectView");
const addBlock = document.getElementById("addBlock");

function addToDoItemDom (toDoItem){
	if (addToDoItem(toDoItem)){
		todoItems.insertBefore(createToDo(toDoItem), todoItems.firstChild)
	}
}

function createToDo(toDoItem){
	let div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;

	let todoHtml;
	if (toDoItem.completed===true){
		div.style.background = '#52ea05';
		todoHtml = `<a id= "deleteCTA" href="#">X</a>
						<p > Id: ${toDoItem.id}</p> 
						<p class = "textToDo"> ${toDoItem.text}</p>
						<!--<p> Completed: ${toDoItem.completed}</p>-->
						<form> 
						<label> Completed </label>
						<input type = "checkbox" checked disabled>
						<br><br>
						<input type = "button"  value = "Edit"> 
						</form>
						<br><br>`;
	}
	else{
		todoHtml = `<a id= "deleteCTA" href ="#">X</a>
						<p > Id: ${toDoItem.id}</p> 
						<p class = "textToDo">  ${toDoItem.text}</p>
						<!--<p> Completed: ${toDoItem.completed}</p>-->
						<form> 
						<label> Completed </label>
						<input type = "checkbox">
						<br><br>
						<input type = "button"  value = "Edit"> 
						</form>
						<br><br>`;
	}
	div.innerHTML = todoHtml;
	return div;
}
/*
function viewToDoListDom (itemsType){
	document.getElementById("todo-items").innerHTML= "";
	if(viewToDoList(itemsType)){
		let todoList = viewToDoList(itemsType) ;

		for(let i =0 ; i<todoList.length;i++){
		document.getElementById("todo-items").appendChild(createToDo(todoList[i]));
		}
	}
}
*/

function viewToDoListDom(toDoItems){
	document.getElementById("todo-items").innerHTML= "";
	for(let i =0 ; i<toDoItems.length;i++){
		document.getElementById("todo-items").appendChild(createToDo(toDoItems[i]));
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

todoItems.addEventListener('click',editToDoHandler);
todoItems.addEventListener('click',deleteToDoHandler);

function editToDoHandler(event){
	if (event.target.type !== 'button'){
		return;
	}
	console.log(event);
	//Старый текст передать в prompt
	let textToEdit = prompt("Text to Edit", "edit");
	const toDoItemId =parseInt(event.target.parentElement.parentElement.id, 10) ;
	console.log(event.target.parentElement.parentElement.id);
	console.log(textToEdit);
	editToDoItemDom(toDoItemId,textToEdit);
}

addBlock.addEventListener('click',addToDoHandler);

function addToDoHandler(event){
	if (event.target.type !== 'button'){
		return;
	}
		const insertId=addBlock.getElementsByTagName('input')[0];
		const insertText=addBlock.getElementsByTagName('input')[1];
		let toDoItem = {};
		toDoItem.id = parseInt(insertId.value,10);
		toDoItem.text = insertText.value;
		toDoItem.completed= false;
		console.log(toDoItem);
		addToDoItemDom(toDoItem);
		
}

function deleteToDoHandler(event){
	if (event.target.id !== 'deleteCTA'){
		return;
	}
	console.log(event);
	const toDoItemId = parseInt(event.target.parentElement.id, 10);
	deleteToDoItemDom(toDoItemId);
}

selectView.addEventListener('click', selectViewHandler)

function selectViewHandler(event){
	if (event.target.type !== 'radio'){
		return;
	}
	console.log(event);
	const filter = event.target.value;
	viewToDoListDom(viewToDoList(filter));

}

todoItems.addEventListener('click',completeToDoHandler);

function completeToDoHandler(event){
	if (event.target.type !== 'checkbox'){
		return;
	}
	const toDoItemId = parseInt(event.target.parentElement.parentElement.id, 10);
	console.log(toDoItemId);
	completeToDoItem(toDoItemId);
	event.target.disabled=true;
	event.target.parentElement.parentElement.style.background = '#52ea05';
	event.target.parentElement.parentElement.style.textDecoration =  'line-through';
}

//function completeToDoItemDom(toDoItem){}
	