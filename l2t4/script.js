/*Implement a function with two string arguments, which returns true if the given strings are anagrams,
 and false otherwise. Anagrams are the strings, which consist of the same symbols, 
 but perhaps in a different order. For example ‘melon’ and ‘lemon’ are anagrams, 
 but ‘ball’ and ‘lab’ - no, because they have different amounts of letter ‘l’*/

var string1= 'lemon';
var string2 ='melon';

//var string1Splitted = string1.split('');
//console.log(string1Splitted);

function areAnagrams(string1,string2) {

	var  s1 = string1.split('');
	var  s2 = string2.split('');

	if (s1.length!=s2.length){
		return false;
	}
	else{
		var resultS1 = s1.sort();
		var resultS1 = s1.join('');
		var resultS2 = s2.sort();
		var resultS2 = s2.join('');
		if(resultS1===resultS2)
			return true;
		else
			return false;
	}
		
}
console.log("The first word:",string1);
console.log("The second word:",string2);
console.log("Anagrams? - ",areAnagrams(string1,string2));