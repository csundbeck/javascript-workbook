//Warm-up: pass an array to a function that doubles the array, each item in the array is displyed twice

let initArray = [1,2,3,4,5];

function doubleArray(arr) {
    let doubledArr = [];
    arr.forEach(function(element) {
        doubledArr.push(element);
        doubledArr.push(element);
    });
    return doubledArr.length;
}

console.log(`The original length of the array was: ${initArray.length}`);
console.log('The new length is: ' + doubleArray(initArray));

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

function doubleArray2(arr) {
    let newArray = arr + ',' + arr;
    return newArray.split(",").sort();
}

console.log(doubleArray2(initArray));

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//Make an array of objects where each object represents a credit card transaction
let transactions = [
    {
        date: "01/01/2020",
        merchant: "Target",
        amount: 43.27
    },
    {
        date: "01/01/2020",
        merchant: "Hat Creek",
        amount: 15.32
    },
    {
        date: "01/19/2020",
        merchant: "Shell",
        amount: 22.75
    },
    {
        date: "01/21/2020",
        merchant: "Apple",
        amount: 193.43
    },
    {
        date: "01/12/2020",
        merchant: "H-E-B",
        amount: 52.06
    },
    {
        date: "02/17/2020",
        merchant: "Cinemark",
        amount: 12.60
    },
    {
        date: "02/18/2020",
        merchant: "Supercuts",
        amount: 27.19
    },
];

transactions.forEach(function(obj) {
    console.log(`I spent $${obj.amount} at ${obj.merchant} on ${obj.date}.`);
});

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

// let names = ['mike', 'mark', 'matt'];

// let initials = names.map(function(name){
//     return name[0];
// });

// console.log(names);
// console.log(initials);

//For every transaction in the transactions array, add a new transaction
//to the discounted array where the amount for each transaction is 10% 
//less than the original
let discounted = transactions.map(function(element){
    let newTransaction = {};
    newTransaction.date = element.date;
    newTransaction.merchant = element.merchant;
    newTransaction.amount = Math.floor(element.amount * .9);

    //OR
    // let newTransaction = {
    //     date: element.date,
    //     merchant: element.merchant,
    //     amount: element.amount * .9
    // }

    return newTransaction;
});

discounted.forEach(function(obj) {
    console.log(`I spent $${obj.amount} at ${obj.merchant} on ${obj.date}.`);
});

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

let amts = transactions.map(function(element){
    return element.amount;
});
console.log("The amts are = ", amts);

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//Return transactions that are more than $20
let suspicious = transactions.filter(function(element) {
    return element.amount > 20;
});

console.log(suspicious);

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

let numArr = [4,3,7,2];

let answer = numArr.reduce(function(prev, curr){
    let next = prev + curr;
    return next;
});

console.log(answer);

//Reduce the list of transaction to the one that has the highest amount
let greatest = transactions.reduce(function(prev, curr){
    if (curr.amount > prev.amount) {
        return curr;
    } else {
        return prev;
    }
});

console.log(greatest.amount);