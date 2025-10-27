let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// // its comes in milliseconds

// console.log(myCreatedDate.getTime());
//  // with this we can campare milliseconds

// console.log(Math.floor(Date.now()/1000)); 
// // with this we can convert into seconds

let newDate = new Date()
//console.log(newDate);
// shows the date

// console.log(newDate.getMonth() + 1);
// date and month oct => 10

// console.log(newDate.getDay()); 
// date and month and day monday => 1


newDate.toLocaleString('default', {
    dayPeriod:"long"
    
})
console.log(newDate);

