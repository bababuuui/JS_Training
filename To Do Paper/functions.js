//To Do Paper
alert(`Here will 
	be my project`);



let toDoItemTest = {
	text:"DO",
	completed: false,
	id: 1
	
}

let toDoItemTest2 = {
	text:"sameID",
	completed: false,
	id: 1
	
}

function addToDoItem (toDoItem = toDoItemTest) {
	if (toDoItem.text== undefined || toDoItem.completed== undefined || toDoItem.id== undefined || toDoItem.text ==="")
		return false;
	
	for(let i=0;i<toDoItems.length;i++){
		if (toDoItem.id === toDoItems[i].id){
			return false;
			break;
		}
	}

	if (toDoItem.text==="")
	return false;
	else {
		toDoItems.push(toDoItem);
		console.log(toDoItems);
		return true;
	}
}

function viewToDoList (itemsType = "all"){
	let obj = [];
	if (itemsType === ""){
		return false;
	}
	
	else if (itemsType==="completed"){
		/*toDoItems.forEach( function(element, index) {
			if(element.completed)
			obj.push(element);
		});*/
		obj = toDoItems.filter(function(element){
			return element.completed == true
		});
	}
	else if (itemsType==="not_completed"){
		obj = toDoItems.filter(function(element){
			return element.completed == false
		});
	}
	else if (itemsType==="all"){
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
		console.log(toDoItems);
		return true;
	}
}

function deleteToDoItem(toDoItemId){
	let isDeleted=false;
	for(let i=0;i<toDoItems.length;i++){
		if (toDoItems[i].id===toDoItemId){
			toDoItems.splice(i,1);	
			isDeleted = true;
			console.log(toDoItems);
			break;
			}
		}
	return isDeleted;
}

function completeToDoItem(toDoItemId){
	for(let i=0;i<toDoItems.length;i++){
		if (toDoItems[i].id===toDoItemId){
			toDoItems[i].completed=true;
			console.log(toDoItems);
			break;
			}
		}

}







