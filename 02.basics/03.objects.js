// object literals

const mysym =  Symbol("key1")

const user = {
    name : "junaid",
    "full name" : "Mohammad Junaid",
    [mysym] : "mykey1",
    age : 18,
    location : "Hyderabad",
    Email : "Junaid@Work.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Friday",]
}

// console.log(user.name);
// console.log(user["Email"]);
// console.log(user["full name"]);
// console.log( user[mysym]);

user.location = "Mumbai" // To over write or change the value

//Object.freeze(user) // To freeze the value that we can't change 
user.Email = "mohammad@class.com"

//console.log(user);

// ---------------------------------- Adding functions --------------------------------\\

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());
