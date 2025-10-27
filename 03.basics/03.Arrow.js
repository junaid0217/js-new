// This key word : refers the  currtent contacts
const user = {
    username : "Mohammad",
    pirce : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`);
 //       console.log(this);
        
    }
}
//user.welcomeMessage()
 user.username = "junaid"
//user.welcomeMessage()
//console.log(this);

// function chai(){
//     let usernam = "shah"
//     console.log(this.usernam);
    
// }
// chai()

// How to declare functions with arrow functions \\

// const code = function () {
//      let usernam = "shah"
//      console.log(this.usernam);
// }

// const code =  () => {
//     let usernam = "shah"
//   console.log(this);
// }
// code()


// explicit means we have to write return statement to return the value  
// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit: without writing return it prints 
// the value 

const addTwo = (num1, num2) => ({username: "junaid"}) // to print the Object
console.log(addTwo(5, 4));