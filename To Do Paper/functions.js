//
//alert(`Here will 	be my project`);



let toDoItemTest = {
	text:"test1",
	completed: false,
	id: 11
	
}

let toDoItemTest2 = {
	text:"test2",
	completed: true,
	id: 12
	
}
let toDoItems = [];


function addToDoItem (toDoItem = toDoItemTest) {
	if (toDoItem.text== undefined || toDoItem.completed== undefined   )
		return false;
	if (!toDoItem.id){
		alert("ID must be number")
		return false;
	} 

	for(let i=0;i<toDoItems.length;i++){
		if (toDoItem.id === toDoItems[i].id){
			alert(`TODO with ID = ${toDoItem.id}  already exists`);
			return false;
			break;
		}
	}

	if(toDoItem.text ===""){
		alert("Please input what you need TODO in text field");
		return false;
	}
	else {
		
		toDoItems.unshift(toDoItem);
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



function isIdPresent(toDoItemId){
	flag = false;
	toDoItems.forEach( function(element, index) {
		if(toDoItemId===element.id)
			flag = true;
	});
	return flag;
}
function editToDoItem(toDoItemId, newText){
	let isEdited;
	if((newText==="")||(!isIdPresent(toDoItemId)))
		isEdited= false;
	else{
		toDoItems.forEach( function(element, index) {
			if(toDoItemId===element.id)
				element.text=newText;
		});
		console.log(toDoItems);
		isEdited=true;
	}
	return isEdited;
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







