/*Implement a function with two string arguments, which returns true if the given strings are anagrams,
 and false otherwise. Anagrams are the strings, which consist of the same symbols, 
 but perhaps in a different order. For example ‘melon’ and ‘lemon’ are anagrams, 
 but ‘ball’ and ‘lab’ - no, because they have different amounts of letter ‘l’*/

const string1= 'lemon';
const string2 ='melon';



function areAnagrams(string1='qwe',string2='weq') {

	let  s1 = string1.split('');
	let  s2 = string2.split('');

	if (s1.length!=s2.length){
		return false;
	}
	else{
		let resultS1 = s1.sort().join('');
		let resultS2 = s2.sort().join('');
		if(resultS1===resultS2)
			return true;
		else
			return false;
	}
		
}
console.log(`The first
 word:`,string1);
console.log(`The second
 word:`,string2);
console.log("Anagrams? - ",areAnagrams(string1,string2));