// Immediately Invoked Function Expressions (IIFE)

(function newCode(){ // named IIFE
console.log(`DB CONNECTED`);
})(); // ; TO end the code If we remove this semi colon the next line of code will 
// not exucute IIFE is started the execution of the code and to stop the we have to use ;


// we can add variables

( (name) => { // unamed IIFE
console.log(`DB CONNECTED TWO ${name}`);
} )('junaid')