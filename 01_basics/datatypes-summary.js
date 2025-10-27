//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "juniad",
    age: 18,
}
const myFunction = function(){
//    console.log("Hello world");
}

// console.log(typeof anotherId);



//  Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

/*----------------------------------------------------------------*/

          // Stack (primitive), Heap (Non-primitive) \\ 

let myFirstName = "Mohammad";

let myanothername = myFirstName

myanothername = "Junaid"
console.log(myFirstName);
console.log(myanothername);

//Stack primitive
// We can store:
 // numbers
 // booleans etc.
  // It all goes in Stack primitive.
 // When ever we take somrthing from stack it gives a copy of that

// Heap Non-primitive
// We can store:
// Arrays 
// objects
// In this when ever we take something from Heap it gives 
// reference means when we update it changes from original