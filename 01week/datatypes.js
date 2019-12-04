//Write a JavaScript program to display the current day and time.
let currentDate = new Date();
console.log("The current date and time is ", currentDate);
//Write a JavaScript program to convert a number to a string.
let num = 85;
let n = num.toString();
let numToStr = toString(num);
console.log(typeof n, n);
//Write a JavaScript program to convert a string to the number.
let str = '17';
let s = Number(str);
console.log(typeof s, s);
//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
let type = new Date();

function outputDataType(c) {
    console.log(typeof c);
}

outputDataType(type);

//Write a JavaScript program that adds 2 numbers together.
let a = 1;
let b = 6;
console.log(a + b);
//Write a JavaScript program that runs only when 2 things are true.
let x = 7;
let y = 12;

if (x > 5 && y >10) {
    console.log('both are true!');
}
//Write a JavaScript program that runs when 1 of 2 things are true.
let weeks = 52;
let months = 12;

if (x > 5 || y < 10) {
    console.log('only one is true...');
}
//Write a JavaScript program that runs when both things are not true.
let carModel = 'Model S';
let carMake = 'Tesla';

if (carMake !== 'Ford' && carModel !== 'Focus') {
    console.log('neither of these are true!');
}