function Myfunction(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
    console.log("W");
    console.log("O");
    console.log("R");
    console.log("L");
    console.log("D");
}

// Myfunction()

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    
    // There are two types to print the value   \\

    return number1 + number2
}

const result = addTwoNumbers(3,6)

// console.log("Result:", result);


function loginUserMessage(userName = "sam") {
    // if(!userName){
    // This to works Same if the value is true it print 
    if(userName === undefined){
        console.log("PLEASE enter your userName");
        return
    }
    return `${userName} just logged in `
}

// console.log(loginUserMessage("Junaid"))
// console.log(loginUserMessage())


// function used to work in e commerce webpage in cart adding items and its prices

function calculatePriceCart( val1,val2,  ...num1){
    return num1
}
// console.log(calculatePriceCart(200, 300, 400, 700));


// passing a object into function

const user = {
    username : "shah",
    price : 199
}

function handleObject(anyobject){
//    console.log(`user name is ${anyobject.username} and the price is ${anyobject.price}`)
}

// (handleObject(user));

handleObject({
    username : "mohammad",
    price : 399
});

const myNewarray = [200, 300, 400, 600]

function secondValue(getArray) {
    return getArray[2]
}
//console.log(secondValue(myNewarray)); // it prints what we have given in idnex value
console.log(myNewarray); // prints all arrays

