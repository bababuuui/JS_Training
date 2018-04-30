/*Algorithms for tasks 1 and 2 implement as functions with one argument. 
Run both function with the same array in one script.js file.*/

var arr = [-1,2,-3,-2,4,2,-3];

function l2t1(arr){
	
	var arrB = arr.filter(function(num){
	return num>0;
	});
	var arrC = arr.filter(function(num){
	return num<0;
	});
	console.log(arrB);
	console.log(arrC);
}

function l2t2(arr){
	var arr2 = [];

	arr.forEach(function(a,i,arr){
    if (arr2[a] === undefined)
    	arr2[a] = 1;        
    else
        arr2[a] = arr2[a] +1;
	});

	for (var k in arr2){
 	console.log(k, '-', arr2[k]);
 	}
}
console.log("l2t1 result:");
l2t1(arr);
console.log("l2t2 result:");
l2t2(arr);
