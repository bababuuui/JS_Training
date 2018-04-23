/*Check whether a given number is prime. 
Log on console true or false.
*/
var a =11;
var k= a-1;
var result=true;
while(k>1){
	if((a%k)==0)
	{
	 result= false;	
	 break;
	}
	k--;
}
console.log(result);