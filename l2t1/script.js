/*The numeric array A is given. 
You should move elements > 0 to the array В, elements < 0 to the array С.
 Log on console both arrays..*/

const arr = [-1,2,-3,-2,4];


let arrB = arr.filter(function(num){
	return num>0;
});

let arrC = arr.filter(function(num){
	return num<0;
});

console.log(arrB);

console.log(arrC);