const marvel_heroes = ["Hulk", "Ironman", "Thor"];

const Dc_heroes = ["Batman", "Spuerman", "Flash"]
//console.log(Dc_heroes);

// If we want to merg this to two arrays in single array using .push. The results comes 
// Array inside the array [...[...]] This method is worng to merg

// marvel_heroes.push(Dc_heroes) 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);


// Right way to merg two arrays in single array is .concat

// const allheroes = (marvel_heroes.concat(Dc_heroes));
// console.log(allheroes);


 // This is a spread operator In this we are using ... and the arrays becomes individual 
 // element and we can add many vaiables 

 const all_new_heroes = [...marvel_heroes, ...Dc_heroes]
// console.log(all_new_heroes);
 

// In this we can see in single array we have many other arrays. To do in order we can 
// use .flat() in bracket write the deepth of clear or array 
const myanother_array = [1,2,3,4,5,[3,4,6,[4,7,9,0],3,5,6,]]
const real_another = myanother_array.flat(4) 
// console.log(myanother_array);
// console.log(real_another);



// when ever we select data from web pages it comes in different format to check and 
// convert into Array we use .isArray, .from 
console.log(Array.isArray("junaid")); 
console.log(Array.from("junaid"));
console.log(Array.isArray([1,2,3,4,5]));

