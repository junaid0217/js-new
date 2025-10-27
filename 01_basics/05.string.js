const name = "junaid"
const repoCount = 2

// console.log("Hello my name is " + name + " and my repo count is " + repoCount); 
// recommeded of not to use this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Using back ticks is 
// Advantage of this is String interpolation
// Means we are creating placeholder whatever variable is inside of 
// them we can directly inject 


const gameName = new String('Junaidhc')

// console.log(gameName);
// console.log(gameName.length);
// console.log(typeof gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));


const newString = gameName.substring(0, 4)
// console.log(newString);


const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

// In slice we can enter negative values 


const newStringOne = "   Junaid   "
//console.log(newStringOne);
//console.log(newStringOne.trimEnd());

// Trim removes whitespace from both ends of the string


const url = "https://Mohammad.com/junaid%20shah"
//console.log (url.replace('%20', '-'));
// With .replace we can change %20 to - whatever we can change

//console.log(url.includes('junaid'));
// With .includes We can ask questions with that

const value = "There is a man standing near busstop"

const words = value.split(" ")
console.log(words[3]);

const chars = value.split("")
console.log(chars[11]);

const sentence = value.split(" ");
console.log(sentence);

// split  method used to divide a string into an ordered list of 
// substrings, placing these substrings into an array, and returning the array. 