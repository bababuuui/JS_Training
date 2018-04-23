/*Reverse a given number n (123 -> 321). Log the result on console.
*/
//Solution using methods of  Array class :)
var number = 359;
var s=number.toString();
var symbols= s.split("");
var rs=symbols.reverse();
var result=rs.join("");
console.log(result);