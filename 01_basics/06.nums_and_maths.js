const score = 400 
//console.log(typeof score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);

// .toString() converts the number into string
// .length it shows the length of number


//console.log(balance.toFixed(2));

// .tofixed(2) => 100.00
// Number object to format the number as a string with exactly two 
// digits after the decimal point. It also rounds the number if necessary.


const totalbill = 124.8990
//console.log(totalbill.toPrecision(3));
//124.8990 .toPrecision(3) => 125
//124.8990 .toPrecision(4) => 124.9
// .toPrecision() We hvae to gave Precision value in the () and. Its
//  gives a precise value 

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));


/* --------------------------- Maths ---------------------------- */


//console.log(Math);
//console.log(Math.abs(-9)); //.abs is a absolute value. Whenever we 
// get a negative value it turn into absolute value  
// {only minus becomes plus} - => +

//console.log(Math.round(4.5)); // .round It will roundoff decimal
// number Ex : 4.6 => 5  //. 4.4 => 4

//console.log(Math.ceil(4.2)); // .ceil Means it will give top value
//  what ever decimal number is Ex : 4.2 => 5

//console.log(Math.floor(4.9)); // .floor It will gives lowest value 
// for any decimal number is Ex : 4.8 => 4

//console.log(Math.min(4,56,73,2,5)); 
// .min finds and give minimum value

// console.log(Math.max(32,74,75,32)); 
// .max it will give maximun value


// console.log(Math.random());
console.log (Math.round (Math.random()*6) + 1);
// .random is it will give a random numbers from 0 with decimals which we 
// can use in dices games 

const min = 10
const max = 20

console.log (Math.round(Math.random() * (max - min + 1)) + min);

// And this is a random numbers which comes from 10 to 20 and we 
// can set numbers which we want 