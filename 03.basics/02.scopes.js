// const :
// Scope: Block-scoped.
// Reassignment: Cannot be reassigned after initialization.

// let :
// Scope: Block-scoped (limited to the block {} where it's declared).
// Reassignment: Can be reassigned.

// var : [** dont use var variable **]
// Scope: Function-scoped (or globally scoped if declared outside a function).
// Reassignment: Can be reassigned.


// What we write in if statement it is a block scope AND what we we write out it is 
// global scope 


// example of this variables // print one by one

if(true) {
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);



//                                  nested functions                                  \\

function one() {
    const username = "junaid"

    function two(){
        const website = "Github"
       // console.log(username);
    }
    //console.log(website); // Because it showing error is we have locked console out side of it
    //  if this line will be executed then another variable will 
    // exectues other waise it shows error
    
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " Github"
        console.log (username + website);
        }
       // console.log(website);       
}
//console.log(username);


// ---------------------------------- Interesting ------------------------------------\\

// It can be access before the code 
console.log(addOne(5));

function addOne(num) {
    return num + 1
}


// This is how we declare a function with a variable it can't be access before we 
// console.log of the code
console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}
