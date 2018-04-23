/*Find the following sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n for a given n. 
Log the result on console.
*/
var s = 0;
var n =5;
while(n>0){
	s+=1/n;
	n--;
}
console.log(s);