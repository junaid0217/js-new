// Array

const arr = [0, 1, 2, 3, 4, 5]
//console.log(arr);

const newOneArray = [5,4,3,2,7]
// console.log(newOneArray[3]);
 
// ---------------------------------- Array methods -----------------------------------\\

// arr.push(6,"Hello") // To add in arrays
// arr.pop() // To Remove what we have add at end
// arr.unshift(21) // It will add at starting point of the array
// arr.shift() // Removes from starting point

// console.log(arr.includes(2)); // We can ask questions a it replys in boolena 
// console.log(arr.indexOf(3)); // it shows index value 

// const newArray = arr.join() // It converts arrys into string

// console.log(arr);
// console.log(typeof newArray);

// slice, splice

console.log("A ", arr);

const mnarry1 = arr.slice(1, 3)
console.log(mnarry1);
console.log("B ", arr);

const mnarry2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(mnarry2);


