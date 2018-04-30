/*The numeric array is given. 
You should find amount of reps for each element in the array and log it on console.
 For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] 
 you should log: 1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)*/

var arr = [-1,2,-3,-2,4,2,-3];
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



