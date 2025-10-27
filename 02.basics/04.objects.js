// singleTon

const tinderUser = new Object() // single ton object
// const tinderUser = {} Non single ton object 

tinderUser.id = "1234df"
tinderUser.name = "Shah"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "Shah@work.com",
    fullName : {
        userFullName : {
            firstName : "Mohammad",
            lastName : "Shah"
        } 
    }
}
// console.log(regularUser.fullName.userFullName.lastName);



const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
// This is we are merging a object1,2 like a string by using .assign
//const obj3 = Object.assign({}, obj1, obj2)

// And we can use spread aslo to merg 
const obj3 = {...obj1, ...obj2}
// console.log(typeof obj3);

// To see values and keys and there datatypes 
// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser)); // It sprates the each values in arrays

// console.log(tinderUser.hasOwnProperty('id')); // To check property is available or not


                             // object de-struturings \\

const course = {
    coursename : "JS With chai",
    price : 999,
    courseInstructor : "hitesh",
    courseLoggedIn : false
}

const {courseInstructor : instructor} = course // This is the way to de-struture the
// object
console.log(instructor);


const navbar = (company) {
    {}
}

navbar(company = "master")

                             